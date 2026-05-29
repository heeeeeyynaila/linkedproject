/**
 * Arcio Clinical Portal — API Service Layer
 * 
 * Centralized API client for communicating with the Django backend.
 * All API calls go through this module so the base URL and auth headers
 * are managed in one place.
 * 
 * Auth: JWT Bearer tokens via djangorestframework-simplejwt
 * 
 * Usage:
 *   import api from '@/services/api';
 *   const patients = await api.patients.list();
 */

// ── Configuration ──────────────────────────────────────────────
// In development Vite proxies /api → Django (see vite.config.js).
// In production the React build is served by Django, so same origin.
const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

// ── Token helpers ──────────────────────────────────────────────
function getAccessToken() {
  return localStorage.getItem('access_token');
}

function getRefreshToken() {
  return localStorage.getItem('refresh_token');
}

function setTokens(access, refresh) {
  localStorage.setItem('access_token', access);
  if (refresh) localStorage.setItem('refresh_token', refresh);
}

function clearTokens() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
}

// ── Core fetch wrapper ─────────────────────────────────────────
async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Attach JWT Bearer token if available
  const token = getAccessToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Remove Content-Type for FormData (browser sets boundary automatically)
  if (options.body instanceof FormData) {
    delete headers['Content-Type'];
  }

  const config = {
    ...options,
    headers,
  };

  let response = await fetch(url, config);

  // If 401, attempt token refresh once
  if (response.status === 401 && getRefreshToken()) {
    const refreshed = await refreshAccessToken();
    if (refreshed) {
      headers['Authorization'] = `Bearer ${getAccessToken()}`;
      config.headers = headers;
      response = await fetch(url, config);
    }
  }

  // Handle 204 No Content
  if (response.status === 204) return null;

  // Parse JSON or throw
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const error = new Error(data?.detail || data?.message || `API Error ${response.status}`);
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

// ── Token refresh ──────────────────────────────────────────────
async function refreshAccessToken() {
  try {
    const response = await fetch(`${BASE_URL}/token/refresh/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh: getRefreshToken() }),
    });
    if (response.ok) {
      const data = await response.json();
      setTokens(data.access, data.refresh || getRefreshToken());
      return true;
    }
    // Refresh failed — clear tokens (user must re-login)
    clearTokens();
    return false;
  } catch {
    clearTokens();
    return false;
  }
}

// ── HTTP method shortcuts ──────────────────────────────────────
const get    = (endpoint)        => request(endpoint, { method: 'GET' });
const post   = (endpoint, body)  => request(endpoint, { method: 'POST', body: JSON.stringify(body) });
const put    = (endpoint, body)  => request(endpoint, { method: 'PUT',  body: JSON.stringify(body) });
const patch  = (endpoint, body)  => request(endpoint, { method: 'PATCH', body: JSON.stringify(body) });
const del    = (endpoint)        => request(endpoint, { method: 'DELETE' });

// For file uploads (e.g. patient photos, documents)
const upload = (endpoint, formData) =>
  request(endpoint, { method: 'POST', body: formData });

// ── Resource APIs ──────────────────────────────────────────────
// Each key maps to a Django REST endpoint defined in core/urls.py.
// All routes are prefixed with /api/ via the Vite proxy + Django urls.py.

const api = {
  // ── Auth (JWT) ──
  auth: {
    login:          (credentials) => post('/login/', credentials),
    logout:         ()            => post('/logout/'),
    refreshToken:   ()            => post('/token/refresh/', { refresh: getRefreshToken() }),
    changePassword: (data)        => post('/change-password/', data),
    me:             ()            => get('/my-profile/'),
    updateProfile:  (data)        => patch('/my-profile/update/', data),
  },

  // ── Token management (exposed for components) ──
  tokens: {
    get:    getAccessToken,
    set:    setTokens,
    clear:  clearTokens,
  },

  // ── Patients ──
  patients: {
    list:     ()           => get('/patients/'),
    get:      (id)         => get(`/patients/${id}/`),
    create:   (data)       => post('/patients/create/', data),
    update:   (id, data)   => patch(`/patients/${id}/update/`, data),
    delete:   (id)         => del(`/patients/${id}/delete/`),
    search:   (query)      => get(`/patients/search/?q=${encodeURIComponent(query)}`),
    filter:   (params)     => get(`/patients/filter/?${new URLSearchParams(params)}`),
  },

  // ── Doctors ──
  doctors: {
    list:         ()           => get('/doctors/'),
    listPublic:   ()           => get('/doctors/public/'),
    get:          (id)         => get(`/doctors/${id}/`),
    create:       (data)       => post('/doctors/create/', data),
    update:       (id, data)   => patch(`/doctors/${id}/update/`, data),
    delete:       (id)         => del(`/doctors/${id}/delete/`),
    availability: (id)         => get(`/doctors/${id}/availability/`),
    slots:        (id)         => get(`/doctors/${id}/slots/`),
  },

  // ── Appointments ──
  appointments: {
    list:         ()           => get('/appointments/'),
    get:          (id)         => get(`/appointments/${id}/`),
    create:       (data)       => post('/appointments/create/', data),
    update:       (id, data)   => patch(`/appointments/${id}/update/`, data),
    delete:       (id)         => del(`/appointments/${id}/delete/`),
    filter:       (params)     => get(`/appointments/filter/?${new URLSearchParams(params)}`),
    updateStatus: (id, data)   => patch(`/appointments/${id}/status/`, data),
    cancel:       (id)         => post(`/appointments/${id}/cancel/`),
    history:      (patientId)  => get(`/patients/${patientId}/appointments/history/`),
  },

  // ── Services ──
  services: {
    list:       ()           => get('/services/'),
    listPublic: ()           => get('/services/public/'),
    get:        (id)         => get(`/services/${id}/`),
    create:     (data)       => post('/services/create/', data),
    update:     (id, data)   => patch(`/services/${id}/update/`, data),
    delete:     (id)         => del(`/services/${id}/delete/`),
  },

  // ── Announcements ──
  announcements: {
    list:     ()           => get('/announcements/'),
    create:   (data)       => post('/announcements/create/', data),
    update:   (id, data)   => patch(`/announcements/${id}/update/`, data),
    delete:   (id)         => del(`/announcements/${id}/delete/`),
  },

  // ── Schedules ──
  schedules: {
    list:       ()           => get('/schedules/'),
    get:        (id)         => get(`/schedules/${id}/`),
    create:     (data)       => post('/schedules/create/', data),
    update:     (id, data)   => patch(`/schedules/${id}/update/`, data),
    delete:     (id)         => del(`/schedules/${id}/delete/`),
    mine:       ()           => get('/schedules/my-schedule/'),
  },

  // ── Medical Files ──
  medicalFile: {
    get:      (patientId)       => get(`/patients/${patientId}/medical-file/`),
    update:   (patientId, data) => patch(`/patients/${patientId}/medical-file/update/`, data),
    delete:   (patientId)       => del(`/patients/${patientId}/medical-file/delete/`),
  },

  // ── Documents ──
  documents: {
    list:             (patientId)               => get(`/patients/${patientId}/documents/`),
    get:              (patientId, docId)         => get(`/patients/${patientId}/documents/${docId}/`),
    create:           (patientId, formData)      => upload(`/patients/${patientId}/documents/create/`, formData),
    update:           (patientId, docId, data)   => patch(`/patients/${patientId}/documents/${docId}/update/`, data),
    delete:           (patientId, docId)         => del(`/patients/${patientId}/documents/${docId}/delete/`),
    toggleVisibility: (patientId, docId)         => patch(`/patients/${patientId}/documents/${docId}/toggle-visibility/`),
    guardianList:     (patientId)               => get(`/patients/${patientId}/guardian-documents/`),
  },

  // ── Vaccinations ──
  vaccinations: {
    list:     (patientId)               => get(`/patients/${patientId}/vaccinations/`),
    get:      (patientId, recordId)     => get(`/patients/${patientId}/vaccinations/${recordId}/`),
    create:   (patientId, data)         => post(`/patients/${patientId}/vaccinations/create/`, data),
    update:   (patientId, recordId, data) => patch(`/patients/${patientId}/vaccinations/${recordId}/update/`, data),
    delete:   (patientId, recordId)     => del(`/patients/${patientId}/vaccinations/${recordId}/delete/`),
    upcoming: (patientId)               => get(`/patients/${patientId}/vaccinations/upcoming/`),
  },

  // ── Guardian ──
  guardian: {
    medicalFile: (patientId)  => get(`/patients/${patientId}/guardian-file/`),
    myChildren:  ()           => get('/guardian/my-children/'),
  },

  // ── Admin Dashboard ──
  dashboard: {
    get: () => get('/dashboard/'),
  },
};

export default api;

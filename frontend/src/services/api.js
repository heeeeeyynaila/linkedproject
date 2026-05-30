/**
 * Arcio Clinical Portal — API Service Layer
 * 
 * Centralized API client for communicating with the Django backend.
 * All API calls go through this module so the base URL and auth headers
 * are managed in one place.
 * 
 * Usage:
 *   import api from '@/services/api';
 *   const patients = await api.patients.list();
 */

// ── Configuration ──────────────────────────────────────────────
// In development Vite proxies /api → Django (see vite.config.js).
// In production the React build is served by Django, so same origin.
const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

// ── Helper: get CSRF token from cookie (Django sets this) ──────
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return '';
}

// ── Core fetch wrapper ─────────────────────────────────────────
async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;

  const token = localStorage.getItem('access_token') || localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    'X-CSRFToken': getCookie('csrftoken'),
    ...options.headers,
  };

  if (token && endpoint !== '/login/') {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Remove Content-Type for FormData (browser sets boundary automatically)
  if (options.body instanceof FormData) {
    delete headers['Content-Type'];
  }

  const config = {
    ...options,
    headers,
    credentials: 'same-origin', // send cookies to Django
  };

  const response = await fetch(url, config);

  // Handle 204 No Content
  if (response.status === 204) return null;

  // Parse JSON or throw
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('token');
      localStorage.removeItem('refresh_token');
      const path = window.location.pathname;
      if (path !== '/' && !path.includes('/login')) {
        window.location.href = '/';
      }
    }
    const error = new Error(data?.detail || data?.message || data?.error || `API Error ${response.status}`);
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
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
// Each key maps to a Django REST endpoint. When your Django backend
// is ready, these will work out of the box.

const api = {
  // ── Auth ──
  auth: {
    login:              (credentials) => post('/login/', credentials),
    logout:             ()            => post('/logout/'),
    me:                 ()            => get('/my-profile/'),
    changePassword:     (data)        => put('/change-password/', data),
    updateProfile:      (data)        => put('/my-profile/update/', data),
    uploadDoctorImages: (formData)    => upload('/my-profile/doctor-images/', formData),
  },

  // ── Patients ──
  patients: {
    list:     ()           => get('/patients/'),
    get:      (id)         => get(`/patients/${id}/`),
    create:   (data)       => post('/patients/create/', data),
    update:   (id, data)   => put(`/patients/${id}/update/`, data),
    delete:   (id)         => del(`/patients/${id}/delete/`),
  },

  // ── Doctors ──
  doctors: {
    list:     ()           => get('/doctors/'),
    get:      (id)         => get(`/doctors/${id}/`),
    create:   (data)       => post('/doctors/create/', data),
    update:   (id, data)   => put(`/doctors/${id}/update/`, data),
    delete:   (id)         => del(`/doctors/${id}/delete/`),
  },

  // ── Appointments ──
  appointments: {
    list:         ()           => get('/appointments/'),
    get:          (id)         => get(`/appointments/${id}/`),
    create:       (data)       => post('/appointments/create/', data),
    update:       (id, data)   => put(`/appointments/${id}/update/`, data),
    delete:       (id)         => del(`/appointments/${id}/delete/`),
    updateStatus: (id, status) => patch(`/appointments/${id}/status/`, { appointment_status: status }),
    cancel:       (id)         => patch(`/appointments/${id}/cancel/`),
    history:      (patientId)  => get(`/patients/${patientId}/appointments/history/`),
  },

  // ── Schedules ──
  schedules: {
    list:     ()           => get('/schedules/'),
    mine:     ()           => get('/schedules/my-schedule/'),
    create:   (data)       => post('/schedules/create/', data),
    get:      (id)         => get(`/schedules/${id}/`),
    update:   (id, data)   => put(`/schedules/${id}/update/`, data),
    delete:   (id)         => del(`/schedules/${id}/delete/`),
  },

  // ── Services ──
  services: {
    list:     ()           => get('/services/'),
    get:      (id)         => get(`/services/${id}/`),
    create:   (data)       => post('/services/create/', data),
    update:   (id, data)   => put(`/services/${id}/update/`, data),
    delete:   (id)         => del(`/services/${id}/delete/`),
  },

  // ── Departments ──
  departments: {
    list:     ()           => get('/departments/'),
    get:      (id)         => get(`/departments/${id}/`),
    create:   (data)       => post('/departments/', data),
    update:   (id, data)   => patch(`/departments/${id}/`, data),
    delete:   (id)         => del(`/departments/${id}/`),
  },

  // ── Announcements ──
  announcements: {
    list:     ()           => get('/announcements/'),
    get:      (id)         => get(`/announcements/${id}/`),
    create:   (data)       => post('/announcements/create/', data),
    update:   (id, data)   => put(`/announcements/${id}/update/`, data),
    delete:   (id)         => del(`/announcements/${id}/delete/`),
  },

  // ── Analytics ──
  analytics: {
    dashboard:  ()         => get('/dashboard/'),
    reports:    (params)   => get(`/analytics/reports/?${new URLSearchParams(params)}`),
  },

  // ── Documents / Files ──
  documents: {
    list:     (patientId)  => get(`/patients/${patientId}/documents/`),
    create:   (patientId, data) => post(`/patients/${patientId}/documents/create/`, data),
    delete:   (patientId, docId) => del(`/patients/${patientId}/documents/${docId}/`),
    toggleVisibility: (patientId, docId) => patch(`/patients/${patientId}/documents/${docId}/toggle-visibility/`),
    guardianList: (patientId) => get(`/patients/${patientId}/guardian-documents/`),
    upload:   (formData)   => upload('/documents/upload/', formData),
    download: (id)         => `${BASE_URL}/documents/${id}/download/`,
  },

  // ── Vaccinations ──
  vaccinations: {
    list:     (patientId)  => get(`/patients/${patientId}/vaccinations/`),
    create:   (patientId, data) => post(`/patients/${patientId}/vaccinations/create/`, data),
    upcoming: (patientId)  => get(`/patients/${patientId}/vaccinations/upcoming/`),
    get:      (patientId, recordId) => get(`/patients/${patientId}/vaccinations/${recordId}/`),
    update:   (patientId, recordId, data) => patch(`/patients/${patientId}/vaccinations/${recordId}/update/`, data),
    delete:   (patientId, recordId) => del(`/patients/${patientId}/vaccinations/${recordId}/delete/`),
  },

  // ── Guardian Children ──
  guardian: {
    myChildren:   ()       => get('/guardian/my-children/'),
    guardianFile: (patientId) => get(`/patients/${patientId}/guardian-file/`),
  },

  // ── Medical File ──
  medicalFile: {
    get:      (patientId)  => get(`/patients/${patientId}/medical-file/`),
    update:   (patientId, data) => put(`/patients/${patientId}/medical-file/update/`, data),
    delete:   (patientId)  => del(`/patients/${patientId}/medical-file/delete/`),
  },

  // ── Shift Swaps ──
  shiftSwaps: {
    list:         () => get('/shift-swaps/'),
    create:       (data) => post('/shift-swaps/create/', data),
    updateStatus: (id, status) => patch(`/shift-swaps/${id}/status/`, { status }),
  },

  // ── Notifications ──
  notifications: {
    list:     ()           => get('/notifications/'),
    markRead: (id)         => patch(`/notifications/${id}/`, { is_read: true }),
    markAll:  ()           => post('/notifications/mark-all-read/'),
  },
};

export default api;

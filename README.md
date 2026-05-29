# 🏥 Hospital Portal — Unified Repository

A full-stack hospital management system combining a **React (Vite)** frontend with a **Django REST Framework** backend.

## 📁 Project Structure

```
hospital_portal/
├── frontend/          # React + Vite + TailwindCSS portal
│   ├── src/           # Main app (landing, login, routing)
│   ├── admin/         # Admin dashboard portal
│   ├── doctor/        # Doctor portal
│   ├── patient/       # Patient portal
│   └── vite.config.js # Dev proxy → Django :8000
│
├── backend/           # Django REST API
│   ├── core/          # Main app (models, views, serializers, urls)
│   ├── hospital_project/  # Django settings & root URL config
│   ├── manage.py
│   └── requirements.txt
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18 and **npm**
- **Python** ≥ 3.10 and **pip**

---

### 1. Backend Setup (Django)

```bash
cd backend

# Create and activate a virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Create your .env (already provided for local dev)
# Edit backend/.env if you need PostgreSQL instead of SQLite

# Run migrations
python manage.py migrate

# Create a superuser
python manage.py createsuperuser

# Start the Django dev server
python manage.py runserver
```

The backend API will be available at **http://127.0.0.1:8000/api/**

---

### 2. Frontend Setup (React + Vite)

```bash
cd frontend

# Install dependencies
npm install

# Start the Vite dev server
npm run dev
```

The frontend will be available at **http://localhost:5173**

Vite automatically proxies `/api/*` requests to `http://127.0.0.1:8000`, so both servers work together seamlessly.

---

## 🔗 How They Connect

```
Browser (localhost:5173)
   │
   ├── Static pages → Vite dev server
   │
   └── /api/* requests → Vite proxy → Django (127.0.0.1:8000)
                                          │
                                          ├── JWT Authentication
                                          ├── REST API endpoints
                                          └── PostgreSQL / SQLite DB
```

- **Auth**: JWT Bearer tokens via `djangorestframework-simplejwt`
- **CORS**: Django allows requests from `localhost:5173`
- **Proxy**: Vite forwards `/api` to Django in development

---

## 📝 API Endpoints

| Resource       | Base Path                    |
|----------------|------------------------------|
| Auth           | `/api/login/`, `/api/logout/` |
| JWT Tokens     | `/api/token/`, `/api/token/refresh/` |
| Patients       | `/api/patients/`             |
| Doctors        | `/api/doctors/`              |
| Appointments   | `/api/appointments/`         |
| Services       | `/api/services/`             |
| Schedules      | `/api/schedules/`            |
| Announcements  | `/api/announcements/`        |
| Vaccinations   | `/api/patients/<id>/vaccinations/` |
| Documents      | `/api/patients/<id>/documents/`    |
| Dashboard      | `/api/dashboard/`            |

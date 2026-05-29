import { createBrowserRouter, RouterProvider } from 'react-router';

// Auth & Landing pages
import { Landing, PatientLogin, DoctorLogin, AdminLogin, PublicBooking } from './pages';

// Admin portal
import AdminLayout from '../admin/app/components/Layout';
import { 
  AdminDashboard, AdminDoctors, AdminPatients, AdminAppointments, 
  AdminAnnouncements, AdminSettings, AdminSchedule, AdminServices 
} from '../admin/imports';
import { 
  AddDepartment, AddDoctor, AddAnnouncement, AddService, Analytics as AdminAnalytics 
} from '../admin/app/pages';

// Doctor portal
import DoctorLayout from '../doctor/app/components/Layout';
import { 
  Dashboard as DoctorDashboard, Appointments as DoctorAppointments, 
  Patients as DoctorPatients, 
  Settings as DoctorSettings, Notifications as DoctorNotifications, 
  Schedule as DoctorSchedule, NewAppointment as DoctorNewAppointment, 
  AddPatient as DoctorAddPatient, SwitchShift as DoctorSwitchShift,
  PatientFile as DoctorPatientFile
} from '../doctor/app/pages';

// Patient portal
import PatientLayout from '../patient/app/components/Layout';
import { 
  Dashboard as PatientDashboard, Appointments as PatientAppointments, 
  Profile as PatientProfile, Documents as PatientDocuments, 
  Vaccinations as PatientVaccinations, MedicalFile as PatientMedicalFile, 
  Announcements as PatientAnnouncements, Settings as PatientSettings, 
  BookAppointment as PatientBookAppointment 
} from '../patient/app/pages';

// ── Admin wrapper helpers ──
import { useNavigate } from 'react-router';

const AdminWrapper = ({ Component }) => {
  const navigate = useNavigate();
  const handleNavClick = (e) => {
    const btn = e.target.closest('[data-name*="Button"], [data-name*="Link"]');
    if (!btn) return;
    const text = btn.textContent?.trim().toLowerCase() || '';
    
    if (text.includes('add doctor')) { e.preventDefault(); navigate('/admin/add-doctor'); }
    else if (text.includes('add service')) { e.preventDefault(); navigate('/admin/add-service'); }
    else if (text.includes('add department')) { e.preventDefault(); navigate('/admin/add-department'); }
    else if (text.includes('new announcement')) { e.preventDefault(); navigate('/admin/new-announcement'); }
    else if (text.includes('patient')) { e.preventDefault(); navigate('/admin/patients'); }
    else if (text.includes('doctor')) { e.preventDefault(); navigate('/admin/doctors'); }
    else if (text.includes('schedule')) { e.preventDefault(); navigate('/admin/schedule'); }
    else if (text.includes('appointment')) { e.preventDefault(); navigate('/admin/appointments'); }
    else if (text.includes('setting')) { e.preventDefault(); navigate('/admin/settings'); }
  };

  return (
    <div className="w-full min-h-screen" onClick={handleNavClick}>
      <div className="[&>div]:!pl-0">
        <Component />
      </div>
    </div>
  );
};

const wrap = (Component) => () => <AdminWrapper Component={Component} />;

const wrapPatient = (Component) => () => (
  <div className="w-full min-h-screen bg-[#f1f5f9] overflow-x-hidden">
    <div className="w-full h-full">
      <Component />
    </div>
  </div>
);

const router = createBrowserRouter([
  // ── Landing ──
  { path: '/', Component: Landing },

  // ── Login pages ──
  { path: '/login/patient', Component: PatientLogin },
  { path: '/login/doctor',  Component: DoctorLogin  },
  { path: '/login/admin',   Component: AdminLogin   },
  { path: '/book-appointment', Component: PublicBooking },

  // ── Admin dashboard ──
  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      { index: true,              Component: wrap(AdminDashboard)     },
      { path: 'doctors',          Component: wrap(AdminDoctors)       },
      { path: 'patients',         Component: wrap(AdminPatients)      },
      { path: 'appointments',     Component: wrap(AdminAppointments)  },
      { path: 'schedule',         Component: wrap(AdminSchedule)      },
      { path: 'services',         Component: wrap(AdminServices)      },
      { path: 'announcements',    Component: wrap(AdminAnnouncements) },
      { path: 'analytics',        Component: wrap(AdminAnalytics)     },
      { path: 'settings',         Component: wrap(AdminSettings)      },
      { path: 'add-department',   Component: AddDepartment            },
      { path: 'add-doctor',       Component: AddDoctor                },
      { path: 'add-service',      Component: AddService               },
      { path: 'new-announcement', Component: AddAnnouncement          },
    ],
  },

  // ── Doctor dashboard ──
  {
    path: '/doctor',
    Component: DoctorLayout,
    children: [
      { index: true,              Component: DoctorDashboard       },
      { path: 'appointments',     Component: DoctorAppointments    },
      { path: 'patients',         Component: DoctorPatients        },
      { path: 'settings',         Component: DoctorSettings        },
      { path: 'notifications',    Component: DoctorNotifications   },
      { path: 'schedule',         Component: DoctorSchedule        },
      { path: 'new-appointment',  Component: DoctorNewAppointment  },
      { path: 'patients/new',     Component: DoctorAddPatient      },
      { path: 'patients/file',    Component: DoctorPatientFile     },
      { path: 'switch-shift',     Component: DoctorSwitchShift     },
    ],
  },

  // ── Patient dashboard ──
  {
    path: '/patient',
    Component: PatientLayout,
    children: [
      { index: true,              Component: wrapPatient(PatientDashboard)      },
      { path: 'appointments',     Component: wrapPatient(PatientAppointments)   },
      { path: 'profile',          Component: wrapPatient(PatientProfile)        },
      { path: 'documents',        Component: wrapPatient(PatientDocuments)      },
      { path: 'vaccinations',     Component: wrapPatient(PatientVaccinations)   },
      { path: 'medical-file',     Component: wrapPatient(PatientMedicalFile)    },
      { path: 'announcements',    Component: wrapPatient(PatientAnnouncements)  },
      { path: 'settings',         Component: wrapPatient(PatientSettings)       },
      { path: 'book-appointment', Component: wrapPatient(PatientBookAppointment) },
    ],
  },

  // ── Global Error / 404 Page ──
  {
    path: '*',
    Component: () => (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#006591]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0ea5e9]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        
        <div className="relative z-10 bg-white/70 backdrop-blur-xl border border-[#e2e8f0] rounded-3xl p-16 max-w-lg shadow-xl">
          <div className="text-[#0ea5e9] font-black text-9xl mb-4 tracking-tighter drop-shadow-md">404</div>
          <h1 className="text-3xl font-bold text-[#0f172a] mb-4">Page Not Found</h1>
          <p className="text-[#64748b] mb-8 text-lg">We couldn't find the page you were looking for. It might have been moved or doesn't exist.</p>
          <a href="/" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl font-bold hover:shadow-lg transition-all">
            Return to Dashboard
          </a>
        </div>
      </div>
    ),
  },
]);

import { ToastProvider, useToast } from './components/Toast';
import { useEffect } from 'react';

function GlobalClickInterceptor({ children }) {
  const { showToast } = useToast();

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('button, [data-name*="Button"]');
      if (!target) return;

      const text = target.textContent?.trim().toLowerCase() || '';

      // Skip buttons inside forms, links, or with custom handlers
      if (
        target.closest('form') || 
        target.closest('a') || 
        target.tagName.toLowerCase() === 'a' ||
        target.getAttribute('type') === 'submit'
      ) {
        return;
      }

      // ONLY show toasts for confirmation / save / submit type actions
      if (text.includes('save') || text.includes('update') || text.includes('apply') || text.includes('submit')) {
        showToast('Changes saved successfully.', 'success');
      } else if (text.includes('confirm')) {
        showToast('Confirmed successfully!', 'success');
      } else if (text.includes('delete') || text.includes('remove')) {
        showToast('Item removed successfully.', 'success');
      } else if (text.includes('cancel')) {
        showToast('Action cancelled.', 'info');
      }
      // No generic catch-all — other buttons do nothing extra
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [showToast]);

  return <>{children}</>;
}

export default function App() {
  return (
    <ToastProvider>
      <GlobalClickInterceptor>
        <RouterProvider router={router} />
      </GlobalClickInterceptor>
    </ToastProvider>
  );
}

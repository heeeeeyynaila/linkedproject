import { useNavigate } from 'react-router';
import MyAppointments from '../../../patient/imports/MyAppointments/MyAppointments';

export default function Appointments() {
  const navigate = useNavigate();

  const handleNavClick = (e) => {
    const link = e.target.closest('[data-name*="Link"], [data-name*="Button"]');
    if (!link) return;
    const text = link.textContent?.trim().toLowerCase();
    if (text?.includes('dashboard'))       { e.preventDefault(); navigate('/doctor'); }
    else if (text?.includes('book')) { e.preventDefault(); navigate('/doctor/new-appointment'); }
    else if (text?.includes('patient'))    { e.preventDefault(); navigate('/doctor/patients'); }
    else if (text?.includes('schedule'))   { e.preventDefault(); navigate('/doctor/schedule'); }
    else if (text?.includes('setting'))    { e.preventDefault(); navigate('/doctor/settings'); }
  };

  return <div className="w-full min-h-screen" onClick={handleNavClick}><MyAppointments /></div>;
}

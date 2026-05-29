import { useNavigate } from 'react-router';
import MyProfile from '../../imports/MyProfile/MyProfile';

export default function Profile() {
  const navigate = useNavigate();
  const handleNavClick = (e) => {
    const link = e.target.closest('[data-name*="Link"], [data-name*="Button"]');
    if (!link) return;
    const text = link.textContent?.trim().toLowerCase();
    if (text?.includes('dashboard'))       { e.preventDefault(); navigate('/patient'); }
    else if (text?.includes('appointment')){ e.preventDefault(); navigate('/patient/appointments'); }
    else if (text?.includes('document'))   { e.preventDefault(); navigate('/patient/documents'); }
    else if (text?.includes('vaccination')){ e.preventDefault(); navigate('/patient/vaccinations'); }
    else if (text?.includes('medical file')){ e.preventDefault(); navigate('/patient/medical-file'); }
    else if (text?.includes('announcement')){ e.preventDefault(); navigate('/patient/announcements'); }
    else if (text?.includes('setting'))    { e.preventDefault(); navigate('/patient/settings'); }
  };
  return <div className="w-full min-h-screen" onClick={handleNavClick}><MyProfile /></div>;
}

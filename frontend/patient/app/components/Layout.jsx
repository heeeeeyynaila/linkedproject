import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Menu, ChevronLeft } from 'lucide-react';
import ScrollToTop from '../../../src/components/ScrollToTop';
import api from '@/services/api';

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await api.auth.me();
        localStorage.setItem('user_fullname', data.full_name);
        localStorage.setItem('user_email', data.email);
        localStorage.setItem('user_phone', data.phone || '');
        localStorage.setItem('user_address', data.address || '');
        localStorage.setItem('user_role', data.role);
      } catch (err) {
        console.error('Failed to load profile in patient layout:', err);
      }
    }
    loadProfile();
  }, []);

  const handleGlobalNavClick = (e) => {
    // Intercept clicks on links or buttons in Figma imports
    const target = e.target.closest('[data-name*="Link"], [data-name*="Button"], p');
    if (!target) return;
    
    const text = target.textContent?.trim().toLowerCase();
    
    // Pages
    if (text === 'dashboard') { e.preventDefault(); navigate('/patient'); }
    else if (text === 'my profile') { e.preventDefault(); navigate('/patient/profile'); }
    else if (text === 'documents') { e.preventDefault(); navigate('/patient/documents'); }
    else if (text === 'vaccinations') { e.preventDefault(); navigate('/patient/vaccinations'); }
    else if (text === 'medical file') { e.preventDefault(); navigate('/patient/medical-file'); }
    else if (text === 'announcements') { e.preventDefault(); navigate('/patient/announcements'); }
    else if (text === 'settings') { e.preventDefault(); navigate('/patient/settings'); }
    
    // Actions
    else if (text === 'book new appointment' || text === 'new appointment') { 
      e.preventDefault(); 
      navigate('/patient/book-appointment'); 
    }
    else if (text === 'view all records' || text === 'view summary') {
      e.preventDefault();
      navigate('/patient/medical-file');
    }
    else if (text === 'export pdf') {
      e.preventDefault();
      window.print();
    }
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      <div className={`fixed inset-y-0 left-0 z-50 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
        <Sidebar collapsed={collapsed} />
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-10 size-6 bg-white border border-[#e2e8f0] rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all z-50 text-[#64748b] hover:text-[#006591]"
        >
          {collapsed ? <Menu className="size-3.5" /> : <ChevronLeft className="size-3.5" />}
        </button>
      </div>
      
      <div className={`flex-1 flex flex-col transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-64'}`}>
        <ScrollToTop />
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-[#f8fafc]" onClick={handleGlobalNavClick}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

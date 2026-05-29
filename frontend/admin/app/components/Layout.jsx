import { useState } from 'react';
import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';
import { Menu, ChevronLeft } from 'lucide-react';
import ScrollToTop from '../../../src/components/ScrollToTop';

import { AdminHeader } from './AdminHeader';

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="bg-[#f1f5f9] min-h-screen w-full flex">
      <div className={`fixed inset-y-0 left-0 z-50 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
        <Sidebar collapsed={collapsed} />
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-10 size-6 bg-white border border-[#e2e8f0] rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all z-50 text-[#64748b] hover:text-[#006591]"
        >
          {collapsed ? <Menu className="size-3.5" /> : <ChevronLeft className="size-3.5" />}
        </button>
      </div>
      <div className={`flex-1 flex flex-col transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-64'} min-h-screen`}>
        <ScrollToTop />
        <AdminHeader />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

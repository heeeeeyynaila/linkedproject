import { Outlet, Link, useLocation, useNavigate } from 'react-router';
import {
  LayoutDashboard, Building2, UserCog, Calendar, Users, BarChart3, Settings, Bell, Search, Menu, ChevronLeft,
  CheckCircle, AlertCircle, Clock, UserPlus, Home,
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import ScrollToTop from '../../../src/components/ScrollToTop';
import { ArcioLogo } from '../../../src/components/ArcioLogo';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const notifRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
    { title: 'New Appointment Scheduled', time: '5m ago', icon: Calendar, color: 'text-[#0ea5e9] bg-[#e0f2fe]' },
    { title: 'New Patient Registration', time: '15m ago', icon: UserPlus, color: 'text-[#10b981] bg-[#ecfdf5]' },
    { title: 'System Alert: High Volume', time: '1h ago', icon: AlertCircle, color: 'text-[#f59e0b] bg-[#fef3c7]' },
    { title: 'Lab Results Ready', time: '2h ago', icon: CheckCircle, color: 'text-[#059669] bg-[#ecfdf5]' },
    { title: 'Appointment Reminder', time: '3h ago', icon: Clock, color: 'text-[#8b5cf6] bg-[#ede9fe]' },
  ];

  const navigation = [
    { name: 'Dashboard',     path: '/doctor',               icon: LayoutDashboard },
    { name: 'Appointments',  path: '/doctor/appointments',  icon: Calendar        },
    { name: 'Patients',      path: '/doctor/patients',      icon: Users           },
    { name: 'Schedule',      path: '/doctor/schedule',      icon: Building2       },
    { name: 'Settings',      path: '/doctor/settings',      icon: Settings        },
  ];

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
        <aside className="h-full bg-white border-r border-[#e2e8f0] flex flex-col">
          {/* Logo */}
          <div className="h-20 flex items-center justify-center px-4 border-b border-[#e2e8f0]">
            <ArcioLogo size={collapsed ? 'sm' : 'md'} subtitle="Doctor Portal" collapsed={collapsed} />
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6 overflow-y-auto">
            <ul className="space-y-1 px-3">
              {navigation.map((item) => {
                const isActive = location.pathname === item.path ||
                  (item.path !== '/doctor' && location.pathname.startsWith(item.path));
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white shadow-lg'
                          : 'text-[#64748b] hover:bg-[#f1f5f9]'
                      }`}
                    >
                      <item.icon className="size-5 shrink-0" />
                      {!collapsed && <span className="font-semibold text-sm">{item.name}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="p-4 border-t border-[#e2e8f0]">
            <div className="flex flex-col gap-3">
              <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
                <div className="size-9 rounded-full bg-gradient-to-br from-[#006591] to-[#0ea5e9] border-2 border-[#e0f2fe] flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-xs">DA</span>
                </div>
                {!collapsed && (
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold text-[#171c1f] truncate">Dr. Arcio</div>
                    <div className="text-[10px] text-[#64748b] truncate">Senior Doctor</div>
                  </div>
                )}
              </div>
              <Link
                to="/"
                className={`flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all text-[#dc2626] bg-[#fee2e2] hover:bg-[#fecaca] ${collapsed ? 'justify-center' : ''}`}
              >
                <Home className="size-5 shrink-0" />
                {!collapsed && <span className="text-sm font-bold">Back to Home</span>}
              </Link>
            </div>
          </div>
        </aside>

        {/* Toggle button - matches patient/admin style */}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-10 size-6 bg-white border border-[#e2e8f0] rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all z-50 text-[#64748b] hover:text-[#006591]"
        >
          {collapsed ? <Menu className="size-3.5" /> : <ChevronLeft className="size-3.5" />}
        </button>
      </div>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-64'}`}>
        {/* Header */}
        <header className="h-20 bg-white/70 backdrop-blur-xl border-b border-[#e2e8f0] flex items-center justify-between px-8 shadow-sm sticky top-0 z-40">
          <div className="flex-1 max-w-2xl">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#94a3b8] group-focus-within:text-[#0ea5e9] transition-colors" />
              <input
                type="text"
                placeholder="Search patient data, reports..."
                className="w-full bg-[rgba(226,232,240,0.5)] rounded-xl pl-12 pr-4 py-3 text-sm text-[#171c1f] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/doctor/settings')}
              className="p-2.5 rounded-xl transition-all hover:bg-[#f1f5f9] text-[#64748b]"
              title="Settings"
            >
              <Settings className="size-5" />
            </button>
            {/* Notification Bell with Dropdown */}
            <div className="relative" ref={notifRef}>
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className={`p-2.5 rounded-xl transition-all relative ${showNotifications ? 'bg-[#0ea5e9]/10 text-[#0ea5e9]' : 'hover:bg-[#f1f5f9] text-[#64748b]'}`}
              >
                <Bell className="size-5" />
                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full ring-2 ring-white" />
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-[#e2e8f0] py-4 z-50 animate-slide-up">
                  <div className="px-5 pb-3 border-b border-[#f1f5f9] flex items-center justify-between">
                    <h3 className="font-bold text-[#0f172a]">Notifications</h3>
                    <span className="text-[10px] font-bold text-[#0ea5e9] uppercase tracking-wider bg-[#0ea5e9]/10 px-2 py-0.5 rounded-full">5 New</span>
                  </div>
                  <div className="max-h-[400px] overflow-y-auto">
                    {notifications.map((n, i) => (
                      <div key={i} className="px-5 py-4 hover:bg-[#f8fafc] cursor-pointer transition-colors border-b last:border-0 border-[#f1f5f9] group">
                        <div className="flex items-start gap-4">
                          <div className={`p-2 rounded-xl ${n.color}`}>
                            <n.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-[#334155] group-hover:text-[#0ea5e9] transition-colors">{n.title}</p>
                            <p className="text-xs text-[#94a3b8] mt-0.5">{n.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-5 pt-3">
                    <Link to="/doctor/notifications" onClick={() => setShowNotifications(false)} className="block w-full py-2.5 text-sm font-bold text-[#0ea5e9] hover:bg-[#0ea5e9]/5 rounded-xl transition-colors text-center">
                      View All Announcements
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="h-10 w-px bg-[#e2e8f0]" />
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/doctor/settings')}>
              <div className="text-right">
                <div className="font-semibold text-sm text-[#171c1f]">Dr. Arcio</div>
                <div className="font-semibold text-xs text-[#64748b] uppercase">Senior Doctor</div>
              </div>
              <div className="size-10 rounded-full bg-gradient-to-br from-[#006591] to-[#0ea5e9] border-2 border-[#e0f2fe] hover:shadow-md transition-all" />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto overflow-x-hidden">
          <ScrollToTop />
          <Outlet />
        </main>
      </div>
    </div>
  );
}

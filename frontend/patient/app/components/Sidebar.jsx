import { NavLink } from "react-router";
import { LayoutDashboard, Calendar, User, FileText, Syringe, HeartPulse, Bell, Settings, LogOut, Home } from "lucide-react";
import { ArcioLogo } from "../../../src/components/ArcioLogo";

export function Sidebar({ collapsed }) {
  const navItems = [
    { name: "Dashboard", path: "/patient", icon: LayoutDashboard },
    { name: "Appointments", path: "/patient/appointments", icon: Calendar },
    { name: "Medical File", path: "/patient/medical-file", icon: HeartPulse },
    { name: "Documents", path: "/patient/documents", icon: FileText },
    { name: "Vaccinations", path: "/patient/vaccinations", icon: Syringe },
  ];

  const bottomItems = [
    { name: "Settings", path: "/patient/settings", icon: Settings },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'} bg-white border-r border-[#e2e8f0] flex flex-col z-50`}>
      <div className={`p-4 ${collapsed ? 'px-2' : 'p-6'}`}>
        <div className={`mb-8 ${collapsed ? 'flex justify-center' : ''}`}>
          <ArcioLogo size={collapsed ? 'sm' : 'md'} subtitle="Patient Portal" collapsed={collapsed} />
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/patient'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${collapsed ? 'justify-center px-0' : ''} ${
                  isActive
                    ? 'bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white shadow-md'
                    : 'text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a]'
                }`
              }
            >
              <item.icon className="size-5 shrink-0" />
              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-[#e2e8f0]">
        <nav className="flex flex-col gap-2 mb-6">
          {bottomItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${collapsed ? 'justify-center px-0' : ''} ${
                  isActive
                    ? 'bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white shadow-md'
                    : 'text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a]'
                }`
              }
            >
              <item.icon className="size-5 shrink-0" />
              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>
        
        <NavLink
          to="/"
          className={`flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all text-[#dc2626] bg-[#fee2e2] hover:bg-[#fecaca] ${collapsed ? 'justify-center' : ''}`}
        >
          <Home className="size-5 shrink-0" />
          {!collapsed && <span className="text-sm font-bold">Back to Home</span>}
        </NavLink>
      </div>
    </div>
  );
}

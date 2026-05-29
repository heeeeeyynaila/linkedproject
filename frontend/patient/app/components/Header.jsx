import { Search, Bell, User, Settings, Calendar } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router";

export function Header() {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, title: "Annual Flu Vaccination Due", time: "2 hours ago", type: "Health Alert", color: "text-[#006591] bg-[#e0f2fe]" },
    { id: 2, title: "Lab Results: Complete Blood Count", time: "Yesterday", type: "Clinical Update", color: "text-[#059669] bg-[#d1fae5]" },
    { id: 3, title: "New Message from Dr. Richardson", time: "2 days ago", type: "Message", color: "text-[#7c3aed] bg-[#ede9fe]" },
  ];

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-[#e2e8f0] flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#64748b] group-focus-within:text-[#006591] transition-colors" />
          <input 
            type="text" 
            placeholder="Search medical records, appointments, or doctors..." 
            className="w-full pl-12 pr-4 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl outline-none focus:border-[#006591] focus:ring-4 focus:ring-[#006591]/5 transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">

        <button 
          onClick={() => navigate('/patient/appointments')}
          className="p-2.5 hover:bg-[#f8fafc] rounded-xl transition-colors text-[#64748b]"
          title="Calendar"
        >
          <Calendar className="size-6" />
        </button>
        <button 
          onClick={() => navigate('/patient/settings')}
          className="p-2.5 hover:bg-[#f8fafc] rounded-xl transition-colors text-[#64748b]"
          title="Settings"
        >
          <Settings className="size-6" />
        </button>

        <div className="relative" ref={notificationRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={`p-2.5 rounded-xl transition-all relative ${showNotifications ? 'bg-[#0ea5e9]/10 text-[#0ea5e9]' : 'hover:bg-[#f8fafc] text-[#64748b]'}`}
          >
            <Bell className="size-6" />
            <span className="absolute top-2.5 right-2.5 size-2.5 bg-[#dc2626] border-2 border-white rounded-full"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-[#e2e8f0] overflow-hidden animate-in fade-in zoom-in duration-200 z-50">
              <div className="p-4 border-b border-[#e2e8f0] flex items-center justify-between bg-[#f8fafc]">
                <h3 className="font-bold text-[#171c1f]">Notifications</h3>
                <span className="text-xs font-semibold text-[#006591] cursor-pointer hover:underline">Mark all as read</span>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className="p-4 border-b border-[#f1f5f9] last:border-0 hover:bg-[#f8fafc] transition-colors cursor-pointer group">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${n.color}`}>
                        {n.type}
                      </span>
                      <span className="text-[10px] text-[#94a3b8]">{n.time}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#171c1f] group-hover:text-[#006591] transition-colors line-clamp-1">{n.title}</h4>
                  </div>
                ))}
              </div>
              <div className="p-3 bg-[#f8fafc] text-center border-t border-[#e2e8f0]">
                <Link 
                  to="/patient/announcements" 
                  onClick={() => setShowNotifications(false)}
                  className="block w-full py-2 text-sm font-bold text-[#006591] hover:bg-[#006591]/5 rounded-xl transition-colors"
                >
                  View all announcements
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="h-8 w-px bg-[#e2e8f0] mx-2"></div>

        {/* Dependent Switcher */}
        <div className="relative group cursor-pointer mr-2 bg-[#f1f5f9] hover:bg-[#e2e8f0] border border-[#cbd5e1] rounded-full px-4 py-1.5 flex items-center gap-2 transition-colors">
          <div className="size-2 bg-[#0ea5e9] rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-[#0f172a]">Julian Aris</span>
          <svg className="size-4 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-[#e2e8f0] py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <div className="px-4 py-2 text-xs font-bold text-[#64748b] uppercase tracking-wider">Switch Dependent</div>
            <div className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#0ea5e9] bg-[#f0f9ff] font-semibold cursor-pointer">
               <div className="size-6 rounded-full bg-[#0ea5e9] text-white flex items-center justify-center text-xs">JA</div> Julian Aris
            </div>
            <div className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#475569] hover:bg-[#f8fafc] cursor-pointer transition-colors">
               <div className="size-6 rounded-full bg-[#cbd5e1] text-white flex items-center justify-center text-xs">JS</div> John Smith
            </div>
          </div>
        </div>

        {/* Profile Section with dropdown */}
        <div className="relative" ref={profileRef}>
          <div 
            className="flex items-center gap-3 pl-2 cursor-pointer"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <div className="text-right">
              <div className="text-sm font-bold text-[#171c1f]">John Smith</div>
              <div className="text-[11px] font-semibold text-[#64748b]">Patient ID: P-2024-147</div>
            </div>
            <div className="size-10 rounded-full bg-gradient-to-br from-[#006591] to-[#0ea5e9] flex items-center justify-center text-white font-bold border-2 border-white shadow-sm hover:shadow-md transition-all">
              JS
            </div>
          </div>

          {showProfileMenu && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-[#e2e8f0] py-2 z-50">
              <Link 
                to="/patient/profile"
                onClick={() => setShowProfileMenu(false)}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#475569] hover:bg-[#f8fafc] hover:text-[#006591] transition-colors"
              >
                <User className="h-4 w-4" /> My Profile
              </Link>
              <Link 
                to="/patient/settings"
                onClick={() => setShowProfileMenu(false)}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#475569] hover:bg-[#f8fafc] hover:text-[#006591] transition-colors"
              >
                <Settings className="h-4 w-4" /> Settings
              </Link>
              <div className="h-px bg-[#f1f5f9] my-1"></div>
              <Link 
                to="/"
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#ef4444] hover:bg-[#fff1f2] transition-colors"
              >
                Sign Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

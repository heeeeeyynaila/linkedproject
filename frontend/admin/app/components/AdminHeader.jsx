import { Search, Bell, Settings, User, LogOut, FileText, CheckCircle, AlertTriangle } from 'lucide-react';
import { useNavigate, Link } from 'react-router';
import { useState, useRef, useEffect } from 'react';
import api from '@/services/api';

export function AdminHeader() {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [profile, setProfile] = useState(null);
  const notifRef = useRef(null);

  const [swaps, setSwaps] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await api.auth.me();
        setProfile(data);
      } catch (err) {
        console.error('Failed to fetch admin header profile:', err);
      }
    }
    fetchProfile();
  }, []);

  useEffect(() => {
    async function loadSwaps() {
      try {
        const data = await api.shiftSwaps.list();
        setSwaps(data.filter(s => s.status === 'pending'));
      } catch (err) {
        console.error('Failed to load swaps in AdminHeader:', err);
      }
    }
    if (profile?.role === 'admin') {
      loadSwaps();
    }
  }, [profile]);

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
    ...swaps.map(s => ({
      id: `swap-${s.id}`,
      title: `Shift Swap Request`,
      desc: `${s.requester_name} wants to swap shift with ${s.receiver_name.split(' ')[1]} (${s.schedule_details?.day_of_week?.toUpperCase()} shift)`,
      time: 'Pending Admin Approval',
      type: 'warning',
      isSwap: true,
      swapId: s.id,
      icon: <AlertTriangle className="h-4 w-4" />
    })),
    { id: 1, title: 'New Doctor Registered', desc: 'Dr. Sarah Chen registered', time: '5m ago', type: 'success', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 2, title: 'System Backup Complete', desc: 'Secure database backup succeeded', time: '1h ago', type: 'info', icon: <FileText className="h-4 w-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-[#e2e8f0] bg-white/80 px-8 backdrop-blur-md">
      {/* Search Section */}
      <div className="flex flex-1 items-center">
        <div className="relative w-full max-w-md group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-[#94a3b8] group-focus-within:text-[#0ea5e9] transition-colors">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="search"
            className="block w-full rounded-full border-none bg-[#f1f5f9]/50 py-2.5 pl-11 pr-4 text-sm text-[#1e293b] placeholder:text-[#94a3b8] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all outline-none"
            placeholder="Search clinical data, reports, staff..."
          />
        </div>
      </div>
      
      {/* Actions Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden md:flex items-center gap-1">
          <button 
            onClick={() => navigate('/admin/settings')}
            className="p-2.5 text-[#64748b] hover:text-[#0ea5e9] hover:bg-[#f1f5f9] rounded-full transition-all" 
            title="Settings"
          >
            <Settings className="h-5 w-5" />
          </button>
          
          <div className="relative" ref={notifRef}>
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className={`relative p-2.5 rounded-full transition-all ${showNotifications ? 'bg-[#0ea5e9]/10 text-[#0ea5e9]' : 'text-[#64748b] hover:text-[#0ea5e9] hover:bg-[#f1f5f9]'}`} 
              title="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-2.5 right-2.5 flex h-2 w-2 rounded-full bg-[#ef4444] ring-2 ring-white"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-[#e2e8f0] py-4 z-50 animate-slide-up">
                <div className="px-5 pb-3 border-b border-[#f1f5f9] flex items-center justify-between">
                  <h3 className="font-bold text-[#0f172a]">Notifications</h3>
                  <span className="text-[10px] font-bold text-[#0ea5e9] uppercase tracking-wider bg-[#0ea5e9]/10 px-2 py-0.5 rounded-full">{notifications.length} New</span>
                </div>
                <div className="max-h-[300px] overflow-y-auto">
                  {notifications.map((n) => (
                    <div key={n.id} className="px-5 py-4 hover:bg-[#f8fafc] transition-colors border-b last:border-0 border-[#f1f5f9] group">
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-xl shrink-0 ${n.type === 'success' ? 'bg-green-50 text-green-600' : n.type === 'warning' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'}`}>
                          {n.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-[#334155] group-hover:text-[#0ea5e9] transition-colors truncate">{n.title}</p>
                          {n.desc && <p className="text-xs text-[#64748b] mt-0.5 leading-normal">{n.desc}</p>}
                          <p className="text-[10px] text-[#94a3b8] mt-1">{n.time}</p>
                          
                          {n.isSwap && (
                            <div className="flex gap-2 mt-3" onClick={(e) => e.stopPropagation()}>
                              <button 
                                onClick={async () => {
                                  try {
                                    await api.shiftSwaps.updateStatus(n.swapId, 'approved');
                                    setSwaps(prev => prev.filter(s => s.id !== n.swapId));
                                    alert('Shift swap request approved successfully! Schedule roster updated.');
                                  } catch (err) {
                                    console.error(err);
                                    alert('Failed to approve shift swap.');
                                  }
                                }}
                                className="px-3 py-1 bg-[#0ea5e9] hover:bg-[#006591] text-white rounded-lg text-[10px] font-bold shadow transition-all cursor-pointer"
                              >
                                Approve
                              </button>
                              <button 
                                onClick={async () => {
                                  try {
                                    await api.shiftSwaps.updateStatus(n.swapId, 'rejected');
                                    setSwaps(prev => prev.filter(s => s.id !== n.swapId));
                                    alert('Shift swap request rejected.');
                                  } catch (err) {
                                    console.error(err);
                                    alert('Failed to reject shift swap.');
                                  }
                                }}
                                className="px-3 py-1 bg-[#fee2e2] text-[#ef4444] hover:bg-[#fecaca] rounded-lg text-[10px] font-bold transition-colors cursor-pointer"
                              >
                                Reject
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {notifications.length === 0 && (
                    <p className="text-xs text-[#94a3b8] text-center py-6">No active notifications</p>
                  )}
                </div>
                <div className="px-5 pt-3">
                  <Link to="/admin/announcements" onClick={() => setShowNotifications(false)} className="block w-full py-2.5 text-sm font-bold text-[#0ea5e9] hover:bg-[#0ea5e9]/5 rounded-xl transition-colors text-center">
                    View All Announcements
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="h-8 w-px bg-[#e2e8f0] mx-2 hidden sm:block"></div>
        
        {/* User Profile */}
        <div className="flex items-center gap-3 pl-2 cursor-pointer group relative">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-[#0f172a] group-hover:text-[#0ea5e9] transition-colors">{profile?.full_name || 'Dr. Arcio Admin'}</p>
            <p className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider">{profile?.role || 'Clinical Controller'}</p>
          </div>
          
          <div className="relative">
            <div className="h-10 w-10 rounded-full border-2 border-[#e0f2fe] bg-[#f1f5f9] flex items-center justify-center overflow-hidden shadow-sm group-hover:border-[#0ea5e9] transition-all">
              <User className="h-6 w-6 text-[#94a3b8]" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#22c55e]"></div>
          </div>

          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-[#e2e8f0] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 z-50">
            <button 
              onClick={() => navigate('/admin/settings')}
              className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#475569] hover:bg-[#f8fafc] hover:text-[#0ea5e9]"
            >
              <User className="h-4 w-4" /> Profile Settings
            </button>
            <div className="h-px bg-[#f1f5f9] my-1"></div>
            <button 
              onClick={() => navigate('/')}
              className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#ef4444] hover:bg-[#fff1f2]"
            >
              <LogOut className="h-4 w-4" /> Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

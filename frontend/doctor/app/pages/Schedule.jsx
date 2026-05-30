import { Calendar, Clock, ArrowLeft, Sun, Coffee, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import api from '@/services/api';
import { useToast } from '@/components/Toast';

export default function Schedule() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [schedules, setSchedules] = useState([]);
  const [swapRequests, setSwapRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const [schedData, swapData] = await Promise.all([
          api.schedules.mine(),
          api.shiftSwaps.list()
        ]);
        setSchedules(schedData);
        setSwapRequests(swapData);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        showToast('Error loading schedule', 'error');
      }
    }
    loadData();
  }, [showToast]);

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Map database schedules to the 7 days of the week
  const shifts = daysOfWeek.map((day, index) => {
    const matched = schedules.find(s => s.day_of_week.toLowerCase() === day.toLowerCase());
    
    if (matched) {
      const start = matched.start_time.substring(0, 5);
      const end = matched.end_time.substring(0, 5);
      return {
        day,
        date: `Day ${index + 1}`,
        shift: 'Active Duty',
        time: `${start} – ${end}`,
        type: `Max Patients: ${matched.max_appointments}`,
        icon: Sun,
        color: 'bg-amber-100 text-amber-700',
        isOff: false
      };
    } else {
      return {
        day,
        date: `Day ${index + 1}`,
        shift: 'Off',
        time: 'Day Off',
        type: '—',
        icon: Coffee,
        color: 'bg-[#f1f5f9] text-[#94a3b8]',
        isOff: true
      };
    }
  });

  const totalHours = schedules.reduce((total, s) => {
    // simple diff in hours
    const startHour = parseInt(s.start_time.split(':')[0]);
    const endHour = parseInt(s.end_time.split(':')[0]);
    return total + (endHour - startHour);
  }, 0);

  const stats = [
    { label: 'Total Hours', value: `${totalHours}h`, desc: 'Scheduled weekly' },
    { label: 'Active Days', value: schedules.length, desc: 'On duty' },
    { label: 'Off Days', value: 7 - schedules.length, desc: 'Rest period' },
    { label: 'Max Capacity', value: schedules.reduce((sum, s) => sum + s.max_appointments, 0), desc: 'Patients/week' },
  ];



  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center justify-center p-8">
        <Loader2 className="size-12 text-[#0ea5e9] animate-spin mb-4" />
        <p className="text-[#64748b] font-medium">Retrieving active work schedule...</p>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/doctor')} className="p-2 hover:bg-[#f1f5f9] rounded-xl transition-colors"><ArrowLeft className="size-5 text-[#64748b]" /></button>
          <div>
            <h1 className="text-2xl font-extrabold text-[#171c1f] tracking-tight font-[Manrope]">Work Schedule</h1>
            <p className="text-sm text-[#64748b]">Duty roster & shift management</p>
          </div>
        </div>
        <button 
          onClick={() => navigate('/doctor/switch-shift')}
          className="px-5 py-2.5 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-xl transition-all"
        >
          Request Shift Swap
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl border border-[#e2e8f0] p-4 text-center">
            <p className="text-3xl font-extrabold text-[#171c1f]">{s.value}</p>
            <p className="text-xs font-bold uppercase tracking-wider text-[#64748b] mt-1">{s.label}</p>
            <p className="text-[10px] text-[#94a3b8]">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Schedule */}
        <div className="lg:col-span-2 space-y-3">
          {shifts.map((s, i) => (
            <div key={i} className={`bg-white rounded-2xl border border-[#e2e8f0] p-5 flex items-center gap-4 hover:shadow-sm transition-all ${s.isOff ? 'opacity-60' : ''}`}>
              <div className="w-24 text-center shrink-0">
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748b]">{s.day.slice(0, 3)}</p>
                <p className="text-lg font-extrabold text-[#171c1f]">{s.day}</p>
              </div>
              <div className="w-px h-12 bg-[#e2e8f0]" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${s.color}`}>{s.shift}</span>
                  <span className="text-sm font-semibold text-[#171c1f]">{s.type}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#64748b]">
                  <Clock className="size-3" />{s.time}
                </div>
              </div>
              <s.icon className="size-5 text-[#94a3b8] shrink-0" />
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Shift Swap Requests */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5">
            <h3 className="font-bold text-[#171c1f] mb-4">Swap Requests</h3>
            <div className="space-y-3">
              {swapRequests.map((r, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#f8fafc]">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-bold text-[#171c1f]">{r.requester_name} ➔ {r.receiver_name.split(' ')[1]}</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      r.status === 'approved' ? 'bg-emerald-100 text-emerald-700' :
                      r.status === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                    }`}>{r.status.charAt(0).toUpperCase() + r.status.slice(1)}</span>
                  </div>
                  <p className="text-[10px] text-[#64748b]">
                    {r.schedule_details?.day_of_week?.toUpperCase()} • {r.schedule_details?.start_time} - {r.schedule_details?.end_time}
                  </p>
                </div>
              ))}
              {swapRequests.length === 0 && (
                <p className="text-xs text-[#94a3b8] text-center py-4">No swap requests recorded.</p>
              )}
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-gradient-to-br from-[#006591] to-[#0ea5e9] rounded-2xl p-5 text-white shadow-lg">
            <Calendar className="size-6 text-white/60 mb-3" />
            <h3 className="font-bold text-lg mb-1">Clinic Duty Policy</h3>
            <p className="text-xs text-white/80">Schedules are recurring weekly. Swaps must be coordinated with colleagues and approved by ward administration.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

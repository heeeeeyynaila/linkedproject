import { Calendar, Clock, ArrowLeft, ChevronLeft, ChevronRight, Sun, Moon, Coffee } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function Schedule() {
  const navigate = useNavigate();
  const [currentWeek, setCurrentWeek] = useState('May 12 – 18, 2026');

  const shifts = [
    { day: 'Monday', date: 'May 12', shift: 'Morning', time: '07:00 – 15:00', type: 'OPD', icon: Sun, color: 'bg-amber-100 text-amber-700' },
    { day: 'Tuesday', date: 'May 13', shift: 'Morning', time: '07:00 – 15:00', type: 'Ward Round', icon: Sun, color: 'bg-amber-100 text-amber-700' },
    { day: 'Wednesday', date: 'May 14', shift: 'Afternoon', time: '15:00 – 23:00', type: 'Emergency', icon: Coffee, color: 'bg-blue-100 text-blue-700' },
    { day: 'Thursday', date: 'May 15', shift: 'Off', time: 'Day Off', type: '—', icon: Coffee, color: 'bg-[#f1f5f9] text-[#94a3b8]' },
    { day: 'Friday', date: 'May 16', shift: 'Morning', time: '07:00 – 15:00', type: 'OPD + Surgery', icon: Sun, color: 'bg-amber-100 text-amber-700' },
    { day: 'Saturday', date: 'May 17', shift: 'Night', time: '23:00 – 07:00', type: 'On-call', icon: Moon, color: 'bg-indigo-100 text-indigo-700' },
    { day: 'Sunday', date: 'May 18', shift: 'Off', time: 'Day Off', type: '—', icon: Coffee, color: 'bg-[#f1f5f9] text-[#94a3b8]' },
  ];

  const stats = [
    { label: 'Total Hours', value: '40h', desc: 'This week' },
    { label: 'Morning Shifts', value: '3', desc: '07:00 – 15:00' },
    { label: 'Night Shifts', value: '1', desc: '23:00 – 07:00' },
    { label: 'Days Off', value: '2', desc: 'Thu & Sun' },
  ];

  const swapRequests = [
    { from: 'Dr. Amina Khalil', date: 'May 14', shift: 'Afternoon → Morning', status: 'Pending' },
    { from: 'Dr. Youssef Benali', date: 'May 17', shift: 'Night → Off', status: 'Approved' },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/doctor')} className="p-2 hover:bg-[#f1f5f9] rounded-xl transition-colors"><ArrowLeft className="size-5 text-[#64748b]" /></button>
          <div>
            <h1 className="text-2xl font-extrabold text-[#171c1f] tracking-tight">Work Schedule</h1>
            <p className="text-sm text-[#64748b]">Duty roster & shift management</p>
          </div>
        </div>
        <button className="px-5 py-2.5 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl font-semibold text-sm shadow-lg shadow-cyan-500/20">
          Request Shift Swap
        </button>
      </div>

      {/* Week Navigator */}
      <div className="flex items-center justify-center gap-4">
        <button className="p-2 hover:bg-[#f1f5f9] rounded-lg"><ChevronLeft className="size-5 text-[#64748b]" /></button>
        <div className="flex items-center gap-2">
          <Calendar className="size-4 text-[#0ea5e9]" />
          <span className="font-bold text-[#171c1f]">{currentWeek}</span>
        </div>
        <button className="p-2 hover:bg-[#f1f5f9] rounded-lg"><ChevronRight className="size-5 text-[#64748b]" /></button>
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
            <div key={i} className={`bg-white rounded-2xl border border-[#e2e8f0] p-5 flex items-center gap-4 hover:shadow-sm transition-all ${s.shift === 'Off' ? 'opacity-60' : ''}`}>
              <div className="w-20 text-center shrink-0">
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748b]">{s.day.slice(0, 3)}</p>
                <p className="text-2xl font-extrabold text-[#171c1f]">{s.date.split(' ')[1]}</p>
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
                    <p className="text-sm font-semibold text-[#171c1f]">{r.from}</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${r.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{r.status}</span>
                  </div>
                  <p className="text-xs text-[#64748b]">{r.date} • {r.shift}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-gradient-to-br from-[#006591] to-[#0ea5e9] rounded-2xl p-5 text-white">
            <Calendar className="size-6 text-white/60 mb-3" />
            <h3 className="font-bold text-lg mb-1">Next On-Call</h3>
            <p className="text-sm text-white/80">Saturday, May 17</p>
            <p className="text-xs text-white/60 mt-1">23:00 – 07:00 • Night Shift</p>
          </div>
        </div>
      </div>
    </div>
  );
}

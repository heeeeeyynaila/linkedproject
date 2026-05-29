import { Users, Calendar, AlertTriangle, UserPlus, TrendingUp, Clock, ArrowRight, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Patients', value: '120', icon: Users, bg: 'bg-[#e0f2fe]', iconColor: '#0369a1', change: '+8%' },
    { label: 'Scheduled Today', value: '25', icon: Calendar, bg: 'bg-gradient-to-br from-[#006591] to-[#0ea5e9]', iconColor: '#fff', isGradient: true, change: '+3' },
    { label: 'Active Alerts', value: '03', icon: AlertTriangle, bg: 'bg-[#fef3c7]', iconColor: '#d97706', change: '-2' },
    { label: 'New Registrations', value: '15', icon: UserPlus, bg: 'bg-[#e0e7ff]', iconColor: '#4338ca', change: '+5' },
  ];

  const upcomingAppointments = [
    { name: 'Sarah Jenkins', type: 'Post-op Checkup', time: '09:00 AM', status: 'Confirmed', avatar: 'SJ' },
    { name: 'Robert Chen', type: 'Routine Screening', time: '10:30 AM', status: 'Pending', avatar: 'RC' },
    { name: 'Emily Watson', type: 'Lab Review', time: '02:00 PM', status: 'Confirmed', avatar: 'EW' },
    { name: 'Marcus Lee', type: 'Follow-up Visit', time: '03:30 PM', status: 'Pending', avatar: 'ML' },
  ];

  const pendingRegistrations = [
    { name: 'Alice Turner', id: 'P-2024-301', date: 'May 18, 2026', status: 'Review' },
    { name: 'James Park', id: 'P-2024-302', date: 'May 17, 2026', status: 'Incomplete' },
    { name: 'Sofia Martinez', id: 'P-2024-303', date: 'May 17, 2026', status: 'Review' },
  ];

  const consultationData = [
    { day: 'Mon', value: 18 }, { day: 'Tue', value: 24 }, { day: 'Wed', value: 15 },
    { day: 'Thu', value: 28 }, { day: 'Fri', value: 22 }, { day: 'Sat', value: 8 },
  ];
  const maxVal = Math.max(...consultationData.map(d => d.value));

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-[#171c1f] tracking-tight font-[Manrope]">Clinical Sanctuary Overview</h1>
          <p className="text-[#64748b] mt-1">Real-time performance metrics and diagnostic insights.</p>
        </div>
        <button onClick={() => navigate('/doctor/appointments')} className="px-5 py-2.5 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-xl transition-all">
          + New Appointment
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className={`${s.isGradient ? s.bg : 'bg-white/80 backdrop-blur-sm border border-white/40'} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${s.isGradient ? 'text-white/80' : 'text-[#64748b]'}`}>{s.label}</p>
                <p className={`text-4xl font-extrabold font-[Manrope] ${s.isGradient ? 'text-white' : 'text-[#171c1f]'}`}>{s.value}</p>
                <span className={`text-xs font-semibold mt-1 inline-block ${s.change.startsWith('+') ? 'text-emerald-600' : 'text-amber-600'}`}>{s.change} this week</span>
              </div>
              <div className={`size-14 rounded-2xl flex items-center justify-center ${s.isGradient ? 'bg-white/20' : s.bg}`}>
                <s.icon className="size-6" style={{ color: s.iconColor }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts + Appointments Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Consultation Volume Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#e2e8f0] p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="size-9 bg-[#e0f2fe] rounded-lg flex items-center justify-center">
                <BarChart3 className="size-5 text-[#0369a1]" />
              </div>
              <h2 className="text-lg font-bold text-[#171c1f]">Consultation Volume</h2>
            </div>
            <span className="text-xs text-[#64748b] font-semibold uppercase tracking-wider">This Week</span>
          </div>
          <div className="flex items-end gap-4 h-48">
            {consultationData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs font-bold text-[#171c1f]">{d.value}</span>
                <div className="w-full rounded-t-lg bg-gradient-to-t from-[#006591] to-[#0ea5e9] transition-all hover:opacity-80" style={{ height: `${(d.value / maxVal) * 140}px` }} />
                <span className="text-xs font-semibold text-[#64748b]">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-[#171c1f]">Upcoming</h2>
            <button onClick={() => navigate('/doctor/appointments')} className="text-xs font-bold text-[#0ea5e9] hover:underline flex items-center gap-1">
              View All <ArrowRight className="size-3" />
            </button>
          </div>
          <div className="space-y-3">
            {upcomingAppointments.map((apt, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f8fafc] transition-colors cursor-pointer">
                <div className="size-10 rounded-full bg-gradient-to-br from-[#006591] to-[#0ea5e9] flex items-center justify-center text-white text-xs font-bold shrink-0">{apt.avatar}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#171c1f] truncate">{apt.name}</p>
                  <p className="text-xs text-[#64748b]">{apt.type}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs font-bold text-[#171c1f]">{apt.time}</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${apt.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{apt.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pending Registrations */}
      <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#171c1f]">Pending Registrations</h2>
          <button onClick={() => navigate('/doctor/patients')} className="text-xs font-bold text-[#0ea5e9] hover:underline flex items-center gap-1">View All <ArrowRight className="size-3" /></button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#f1f5f9]">
                <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#64748b]">Patient</th>
                <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#64748b]">ID</th>
                <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#64748b]">Submitted</th>
                <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#64748b]">Status</th>
                <th className="text-right py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#64748b]">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingRegistrations.map((r, i) => (
                <tr key={i} className="border-b last:border-0 border-[#f1f5f9] hover:bg-[#f8fafc] transition-colors">
                  <td className="py-3 px-4 font-semibold text-[#171c1f]">{r.name}</td>
                  <td className="py-3 px-4 text-[#64748b]">{r.id}</td>
                  <td className="py-3 px-4 text-[#64748b]">{r.date}</td>
                  <td className="py-3 px-4"><span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${r.status === 'Review' ? 'bg-[#e0f2fe] text-[#0369a1]' : 'bg-amber-100 text-amber-700'}`}>{r.status}</span></td>
                  <td className="py-3 px-4 text-right"><button className="text-xs font-bold text-[#0ea5e9] hover:underline">Review</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

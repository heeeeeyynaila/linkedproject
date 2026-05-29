import { Bell, AlertTriangle, FlaskConical, Monitor, ArrowLeft, Check, X, Filter } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function Notifications() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Patient Alerts', 'Labs', 'System'];

  const notifications = [
    { id: 1, title: 'SpO2 Drop — Leo Harris', desc: 'Room 402 • SpO2 dropped to 89%. Immediate attention required.', time: '2 min ago', type: 'Patient Alerts', priority: 'critical', read: false },
    { id: 2, title: 'Lab Results Ready — Sarah Jenkins', desc: 'Complete Blood Count results available for review.', time: '15 min ago', type: 'Labs', priority: 'normal', read: false },
    { id: 3, title: 'New Patient Registration', desc: 'Alice Turner (P-2024-301) pending intake review.', time: '30 min ago', type: 'System', priority: 'normal', read: false },
    { id: 4, title: 'Heart Rate Elevated — Marcus Lee', desc: 'Room 501 • HR at 104 bpm. Monitor closely.', time: '45 min ago', type: 'Patient Alerts', priority: 'warning', read: true },
    { id: 5, title: 'Imaging Results — Robert Chen', desc: 'CT scan results uploaded. Pulmonary assessment pending.', time: '1 hr ago', type: 'Labs', priority: 'normal', read: true },
    { id: 6, title: 'Shift Change Approved', desc: 'Your swap request for May 20 has been approved.', time: '2 hr ago', type: 'System', priority: 'normal', read: true },
    { id: 7, title: 'Medication Alert — Emily Watson', desc: 'Scheduled medication due in 30 minutes.', time: '3 hr ago', type: 'Patient Alerts', priority: 'warning', read: true },
    { id: 8, title: 'System Maintenance', desc: 'Scheduled downtime tonight 2:00 AM – 4:00 AM.', time: '5 hr ago', type: 'System', priority: 'normal', read: true },
  ];

  const filtered = activeTab === 'All' ? notifications : notifications.filter(n => n.type === activeTab);

  const priorityStyle = (p) => {
    if (p === 'critical') return 'border-l-red-500 bg-red-50/50';
    if (p === 'warning') return 'border-l-amber-500 bg-amber-50/30';
    return 'border-l-transparent';
  };

  const alertSummary = [
    { label: 'Critical', count: notifications.filter(n => n.priority === 'critical').length, color: 'bg-red-500' },
    { label: 'Warnings', count: notifications.filter(n => n.priority === 'warning').length, color: 'bg-amber-500' },
    { label: 'Unread', count: notifications.filter(n => !n.read).length, color: 'bg-[#0ea5e9]' },
    { label: 'Total', count: notifications.length, color: 'bg-[#64748b]' },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/doctor')} className="p-2 hover:bg-[#f1f5f9] rounded-xl transition-colors"><ArrowLeft className="size-5 text-[#64748b]" /></button>
          <div>
            <h1 className="text-2xl font-extrabold text-[#171c1f] tracking-tight">Clinical Notifications</h1>
            <p className="text-sm text-[#64748b]">Priority messaging center</p>
          </div>
        </div>
        <button className="px-4 py-2 text-sm font-semibold text-[#0ea5e9] hover:bg-[#0ea5e9]/5 rounded-xl transition-colors">Mark All as Read</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-3 space-y-4">
          {/* Tabs */}
          <div className="flex gap-1 bg-[#f1f5f9] p-1 rounded-xl w-fit">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tab ? 'bg-white shadow-sm text-[#0369a1]' : 'text-[#64748b]'}`}>
                {tab}
              </button>
            ))}
          </div>

          {/* Notification Items */}
          <div className="space-y-2">
            {filtered.map(n => (
              <div key={n.id} className={`bg-white rounded-xl border border-[#e2e8f0] border-l-4 p-4 hover:shadow-sm transition-all cursor-pointer ${priorityStyle(n.priority)} ${!n.read ? 'ring-1 ring-[#0ea5e9]/10' : ''}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`p-2 rounded-xl shrink-0 ${n.priority === 'critical' ? 'bg-red-100 text-red-600' : n.priority === 'warning' ? 'bg-amber-100 text-amber-600' : n.type === 'Labs' ? 'bg-emerald-100 text-emerald-600' : 'bg-[#e0f2fe] text-[#0369a1]'}`}>
                      {n.type === 'Patient Alerts' ? <AlertTriangle className="size-4" /> : n.type === 'Labs' ? <FlaskConical className="size-4" /> : <Monitor className="size-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className={`text-sm font-bold ${!n.read ? 'text-[#171c1f]' : 'text-[#475569]'}`}>{n.title}</p>
                        {!n.read && <span className="size-2 bg-[#0ea5e9] rounded-full shrink-0" />}
                      </div>
                      <p className="text-xs text-[#64748b] mt-0.5">{n.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] text-[#94a3b8] whitespace-nowrap">{n.time}</span>
                    <button className="p-1.5 hover:bg-[#f1f5f9] rounded-lg"><Check className="size-3.5 text-[#94a3b8]" /></button>
                    <button className="p-1.5 hover:bg-red-50 rounded-lg"><X className="size-3.5 text-[#94a3b8]" /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar: Alert Summary */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5">
            <h3 className="font-bold text-[#171c1f] text-sm mb-4">Alert Summary</h3>
            <div className="space-y-3">
              {alertSummary.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`size-2.5 rounded-full ${item.color}`} />
                    <span className="text-sm text-[#475569]">{item.label}</span>
                  </div>
                  <span className="text-lg font-extrabold text-[#171c1f]">{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#006591] to-[#0ea5e9] rounded-2xl p-5 text-white">
            <Bell className="size-6 text-white/60 mb-3" />
            <h3 className="font-bold text-lg mb-1">Quick Actions</h3>
            <p className="text-sm text-white/70 mb-4">Manage your notification preferences and alert thresholds.</p>
            <button onClick={() => navigate('/doctor/settings')} className="w-full py-2.5 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-bold hover:bg-white/30 transition-colors">
              Notification Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

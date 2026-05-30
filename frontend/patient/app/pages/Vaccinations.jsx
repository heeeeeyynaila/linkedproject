import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Syringe, Calendar, CheckCircle2, AlertTriangle, ArrowLeft, Loader2, Search, Activity, User } from 'lucide-react';
import api from '@/services/api';
import { useToast } from '@/components/Toast';

export default function Vaccinations() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  
  const [vaccinations, setVaccinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const activeChildId = localStorage.getItem('active_child_id');
  const activeChildName = localStorage.getItem('active_child_name') || 'Dependent Child';

  useEffect(() => {
    async function loadVaccinations() {
      if (!activeChildId) {
        setIsLoading(false);
        return;
      }
      try {
        setIsLoading(true);
        const data = await api.vaccinations.list(activeChildId);
        setVaccinations(data || []);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        showToast('Error loading child vaccination passport', 'error');
      }
    }
    loadVaccinations();
  }, [activeChildId, showToast]);

  // Filtering
  const filtered = vaccinations.filter(v => {
    const matchesSearch = v.vaccine_name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || v.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const administeredCount = vaccinations.filter(v => v.status === 'administered').length;
  const scheduledCount = vaccinations.filter(v => v.status === 'scheduled').length;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center justify-center p-8">
        <Loader2 className="size-12 text-[#0ea5e9] animate-spin mb-4" />
        <p className="text-[#64748b] font-medium">Opening Immunization Passport...</p>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10 space-y-8 max-w-5xl mx-auto relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#0ea5e9]/5 rounded-full blur-[100px]" />

      {/* Header */}
      <div className="flex items-center gap-4 relative z-10">
        <button onClick={() => navigate('/patient')} className="p-2 hover:bg-[#f1f5f9] rounded-xl transition-colors">
          <ArrowLeft className="size-5 text-[#64748b]" />
        </button>
        <div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-[#171c1f] tracking-tight font-[Manrope]">
            Immunization Passport
          </h1>
          <p className="text-sm text-[#64748b]">
            Official vaccination timelines and dose tracking records for <span className="font-bold text-[#006591]">{activeChildName}</span>
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
        {[
          { label: 'Administered Doses', value: administeredCount, desc: 'Doses completed successfully', icon: CheckCircle2, bg: 'bg-emerald-50 text-emerald-700' },
          { label: 'Upcoming Boosters', value: scheduledCount, desc: 'Booster doses planned', icon: AlertTriangle, bg: 'bg-amber-50 text-amber-700' },
          { label: 'Roster Total', value: vaccinations.length, desc: 'Total passport listings', icon: Syringe, bg: 'bg-blue-50 text-blue-700' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl border border-[#e2e8f0] p-6 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-3xl font-extrabold text-[#171c1f]">{s.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-[#64748b] mt-1">{s.label}</p>
              <p className="text-[10px] text-[#94a3b8] mt-0.5">{s.desc}</p>
            </div>
            <div className={`size-12 rounded-xl flex items-center justify-center ${s.bg}`}>
              <s.icon className="size-6" />
            </div>
          </div>
        ))}
      </div>

      {/* Search & Tabs */}
      <div className="flex items-center justify-between gap-4 flex-wrap relative z-10">
        <div className="relative flex-1 min-w-[280px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#94a3b8]" />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search vaccines by name..." 
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#e2e8f0] rounded-xl outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/5 transition-all text-sm"
          />
        </div>
        <div className="flex gap-1 bg-[#f1f5f9] p-1 rounded-xl">
          {[
            { id: 'all', label: 'All Listings' },
            { id: 'administered', label: 'Administered' },
            { id: 'scheduled', label: 'Scheduled Boosters' },
          ].map(t => (
            <button 
              key={t.id} 
              onClick={() => setActiveFilter(t.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilter === t.id 
                  ? 'bg-white shadow-sm text-[#0369a1]' 
                  : 'text-[#64748b] hover:text-[#171c1f]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timelines list */}
      <div className="relative z-10">
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#e2e8f0]">
            <Syringe className="size-12 mx-auto mb-3 text-[#94a3b8]" />
            <p className="font-semibold text-[#64748b] text-sm">No vaccination records found.</p>
            <p className="text-xs text-[#94a3b8] mt-1">Official immunization logs are maintained by clinical practitioners.</p>
          </div>
        ) : (
          <div className="relative border-l-2 border-slate-200 ml-6 pl-8 space-y-8 py-2">
            {filtered.map((item, idx) => {
              const isCompleted = item.status === 'administered';
              return (
                <div key={item.id} className="relative group animate-slide-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                  {/* Bullet */}
                  <span className={`absolute -left-[43px] top-1.5 size-7 rounded-full border-4 border-white flex items-center justify-center shadow-sm z-10 transition-transform group-hover:scale-110 ${
                    isCompleted 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-amber-500 text-white'
                  }`}>
                    <Syringe className="size-3" />
                  </span>

                  {/* Card */}
                  <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 hover:shadow-md hover:border-[#0ea5e9]/20 transition-all">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-extrabold text-[#171c1f] text-lg">
                            {item.vaccine_name}
                          </h3>
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                            isCompleted 
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                              : 'bg-amber-50 text-amber-700 border-amber-200'
                          }`}>
                            {isCompleted ? 'Administered' : 'Scheduled Booster'}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-[#64748b] mt-1">
                          Dose/Series Number: <span className="font-bold text-[#0f172a] bg-slate-100 px-1.5 py-0.5 rounded">{item.dose_number || 1}</span>
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-xs text-[#94a3b8] font-bold uppercase tracking-wider">
                          {isCompleted ? 'Completion Date' : 'Target Roster Date'}
                        </p>
                        <p className="text-sm font-extrabold text-[#171c1f] mt-0.5">
                          {isCompleted ? item.date_administered : (item.next_dose_date || 'Scheduled Soon')}
                        </p>
                      </div>
                    </div>

                    {item.notes && (
                      <div className="mt-4 p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs text-[#475569] italic">
                        &ldquo;{item.notes}&rdquo;
                      </div>
                    )}

                    {isCompleted && item.administered_by_name && (
                      <div className="mt-4 pt-4 border-t border-[#f1f5f9] flex items-center justify-between text-xs text-[#64748b]">
                        <span className="flex items-center gap-1">
                          <User className="size-3.5 text-[#0369a1]" /> Logged by: <span className="font-bold text-[#334155]">{item.administered_by_name}</span>
                        </span>
                        {item.next_dose_date && (
                          <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 border border-amber-200 rounded-full flex items-center gap-1 animate-pulse">
                            Next Dose Due: {item.next_dose_date}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

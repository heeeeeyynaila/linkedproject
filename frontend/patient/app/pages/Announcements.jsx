import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Megaphone, Bell, Info, Award, Loader2, ArrowLeft, Calendar, User, Sparkles } from 'lucide-react';
import api from '@/services/api';
import { useToast } from '@/components/Toast';

export default function Announcements() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    async function loadAnnouncements() {
      try {
        setIsLoading(true);
        const data = await api.announcements.list();
        setAnnouncements(data || []);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        showToast('Error loading announcements ledger', 'error');
      }
    }
    loadAnnouncements();
  }, [showToast]);

  const filtered = announcements.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'general') return item.target_audience === 'all';
    if (activeFilter === 'personal') return item.target_audience === 'guardian';
    return true;
  });

  const getTargetLabel = (target) => {
    if (target === 'all') return 'General Clinic Broadcast';
    if (target === 'guardian') return 'Personal Patient Alert';
    return 'Staff Broadcast';
  };

  const getTargetColor = (target) => {
    if (target === 'all') return 'bg-sky-50 text-sky-700 border-sky-200';
    if (target === 'guardian') return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    return 'bg-purple-50 text-purple-700 border-purple-200';
  };

  const getIcon = (target) => {
    if (target === 'guardian') return Bell;
    return Megaphone;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center justify-center p-8">
        <Loader2 className="size-12 text-[#0ea5e9] animate-spin mb-4" />
        <p className="text-[#64748b] font-medium">Opening Broadcast Center...</p>
      </div>
    );
  }

  // Highlight the latest announcement
  const latest = announcements[0];
  const remaining = filtered.filter(item => latest ? item.id !== latest.id : true);

  return (
    <div className="p-6 lg:p-10 space-y-8 max-w-4xl mx-auto relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#0ea5e9]/5 rounded-full blur-[100px]" />

      {/* Header */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/patient')} className="p-2 hover:bg-[#f1f5f9] rounded-xl transition-colors">
            <ArrowLeft className="size-5 text-[#64748b]" />
          </button>
          <div>
            <h1 className="text-2xl lg:text-3xl font-extrabold text-[#171c1f] tracking-tight font-[Manrope]">
              Broadcast Center
            </h1>
            <p className="text-sm text-[#64748b]">
              Latest clinic communications, schedule updates, and health announcements
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-1 bg-[#f1f5f9] p-1 rounded-xl w-fit relative z-10">
        {[
          { id: 'all', label: 'All Broadcasts' },
          { id: 'general', label: 'General Clinic' },
          { id: 'personal', label: 'Patient Alerts' },
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

      {/* Roster & Feed */}
      <div className="space-y-6 relative z-10">
        {/* Latest Announcement Highlight Card */}
        {latest && activeFilter === 'all' && (
          <div className="bg-gradient-to-br from-[#006591] to-[#0ea5e9] rounded-3xl p-8 text-white shadow-xl shadow-cyan-500/10 relative overflow-hidden group">
            <div className="absolute top-[-20%] right-[-20%] w-[30vw] h-[30vw] bg-white/10 rounded-full blur-[50px] pointer-events-none" />
            <div className="absolute bottom-4 right-4 text-white/10 group-hover:scale-110 transition-transform pointer-events-none">
              <Megaphone className="size-48" />
            </div>
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold px-3 py-1 bg-white/20 border border-white/30 rounded-full uppercase tracking-wider flex items-center gap-1.5 animate-pulse">
                  <Sparkles className="size-3" /> Latest Roster Alert
                </span>
                <span className="text-xs text-white/85 flex items-center gap-1 font-bold">
                  <Calendar className="size-3.5" /> Published: {latest.published_at}
                </span>
              </div>
              
              <h2 className="text-xl lg:text-2xl font-extrabold leading-snug font-[Manrope]">
                {latest.content}
              </h2>

              <div className="pt-4 border-t border-white/20 flex items-center gap-2.5 text-xs text-white/90">
                <div className="size-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-white uppercase text-[10px]">
                  AD
                </div>
                <span>Posted by: <span className="font-extrabold text-white">Clinic Administration</span></span>
              </div>
            </div>
          </div>
        )}

        {/* List Feed */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#e2e8f0]">
            <Megaphone className="size-12 mx-auto mb-3 text-[#94a3b8]" />
            <p className="font-semibold text-[#64748b] text-sm">No announcements broadcasted yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {remaining.map((item, idx) => {
              const ItemIcon = getIcon(item.target_audience);
              return (
                <div 
                  key={item.id}
                  className="bg-white rounded-2xl border border-[#e2e8f0] p-6 hover:shadow-md hover:border-[#0ea5e9]/20 transition-all flex items-start gap-4 animate-slide-up"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className={`size-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    item.target_audience === 'guardian' ? 'bg-emerald-50 text-emerald-600' : 'bg-sky-50 text-sky-600'
                  }`}>
                    <ItemIcon className="size-5" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${getTargetColor(item.target_audience)}`}>
                        {getTargetLabel(item.target_audience)}
                      </span>
                      <span className="text-xs text-[#94a3b8] flex items-center gap-1 font-bold">
                        <Calendar className="size-3" /> {item.published_at}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-[#334155] leading-relaxed">
                      {item.content}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs text-[#64748b]">
                      <div className="size-6 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 uppercase text-[9px]">
                        AD
                      </div>
                      <span>Clinic Administration</span>
                    </div>
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

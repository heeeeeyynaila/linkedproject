import { useState } from 'react';
import { Megaphone, ArrowLeft, CheckCircle2, Globe, Users, Lock } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function AddAnnouncement() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => navigate('/admin'), 1500);
    }, 1200);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-[#f1f5f9]">
        <div className="w-full max-w-md bg-white/70 backdrop-blur-2xl rounded-[32px] p-12 border border-white shadow-2xl text-center animate-slide-up">
          <div className="size-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="size-10" />
          </div>
          <h2 className="text-2xl font-bold text-[#0f172a] mb-2">Announcement Published</h2>
          <p className="text-[#64748b]">Redirecting to announcements...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#f1f5f9] relative overflow-hidden">
      <style>{`
        @keyframes blob-move-1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-50px) scale(1.12); } }
        @keyframes blob-move-2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-40px,40px) scale(1.08); } }
        @keyframes form-appear { from { opacity: 0; transform: translateY(40px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .blob-1 { animation: blob-move-1 8s ease-in-out infinite; }
        .blob-2 { animation: blob-move-2 10s ease-in-out infinite; }
        .form-card { animation: form-appear 0.7s cubic-bezier(0.16,1,0.3,1) forwards; }
        .field-animate { opacity: 0; animation: form-appear 0.5s cubic-bezier(0.16,1,0.3,1) forwards; }
      `}</style>
      <div className="blob-1 absolute top-[-5%] left-[20%] size-[35vw] bg-[#0ea5e9]/10 rounded-full blur-[100px]" />
      <div className="blob-2 absolute bottom-[-5%] right-[20%] size-[35vw] bg-[#006591]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[20%] left-[5%] size-[12vw] bg-[#06b6d4]/8 rounded-full blur-[60px] animate-pulse-glow" />

      <div className="form-card w-full max-w-xl bg-white/70 backdrop-blur-2xl rounded-[32px] p-10 border border-white shadow-2xl relative z-10">
        <button 
          onClick={() => navigate('/admin')}
          className="flex items-center gap-2 text-sm font-semibold text-[#64748b] hover:text-[#006591] mb-8 transition-colors group"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" /> Back to Announcements
        </button>

        <div className="field-animate flex items-center gap-4 mb-8" style={{ animationDelay: '0.1s' }}>
          <div className="size-14 bg-gradient-to-br from-[#006591] to-[#0ea5e9] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#006591]/20">
            <Megaphone className="size-7" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0f172a]">New Announcement</h1>
            <p className="text-sm text-[#64748b]">Broadcast a message to users</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="field-animate space-y-2" style={{ animationDelay: '0.15s' }}>
            <label className="text-sm font-bold text-[#1e293b] ml-1">Title</label>
            <input required type="text" placeholder="e.g. Clinic Holiday Hours" className="w-full px-5 py-3.5 bg-white/50 border border-[#e2e8f0] rounded-2xl outline-none focus:ring-4 focus:ring-[#006591]/10 focus:border-[#006591] transition-all text-sm" />
          </div>

          <div className="field-animate space-y-2" style={{ animationDelay: '0.2s' }}>
            <label className="text-sm font-bold text-[#1e293b] ml-1">Message Content</label>
            <textarea rows="5" required placeholder="Write your announcement details here..." className="w-full px-5 py-3.5 bg-white/50 border border-[#e2e8f0] rounded-2xl outline-none focus:ring-4 focus:ring-[#006591]/10 focus:border-[#006591] transition-all text-sm resize-none"></textarea>
          </div>

          <div className="field-animate space-y-2" style={{ animationDelay: '0.25s' }}>
            <label className="text-sm font-bold text-[#1e293b] ml-1">Target Audience</label>
            <div className="grid grid-cols-3 gap-3">
              <button type="button" className="flex flex-col items-center gap-2 p-3 rounded-xl border border-[#006591] bg-[#006591]/5 text-[#006591] hover:bg-[#006591]/10 transition-colors">
                <Globe className="size-5" />
                <span className="text-[10px] font-bold">All</span>
              </button>
              <button type="button" className="flex flex-col items-center gap-2 p-3 rounded-xl border border-[#e2e8f0] hover:border-[#006591] transition-colors text-[#64748b] hover:text-[#006591]">
                <Users className="size-5" />
                <span className="text-[10px] font-bold">Guardians</span>
              </button>
              <button type="button" className="flex flex-col items-center gap-2 p-3 rounded-xl border border-[#e2e8f0] hover:border-[#006591] transition-colors text-[#64748b] hover:text-[#006591]">
                <Lock className="size-5" />
                <span className="text-[10px] font-bold">Doctors</span>
              </button>
            </div>
          </div>

          <div className="field-animate pt-2" style={{ animationDelay: '0.3s' }}>
            <button 
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-2xl font-bold shadow-lg shadow-[#006591]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:translate-y-0"
            >
              {loading ? 'Publishing...' : 'Publish Announcement'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Calendar, ArrowLeft, Check, Sparkles, Clock, User, Stethoscope } from 'lucide-react';

export default function NewAppointment() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => navigate('/doctor'), 1500);
    }, 1500);
  };

  const inputClass = "w-full bg-white/50 border border-white/60 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-[#0ea5e9]/10 focus:border-[#0ea5e9] transition-all text-[#0f172a]";
  const labelClass = "text-sm font-bold text-[#334155] ml-1";

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-6 relative overflow-hidden">
      <style>{`
        @keyframes blob-move-1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-60px) scale(1.15); } }
        @keyframes blob-move-2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-50px,50px) scale(1.1); } }
        @keyframes form-appear { from { opacity: 0; transform: translateY(40px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .blob-1 { animation: blob-move-1 8s ease-in-out infinite; }
        .blob-2 { animation: blob-move-2 10s ease-in-out infinite; }
        .form-card { animation: form-appear 0.7s cubic-bezier(0.16,1,0.3,1) forwards; }
        .field-animate { opacity: 0; animation: form-appear 0.5s cubic-bezier(0.16,1,0.3,1) forwards; }
      `}</style>
      <div className="blob-1 absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#0ea5e9]/10 rounded-full blur-[100px]" />
      <div className="blob-2 absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#006591]/10 rounded-full blur-[100px]" />
      <div className="absolute top-[50%] left-[60%] size-[12vw] bg-[#06b6d4]/8 rounded-full blur-[60px] animate-pulse-glow" />

      <div className="form-card w-full max-w-2xl relative z-10">
        <button 
          onClick={() => navigate('/doctor')}
          className="flex items-center gap-2 text-[#64748b] hover:text-[#006591] transition-colors mb-8 group"
        >
          <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Back to Dashboard</span>
        </button>

        <div className="backdrop-blur-xl bg-white/60 border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[40px] p-12 relative overflow-hidden">
          {success ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-6 animate-slide-up">
              <div className="size-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                <Check className="text-white size-12" />
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#0f172a] mb-2">Appointment Scheduled!</h2>
                <p className="text-[#64748b]">The consultation has been added to the calendar.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="field-animate flex items-center gap-4 mb-10" style={{ animationDelay: '0.1s' }}>
                <div className="size-14 bg-gradient-to-br from-[#006591] to-[#0ea5e9] rounded-2xl flex items-center justify-center shadow-lg shadow-[#006591]/20">
                  <Calendar className="text-white size-7" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-[#0f172a]">New Appointment</h1>
                  <p className="text-[#64748b] flex items-center gap-1">
                    <Sparkles className="size-3.5 text-[#0ea5e9]" />
                    Schedule a clinical consultation
                  </p>
                </div>
              </div>

              {/* Step Indicators */}
              <div className="field-animate flex items-center gap-3 mb-8" style={{ animationDelay: '0.12s' }}>
                {[1, 2].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStep(s)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                      step === s
                        ? 'bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white shadow-lg shadow-[#006591]/20'
                        : step > s
                          ? 'bg-green-100 text-green-700'
                          : 'bg-white/50 text-[#94a3b8] border border-white/60'
                    }`}
                  >
                    {step > s ? <Check className="size-3.5" /> : <span>{s}</span>}
                    <span className="hidden sm:inline">{s === 1 ? 'Patient & Service' : 'Schedule'}</span>
                  </button>
                ))}
              </div>
 
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <>
                    <div className="field-animate grid grid-cols-1 md:grid-cols-2 gap-6" style={{ animationDelay: '0.15s' }}>
                      <div className="space-y-2">
                        <label className={labelClass}>Patient ID</label>
                        <input type="text" placeholder="Enter patient ID (optional)" className={inputClass} />
                      </div>
                    </div>
                    <div className="field-animate grid grid-cols-1 md:grid-cols-2 gap-6" style={{ animationDelay: '0.18s' }}>
                      <div className="space-y-2">
                        <label className={labelClass}>Guest First Name</label>
                        <input type="text" placeholder="Guest first name" className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Guest Last Name</label>
                        <input type="text" placeholder="Guest last name" className={inputClass} />
                      </div>
                    </div>
                    <div className="field-animate grid grid-cols-1 md:grid-cols-2 gap-6" style={{ animationDelay: '0.2s' }}>
                      <div className="space-y-2">
                        <label className={labelClass}>Guest Phone</label>
                        <input type="tel" placeholder="+212 600 000 000" className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Service</label>
                        <select className={inputClass}>
                          <option value="">Select service...</option>
                          <option>Cardiology</option>
                          <option>Pediatrics</option>
                          <option>Neurology</option>
                          <option>General Medicine</option>
                        </select>
                      </div>
                    </div>
                    <div className="field-animate grid grid-cols-1 md:grid-cols-2 gap-6" style={{ animationDelay: '0.25s' }}>
                      <div className="space-y-2">
                        <label className={labelClass}>Doctor</label>
                        <select className={inputClass}>
                          <option value="">Any available</option>
                          <option>Dr. Arcio Rahman</option>
                          <option>Dr. Amina Khalil</option>
                          <option>Dr. Youssef Benali</option>
                        </select>
                      </div>
                    </div>
                    <div className="field-animate pt-2" style={{ animationDelay: '0.3s' }}>
                      <button type="button" onClick={() => setStep(2)}
                        className="w-full bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white font-bold py-5 rounded-2xl shadow-lg shadow-[#006591]/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Continue to Schedule →
                      </button>
                    </div>
                  </>
                )}
 
                {step === 2 && (
                  <>
                    <div className="field-animate grid grid-cols-1 md:grid-cols-2 gap-6" style={{ animationDelay: '0.15s' }}>
                      <div className="space-y-2">
                        <label className={labelClass}>Appointment Date</label>
                        <input required type="date" className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Appointment Time</label>
                        <select required className={inputClass}>
                          <option value="">Select time...</option>
                          <option>09:00</option>
                          <option>09:30</option>
                          <option>10:00</option>
                          <option>10:30</option>
                          <option>11:00</option>
                          <option>11:30</option>
                          <option>14:00</option>
                          <option>14:30</option>
                          <option>15:00</option>
                          <option>15:30</option>
                          <option>16:00</option>
                          <option>16:30</option>
                        </select>
                      </div>
                    </div>
                    <div className="field-animate flex gap-4 pt-4" style={{ animationDelay: '0.25s' }}>
                      <button type="button" onClick={() => setStep(1)}
                        className="flex-1 bg-white/50 border border-white/60 text-[#64748b] font-bold py-5 rounded-2xl hover:bg-white/80 transition-all">
                        ← Back
                      </button>
                      <button type="submit" disabled={loading}
                        className="flex-1 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white font-bold py-5 rounded-2xl shadow-lg shadow-[#006591]/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                        {loading ? 'Scheduling...' : 'Confirm Appointment'}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

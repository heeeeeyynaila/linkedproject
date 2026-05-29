import { useState } from 'react';
import { Activity, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function AddDepartment() {
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
        <div className="w-full max-w-md bg-white/70 backdrop-blur-2xl rounded-[32px] p-12 border border-white shadow-2xl text-center animate-in zoom-in duration-300">
          <div className="size-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="size-10" />
          </div>
          <h2 className="text-2xl font-bold text-[#0f172a] mb-2">Service Created</h2>
          <p className="text-[#64748b]">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#f1f5f9] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] size-[40vw] bg-[#0ea5e9]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-10%] size-[30vw] bg-[#006591]/10 rounded-full blur-[80px]" />

      <div className="w-full max-w-lg bg-white/70 backdrop-blur-2xl rounded-[32px] p-10 border border-white shadow-2xl relative z-10">
        <button 
          onClick={() => navigate('/admin')}
          className="flex items-center gap-2 text-sm font-semibold text-[#64748b] hover:text-[#006591] mb-8 transition-colors"
        >
          <ArrowLeft className="size-4" /> Back to Dashboard
        </button>

        <div className="flex items-center gap-4 mb-8">
          <div className="size-14 bg-gradient-to-br from-[#006591] to-[#0ea5e9] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#006591]/20">
            <Activity className="size-7" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0f172a]">Add New Service</h1>
            <p className="text-sm text-[#64748b]">Register a new clinical service</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#1e293b] ml-1">Service Name</label>
            <input 
              required
              type="text" 
              placeholder="e.g. Cardiology, Pediatrics" 
              className="w-full px-5 py-3.5 bg-white/50 border border-[#e2e8f0] rounded-2xl outline-none focus:ring-4 focus:ring-[#006591]/10 focus:border-[#006591] transition-all text-sm"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-2xl font-bold shadow-lg shadow-[#006591]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:translate-y-0"
          >
            {loading ? 'Creating Service...' : 'Create Service'}
          </button>
        </form>
      </div>
    </div>
  );
}

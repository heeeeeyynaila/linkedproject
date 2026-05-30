import { useState, useEffect } from 'react';
import { UserPlus, ArrowLeft, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router';
import api from '@/services/api';
import { useToast } from '@/components/Toast';

export default function AddDoctor() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [services, setServices] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
    grade: '',
    service: ''
  });

  useEffect(() => {
    async function loadServices() {
      try {
        const data = await api.services.list();
        setServices(data || []);
      } catch (err) {
        console.error(err);
        showToast('Failed to load clinic services', 'error');
      }
    }
    loadServices();
  }, [showToast]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    try {
      if (!formData.service) {
        setErrorMsg('Please select a valid clinic service.');
        setLoading(false);
        return;
      }
      
      const payload = {
        ...formData,
        service: parseInt(formData.service)
      };

      await api.doctors.create(payload);
      
      setLoading(false);
      setSuccess(true);
      showToast('Doctor profile created successfully!', 'success');
      setTimeout(() => navigate('/admin/doctors'), 1500);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setErrorMsg(err?.message || 'Failed to create doctor. Please verify inputs.');
      showToast('Registration failed', 'error');
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-[#f1f5f9]">
        <div className="w-full max-w-md bg-white/70 backdrop-blur-2xl rounded-[32px] p-12 border border-white shadow-2xl text-center animate-slide-up">
          <div className="size-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="size-10" />
          </div>
          <h2 className="text-2xl font-bold text-[#0f172a] mb-2">Doctor Profile Created</h2>
          <p className="text-[#64748b]">Redirecting to database directory...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#f1f5f9] relative overflow-hidden">
      {/* Animated Background */}
      <style>{`
        @keyframes blob-move-1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-60px) scale(1.15); } }
        @keyframes blob-move-2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-50px,50px) scale(1.1); } }
        @keyframes form-appear { from { opacity: 0; transform: translateY(40px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .blob-1 { animation: blob-move-1 8s ease-in-out infinite; }
        .blob-2 { animation: blob-move-2 10s ease-in-out infinite; }
        .form-card { animation: form-appear 0.7s cubic-bezier(0.16,1,0.3,1) forwards; }
        .field-animate { opacity: 0; animation: form-appear 0.5s cubic-bezier(0.16,1,0.3,1) forwards; }
      `}</style>
      <div className="blob-1 absolute top-[-10%] left-[-10%] size-[40vw] bg-[#0ea5e9]/10 rounded-full blur-[100px]" />
      <div className="blob-2 absolute bottom-[-10%] right-[-10%] size-[30vw] bg-[#006591]/10 rounded-full blur-[80px]" />
      <div className="absolute top-[30%] right-[10%] size-[15vw] bg-[#06b6d4]/8 rounded-full blur-[60px] animate-pulse-glow" />

      <div className="form-card w-full max-w-2xl bg-white/70 backdrop-blur-2xl rounded-[32px] p-10 border border-white shadow-2xl relative z-10 animate-fade-in">
        <button 
          onClick={() => navigate('/admin/doctors')}
          className="flex items-center gap-2 text-sm font-semibold text-[#64748b] hover:text-[#006591] mb-8 transition-colors group"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" /> Back to Directory
        </button>

        <div className="field-animate flex items-center gap-4 mb-8" style={{ animationDelay: '0.1s' }}>
          <div className="size-14 bg-gradient-to-br from-[#006591] to-[#0ea5e9] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#006591]/20">
            <UserPlus className="size-7" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0f172a] font-[Manrope]">Register New Doctor</h1>
            <p className="text-sm text-[#64748b]">Create a new clinical practitioner profile</p>
          </div>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 text-red-800 text-sm">
            <AlertCircle className="size-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <strong>Doctor Registration Error:</strong>
              <p className="mt-0.5 text-xs text-red-700">{errorMsg}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-6 gap-y-6">
          <div className="field-animate col-span-2 sm:col-span-1 space-y-2" style={{ animationDelay: '0.15s' }}>
            <label className="text-sm font-bold text-[#1e293b] ml-1">First Name</label>
            <input required name="first_name" value={formData.first_name} onChange={handleChange} type="text" placeholder="e.g. John" className="w-full pl-5 pr-5 py-3.5 bg-white/50 border border-[#e2e8f0] rounded-2xl outline-none focus:ring-4 focus:ring-[#006591]/10 focus:border-[#006591] transition-all text-sm" />
          </div>

          <div className="field-animate col-span-2 sm:col-span-1 space-y-2" style={{ animationDelay: '0.18s' }}>
            <label className="text-sm font-bold text-[#1e293b] ml-1">Last Name</label>
            <input required name="last_name" value={formData.last_name} onChange={handleChange} type="text" placeholder="e.g. Doe" className="w-full pl-5 pr-5 py-3.5 bg-white/50 border border-[#e2e8f0] rounded-2xl outline-none focus:ring-4 focus:ring-[#006591]/10 focus:border-[#006591] transition-all text-sm" />
          </div>

          <div className="field-animate col-span-2 sm:col-span-1 space-y-2" style={{ animationDelay: '0.2s' }}>
            <label className="text-sm font-bold text-[#1e293b] ml-1">Email Address</label>
            <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john.doe@arcio.health" className="w-full pl-5 pr-5 py-3.5 bg-white/50 border border-[#e2e8f0] rounded-2xl outline-none focus:ring-4 focus:ring-[#006591]/10 focus:border-[#006591] transition-all text-sm" />
          </div>

          <div className="field-animate col-span-2 sm:col-span-1 space-y-2" style={{ animationDelay: '0.22s' }}>
            <label className="text-sm font-bold text-[#1e293b] ml-1">Password</label>
            <input required name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Minimum 8 characters" className="w-full pl-5 pr-5 py-3.5 bg-white/50 border border-[#e2e8f0] rounded-2xl outline-none focus:ring-4 focus:ring-[#006591]/10 focus:border-[#006591] transition-all text-sm" />
          </div>

          <div className="field-animate col-span-2 sm:col-span-1 space-y-2" style={{ animationDelay: '0.25s' }}>
            <label className="text-sm font-bold text-[#1e293b] ml-1">Phone</label>
            <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="e.g. 0555123456" className="w-full pl-5 pr-5 py-3.5 bg-white/50 border border-[#e2e8f0] rounded-2xl outline-none focus:ring-4 focus:ring-[#006591]/10 focus:border-[#006591] transition-all text-sm" />
          </div>

          <div className="field-animate col-span-2 sm:col-span-1 space-y-2" style={{ animationDelay: '0.28s' }}>
            <label className="text-sm font-bold text-[#1e293b] ml-1">Grade</label>
            <input required name="grade" value={formData.grade} onChange={handleChange} type="text" placeholder="e.g. Professor, Ward Specialist" className="w-full pl-5 pr-5 py-3.5 bg-white/50 border border-[#e2e8f0] rounded-2xl outline-none focus:ring-4 focus:ring-[#006591]/10 focus:border-[#006591] transition-all text-sm" />
          </div>

          <div className="field-animate col-span-2 space-y-2" style={{ animationDelay: '0.3s' }}>
            <label className="text-sm font-bold text-[#1e293b] ml-1">Assigned Clinic Service</label>
            <select name="service" value={formData.service} onChange={handleChange} className="w-full px-5 py-3.5 bg-white/50 border border-[#e2e8f0] rounded-2xl outline-none focus:ring-4 focus:ring-[#006591]/10 focus:border-[#006591] transition-all text-sm">
              <option value="">Select Service</option>
              {services.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          <div className="field-animate col-span-2 pt-4" style={{ animationDelay: '0.35s' }}>
            <button 
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-2xl font-bold shadow-lg shadow-[#006591]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:translate-y-0"
            >
              {loading ? 'Registering Practitioner...' : 'Register Doctor'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

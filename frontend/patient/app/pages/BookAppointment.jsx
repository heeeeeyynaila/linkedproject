import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useToast } from '../../../src/components/Toast';
import { 
  ArrowLeft, ArrowRight, Check, CheckCircle2, 
  Stethoscope, UserRound, CalendarDays, Clock,
  Heart, Brain, Baby, Eye, Bone, Activity
} from 'lucide-react';

const services = [
  { id: 1, name: 'General Medicine', icon: Activity, desc: 'Routine check-ups and consultations', color: '#0ea5e9' },
  { id: 2, name: 'Cardiology', icon: Heart, desc: 'Heart health and cardiovascular care', color: '#ef4444' },
  { id: 3, name: 'Neurology', icon: Brain, desc: 'Brain and nervous system disorders', color: '#8b5cf6' },
  { id: 4, name: 'Pediatrics', icon: Baby, desc: 'Children healthcare and immunizations', color: '#f59e0b' },
  { id: 5, name: 'Ophthalmology', icon: Eye, desc: 'Eye care and vision correction', color: '#06b6d4' },
  { id: 6, name: 'Orthopedics', icon: Bone, desc: 'Bone, joint, and muscle treatment', color: '#10b981' },
];

const doctors = [
  { id: 1, name: 'Dr. Sarah Jenkins', specialty: 'General Medicine', rating: 4.9, patients: 1200, avatar: 'SJ', available: true },
  { id: 2, name: 'Dr. Michael Chen', specialty: 'General Medicine', rating: 4.8, patients: 980, avatar: 'MC', available: true },
  { id: 3, name: 'Dr. Emily Watson', specialty: 'Cardiology', rating: 4.9, patients: 1450, avatar: 'EW', available: true },
  { id: 4, name: 'Dr. Robert Kim', specialty: 'Neurology', rating: 4.7, patients: 860, avatar: 'RK', available: false },
  { id: 5, name: 'Dr. Lisa Park', specialty: 'Pediatrics', rating: 4.9, patients: 1100, avatar: 'LP', available: true },
  { id: 6, name: 'Dr. James Miller', specialty: 'Orthopedics', rating: 4.8, patients: 920, avatar: 'JM', available: true },
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', 
  '11:00', '11:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30',
];

export default function BookAppointment() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const steps = [
    { num: 1, label: 'Choose Service', icon: Stethoscope },
    { num: 2, label: 'Select Doctor', icon: UserRound },
    { num: 3, label: 'Date & Time', icon: CalendarDays },
  ];

  const canProceed = () => {
    if (step === 1) return selectedService !== null;
    if (step === 2) return selectedDoctor !== null;
    if (step === 3) return selectedDate && selectedTime;
    return false;
  };

  const handleConfirm = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      showToast('Appointment booked successfully!', 'success');
      setTimeout(() => navigate('/patient/appointments'), 2500);
    }, 1500);
  };

  // Generate next 14 days for the date picker
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  });

  const filteredDoctors = selectedService
    ? doctors.filter(d => d.specialty === selectedService.name || selectedService.name === 'General Medicine')
    : doctors;

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl p-12 max-w-md w-full text-center shadow-xl border border-[#e2e8f0] animate-scale-in">
          <div className="size-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="size-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#0f172a] mb-3">Booking Confirmed!</h2>
          <p className="text-[#64748b] mb-2">Your appointment has been scheduled.</p>
          <div className="bg-[#f8fafc] rounded-2xl p-5 my-6 text-left border border-[#e2e8f0]">
            <div className="flex items-center gap-2 mb-3">
              <Stethoscope className="size-4 text-[#0ea5e9]" />
              <span className="text-sm font-bold text-[#0f172a]">{selectedService?.name}</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <UserRound className="size-4 text-[#0ea5e9]" />
              <span className="text-sm font-bold text-[#0f172a]">{selectedDoctor?.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="size-4 text-[#0ea5e9]" />
              <span className="text-sm font-bold text-[#0f172a]">
                {selectedDate && new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}
              </span>
            </div>
          </div>
          <button
            onClick={() => navigate('/patient/appointments')}
            className="w-full py-3.5 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            View My Appointments
          </button>
        </div>
        <style>{`
          @keyframes scaleIn { from { opacity:0; transform: scale(0.9) translateY(20px); } to { opacity:1; transform: scale(1) translateY(0); } }
          .animate-scale-in { animation: scaleIn 0.5s cubic-bezier(0.16,1,0.3,1); }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f5f9] p-6 lg:p-10">
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.4s cubic-bezier(0.16,1,0.3,1); }
        .fade-up-d1 { animation: fadeUp 0.4s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
        .fade-up-d2 { animation: fadeUp 0.4s 0.1s cubic-bezier(0.16,1,0.3,1) both; }
        .fade-up-d3 { animation: fadeUp 0.4s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
      `}</style>

      {/* Header */}
      <div className="flex items-center justify-between mb-8 fade-up">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/patient/appointments')}
            className="size-10 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:text-[#006591] hover:border-[#006591] transition-all"
          >
            <ArrowLeft className="size-5" />
          </button>
          <div>
            <h1 className="text-2xl lg:text-3xl font-extrabold text-[#0f172a] tracking-tight">Book New Appointment</h1>
            <p className="text-[#64748b] text-sm mt-0.5">Follow the steps below to schedule your visit.</p>
          </div>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center gap-2 mb-10 fade-up-d1">
        {steps.map((s, i) => (
          <div key={s.num} className="flex items-center gap-2 flex-1">
            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl flex-1 transition-all ${
              step === s.num
                ? 'bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white shadow-lg shadow-[#006591]/20'
                : step > s.num
                ? 'bg-green-100 text-green-700 border border-green-200'
                : 'bg-white text-[#94a3b8] border border-[#e2e8f0]'
            }`}>
              <div className={`size-8 rounded-lg flex items-center justify-center shrink-0 font-bold text-sm ${
                step > s.num ? 'bg-green-600 text-white' : step === s.num ? 'bg-white/20' : 'bg-[#f1f5f9]'
              }`}>
                {step > s.num ? <Check className="size-4" /> : s.num}
              </div>
              <span className="text-sm font-bold hidden md:block">{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`h-0.5 w-6 lg:w-10 shrink-0 rounded-full transition-colors ${
                step > s.num ? 'bg-green-400' : 'bg-[#e2e8f0]'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="fade-up-d2">
        {/* STEP 1: Choose Service */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-1">What do you need help with?</h2>
            <p className="text-[#64748b] text-sm mb-6">Select a medical service for your appointment.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => setSelectedService(svc)}
                  className={`text-left p-5 rounded-2xl border-2 transition-all hover:shadow-md group ${
                    selectedService?.id === svc.id
                      ? 'border-[#0ea5e9] bg-[#f0f9ff] shadow-md'
                      : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="size-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${svc.color}15` }}
                    >
                      <svc.icon className="size-6" style={{ color: svc.color }} />
                    </div>
                    <div>
                      <p className="font-bold text-[#0f172a] mb-1">{svc.name}</p>
                      <p className="text-xs text-[#64748b]">{svc.desc}</p>
                    </div>
                  </div>
                  {selectedService?.id === svc.id && (
                    <div className="mt-3 flex items-center gap-1 text-[#0ea5e9] text-xs font-bold">
                      <Check className="size-3.5" /> Selected
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Select Doctor */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-1">Choose your specialist</h2>
            <p className="text-[#64748b] text-sm mb-6">Select a doctor for your <span className="font-semibold text-[#0ea5e9]">{selectedService?.name}</span> appointment.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredDoctors.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => doc.available && setSelectedDoctor(doc)}
                  disabled={!doc.available}
                  className={`text-left p-5 rounded-2xl border-2 transition-all group ${
                    !doc.available
                      ? 'border-[#e2e8f0] bg-[#f8fafc] opacity-50 cursor-not-allowed'
                      : selectedDoctor?.id === doc.id
                      ? 'border-[#0ea5e9] bg-[#f0f9ff] shadow-md'
                      : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1] hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="size-14 rounded-full bg-gradient-to-br from-[#006591] to-[#0ea5e9] flex items-center justify-center text-white font-bold text-lg shrink-0 group-hover:scale-105 transition-transform">
                      {doc.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-[#0f172a]">{doc.name}</p>
                        {!doc.available && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600">Unavailable</span>}
                      </div>
                      <p className="text-xs text-[#64748b] mt-0.5">{doc.specialty}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs font-semibold text-amber-600">★ {doc.rating}</span>
                        <span className="text-xs text-[#94a3b8]">{doc.patients} patients</span>
                      </div>
                    </div>
                    {selectedDoctor?.id === doc.id && (
                      <div className="size-8 rounded-full bg-[#0ea5e9] flex items-center justify-center shrink-0">
                        <Check className="size-4 text-white" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Date & Time */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-1">Pick a date and time</h2>
            <p className="text-[#64748b] text-sm mb-6">
              Scheduling with <span className="font-semibold text-[#0ea5e9]">{selectedDoctor?.name}</span> for <span className="font-semibold text-[#0ea5e9]">{selectedService?.name}</span>.
            </p>

            {/* Date Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-[#334155] mb-3 flex items-center gap-2">
                <CalendarDays className="size-4 text-[#0ea5e9]" /> Select Date
              </h3>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {dates.map((d) => {
                  const dateStr = d.toISOString().split('T')[0];
                  const isWeekend = d.getDay() === 0 || d.getDay() === 6;
                  return (
                    <button
                      key={dateStr}
                      onClick={() => !isWeekend && setSelectedDate(dateStr)}
                      disabled={isWeekend}
                      className={`flex flex-col items-center px-4 py-3 rounded-xl border-2 min-w-[72px] shrink-0 transition-all ${
                        isWeekend
                          ? 'border-[#f1f5f9] bg-[#f8fafc] text-[#cbd5e1] cursor-not-allowed'
                          : selectedDate === dateStr
                          ? 'border-[#0ea5e9] bg-[#f0f9ff] shadow-md'
                          : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1]'
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider">{d.toLocaleDateString('en', { weekday: 'short' })}</span>
                      <span className="text-xl font-extrabold mt-0.5">{d.getDate()}</span>
                      <span className="text-[10px] text-[#64748b]">{d.toLocaleDateString('en', { month: 'short' })}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <h3 className="text-sm font-bold text-[#334155] mb-3 flex items-center gap-2">
                <Clock className="size-4 text-[#0ea5e9]" /> Select Time
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-3 px-4 rounded-xl text-sm font-bold border-2 transition-all ${
                      selectedTime === t
                        ? 'border-[#0ea5e9] bg-[#f0f9ff] text-[#006591] shadow-md'
                        : 'border-[#e2e8f0] bg-white text-[#475569] hover:border-[#cbd5e1]'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#e2e8f0] fade-up-d3">
        <button
          onClick={() => step > 1 ? setStep(step - 1) : navigate('/patient/appointments')}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[#64748b] bg-white border border-[#e2e8f0] hover:text-[#0f172a] hover:border-[#cbd5e1] hover:shadow-sm active:scale-[0.97] transition-all"
        >
          <ArrowLeft className="size-4" />
          {step > 1 ? 'Previous Step' : 'Cancel'}
        </button>

        {step < 3 ? (
          <button
            onClick={() => {
              if (!canProceed()) {
                if (step === 1) showToast('Please select a service first', 'error');
                if (step === 2) showToast('Please select a doctor first', 'error');
                return;
              }
              setStep(step + 1);
            }}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#006591] to-[#0ea5e9] shadow-lg shadow-[#006591]/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.97] transition-all ${!canProceed() ? 'opacity-50 hover:scale-100 hover:shadow-lg' : ''}`}
          >
            Next Step
            <ArrowRight className="size-4" />
          </button>
        ) : (
          <button
            onClick={() => {
              if (!canProceed()) {
                if (!selectedDate) showToast('Please select a date first', 'error');
                else if (!selectedTime) showToast('Please select a time first', 'error');
                return;
              }
              if (!isSubmitting) handleConfirm();
            }}
            disabled={isSubmitting}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-green-600 to-emerald-500 shadow-lg shadow-green-500/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.97] transition-all disabled:cursor-not-allowed ${!canProceed() && !isSubmitting ? 'opacity-50 hover:scale-100 hover:shadow-lg' : ''}`}
          >
            {isSubmitting ? (
              <>
                <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Confirming...
              </>
            ) : (
              <>
                <CheckCircle2 className="size-4" />
                Confirm Booking
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

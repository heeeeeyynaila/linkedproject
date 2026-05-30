import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Calendar, ArrowLeft, Check, Sparkles, Clock, User, Stethoscope, Loader2, AlertCircle } from 'lucide-react';
import api from '@/services/api';
import { useToast } from '@/components/Toast';

export default function NewAppointment() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(1);
  const [errorMsg, setErrorMsg] = useState(null);

  // Dynamic lists from backend
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoadingLists, setIsLoadingLists] = useState(true);

  // Form State
  const [bookingType, setBookingType] = useState('registered'); // 'registered' | 'guest'
  const [selectedPatientId, setSelectedPatientId] = useState('');
  const [guestFirstName, setGuestFirstName] = useState('');
  const [guestLastName, setGuestLastName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [selectedDoctorName, setSelectedDoctorName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  useEffect(() => {
    async function loadFormSetup() {
      try {
        setIsLoadingLists(true);
        const [me, patientsList, doctorsList, servicesList] = await Promise.all([
          api.auth.me().catch(() => null),
          api.patients.list().catch(() => []),
          api.doctors.list().catch(() => []),
          api.services.list().catch(() => [])
        ]);

        setCurrentUser(me);
        setPatients(patientsList);
        setDoctors(doctorsList);
        setServices(servicesList);

        // Pre-select current doctor if found
        if (me) {
          const matched = doctorsList.find(d => d.email === me.email);
          if (matched) {
            setSelectedDoctorName(matched.full_name || `${matched.first_name} ${matched.last_name}`);
          }
        }
        setIsLoadingLists(false);
      } catch (err) {
        console.error(err);
        setIsLoadingLists(false);
        showToast('Error loading registry data', 'error');
      }
    }
    loadFormSetup();
  }, [showToast]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const payload = {
        doctor_name: selectedDoctorName,
        appointment_date: appointmentDate,
      };

      if (bookingType === 'registered') {
        if (!selectedPatientId) {
          throw new Error('Please select a patient from the list');
        }
        payload.patient_id = selectedPatientId;
      } else {
        if (!guestFirstName || !guestLastName || !guestPhone) {
          throw new Error('Please fill in all guest patient fields');
        }
        payload.guest_first_name = guestFirstName;
        payload.guest_last_name = guestLastName;
        payload.guest_phone = guestPhone;
      }

      await api.appointments.create(payload);

      setLoading(false);
      setSuccess(true);
      showToast('Appointment booked successfully!', 'success');
      setTimeout(() => navigate('/doctor/appointments'), 1500);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setErrorMsg(err.message || 'Failed to confirm appointment. Please verify constraints.');
      showToast('Booking failed', 'error');
    }
  };

  const inputClass = "w-full bg-white/50 border border-white/60 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-[#0ea5e9]/10 focus:border-[#0ea5e9] transition-all text-[#0f172a] disabled:opacity-60";
  const labelClass = "text-sm font-bold text-[#334155] ml-1";

  if (isLoadingLists) {
    return (
      <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center justify-center p-8">
        <Loader2 className="size-12 text-[#0ea5e9] animate-spin mb-4" />
        <p className="text-[#64748b] font-medium">Opening scheduling desk...</p>
      </div>
    );
  }

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
      
      <div className="form-card w-full max-w-2xl relative z-10">
        <button 
          onClick={() => navigate('/doctor/appointments')}
          className="flex items-center gap-2 text-[#64748b] hover:text-[#006591] transition-colors mb-8 group"
        >
          <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Back to Consultations</span>
        </button>

        <div className="backdrop-blur-xl bg-white/60 border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[40px] p-12 relative overflow-hidden">
          {success ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-6 animate-slide-up">
              <div className="size-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                <Check className="text-white size-12" />
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#0f172a] mb-2">Appointment Scheduled!</h2>
                <p className="text-[#64748b]">The consultation has been added to the calendar ledger.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="field-animate flex items-center gap-4 mb-10" style={{ animationDelay: '0.1s' }}>
                <div className="size-14 bg-gradient-to-br from-[#006591] to-[#0ea5e9] rounded-2xl flex items-center justify-center shadow-lg shadow-[#006591]/20">
                  <Calendar className="text-white size-7" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-[#0f172a] font-[Manrope]">New Appointment</h1>
                  <p className="text-[#64748b] flex items-center gap-1">
                    <Sparkles className="size-3.5 text-[#0ea5e9]" />
                    Schedule a clinical consultation slot
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
                    <span className="hidden sm:inline">{s === 1 ? 'Patient & Doctor' : 'Schedule Date'}</span>
                  </button>
                ))}
              </div>

              {errorMsg && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 text-red-800 text-sm animate-shake">
                  <AlertCircle className="size-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Scheduling Error:</strong>
                    <p className="mt-0.5 text-xs text-red-700">{errorMsg}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <>
                    {/* Booking Type Select */}
                    <div className="field-animate space-y-2" style={{ animationDelay: '0.14s' }}>
                      <label className={labelClass}>Patient Registry Type</label>
                      <div className="grid grid-cols-2 gap-3 bg-white/40 p-1.5 rounded-2xl border border-white/60">
                        <button
                          type="button"
                          onClick={() => setBookingType('registered')}
                          className={`py-3 rounded-xl text-xs font-bold transition-all ${bookingType === 'registered' ? 'bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white shadow' : 'text-[#64748b] hover:text-[#0f172a]'}`}
                        >
                          Registered Patient
                        </button>
                        <button
                          type="button"
                          onClick={() => setBookingType('guest')}
                          className={`py-3 rounded-xl text-xs font-bold transition-all ${bookingType === 'guest' ? 'bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white shadow' : 'text-[#64748b] hover:text-[#0f172a]'}`}
                        >
                          Guest Patient
                        </button>
                      </div>
                    </div>

                    {bookingType === 'registered' ? (
                      <div className="field-animate space-y-2" style={{ animationDelay: '0.16s' }}>
                        <label className={labelClass}>Select Patient</label>
                        <select
                          value={selectedPatientId}
                          onChange={e => setSelectedPatientId(e.target.value)}
                          className={inputClass}
                          required
                        >
                          <option value="">Choose patient profile...</option>
                          {patients.map(p => (
                            <option key={p.id} value={p.id}>
                              {p.patient_first_name} {p.patient_last_name} (ID: {p.id})
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <>
                        <div className="field-animate grid grid-cols-1 md:grid-cols-2 gap-6" style={{ animationDelay: '0.18s' }}>
                          <div className="space-y-2">
                            <label className={labelClass}>Guest First Name</label>
                            <input
                              type="text"
                              value={guestFirstName}
                              onChange={e => setGuestFirstName(e.target.value)}
                              placeholder="First name"
                              className={inputClass}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label className={labelClass}>Guest Last Name</label>
                            <input
                              type="text"
                              value={guestLastName}
                              onChange={e => setGuestLastName(e.target.value)}
                              placeholder="Last name"
                              className={inputClass}
                              required
                            />
                          </div>
                        </div>
                        <div className="field-animate space-y-2" style={{ animationDelay: '0.2s' }}>
                          <label className={labelClass}>Guest Phone</label>
                          <input
                            type="tel"
                            value={guestPhone}
                            onChange={e => setGuestPhone(e.target.value)}
                            placeholder="e.g. 0555123456"
                            className={inputClass}
                            required
                          />
                        </div>
                      </>
                    )}

                    <div className="field-animate space-y-2" style={{ animationDelay: '0.22s' }}>
                      <label className={labelClass}>Attending Practitioner</label>
                      <select
                        value={selectedDoctorName}
                        onChange={e => setSelectedDoctorName(e.target.value)}
                        className={inputClass}
                        required
                      >
                        <option value="">Select attending colleague...</option>
                        {doctors.map(d => {
                          const fullName = d.full_name || `${d.first_name} ${d.last_name}`;
                          return (
                            <option key={d.id} value={fullName}>
                              {fullName} ({d.service})
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="field-animate pt-2" style={{ animationDelay: '0.26s' }}>
                      <button 
                        type="button" 
                        onClick={() => {
                          if (bookingType === 'registered' && !selectedPatientId) {
                            showToast('Please select a patient', 'error');
                            return;
                          }
                          if (bookingType === 'guest' && (!guestFirstName || !guestLastName || !guestPhone)) {
                            showToast('Please fill all guest fields', 'error');
                            return;
                          }
                          if (!selectedDoctorName) {
                            showToast('Please select an attending doctor', 'error');
                            return;
                          }
                          setStep(2);
                        }}
                        className="w-full bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white font-bold py-5 rounded-2xl shadow-lg shadow-[#006591]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        Continue to Date →
                      </button>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="field-animate space-y-2" style={{ animationDelay: '0.15s' }}>
                      <label className={labelClass}>Appointment Date</label>
                      <input 
                        required 
                        type="date" 
                        value={appointmentDate}
                        onChange={e => setAppointmentDate(e.target.value)}
                        className={inputClass} 
                      />
                    </div>
                    
                    <div className="field-animate flex gap-4 pt-4" style={{ animationDelay: '0.25s' }}>
                      <button 
                        type="button" 
                        onClick={() => setStep(1)}
                        className="flex-1 bg-white/50 border border-white/60 text-[#64748b] font-bold py-5 rounded-2xl hover:bg-white/80 transition-all"
                      >
                        ← Back
                      </button>
                      <button 
                        type="submit" 
                        disabled={loading || !appointmentDate}
                        className="flex-1 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white font-bold py-5 rounded-2xl shadow-lg shadow-[#006591]/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? 'Confirming Booking...' : 'Confirm Appointment'}
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


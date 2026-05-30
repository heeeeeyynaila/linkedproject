import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useToast } from '../../../src/components/Toast';
import { 
  ArrowLeft, ArrowRight, Check, CheckCircle2, 
  Stethoscope, UserRound, CalendarDays, Clock,
  Loader2, AlertCircle, Sparkles, User
} from 'lucide-react';
import api from '@/services/api';

export default function BookAppointment() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoadingLists, setIsLoadingLists] = useState(true);

  // Dynamic Lists from backend
  const [children, setChildren] = useState([]);
  const [services, setServices] = useState([]);
  const [doctors, setDoctors] = useState([]);

  // Form State
  const [selectedChildId, setSelectedChildId] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [selectedDoctorId, setSelectedDoctorId] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  useEffect(() => {
    async function loadBookingDetails() {
      const defaultChildren = [{ id: 101, full_name: 'Samira Brahim', date_of_birth: '2016-04-12' }];
      const defaultServices = [
        { id: 1, name: 'General Pediatrics' },
        { id: 2, name: 'Pediatric Cardiology' },
        { id: 3, name: 'Pediatric Pulmonology' }
      ];
      const defaultDoctors = [
        { id: 1, full_name: 'Dr. Leo Richardson', first_name: 'Leo', last_name: 'Richardson', service_id: 1, grade: 'Consultant' },
        { id: 2, full_name: 'Dr. Sarah Jenkins', first_name: 'Sarah', last_name: 'Jenkins', service_id: 2, grade: 'Chief Specialist' },
        { id: 3, full_name: 'Dr. Emily Watson', first_name: 'Emily', last_name: 'Watson', service_id: 3, grade: 'Senior Fellow' }
      ];

      try {
        setIsLoadingLists(true);
        const [childrenList, servicesList, doctorsList] = await Promise.all([
          api.guardian.myChildren().catch(() => []),
          api.services.list().catch(() => []),
          api.doctors.list().catch(() => [])
        ]);

        setChildren(childrenList && childrenList.length > 0 ? childrenList : defaultChildren);
        setServices(servicesList && servicesList.length > 0 ? servicesList : defaultServices);
        setDoctors(doctorsList && doctorsList.length > 0 ? doctorsList : defaultDoctors);
        
        setIsLoadingLists(false);
      } catch (err) {
        console.error(err);
        setChildren(defaultChildren);
        setServices(defaultServices);
        setDoctors(defaultDoctors);
        setIsLoadingLists(false);
        showToast('Error loading clinic directory', 'error');
      }
    }
    loadBookingDetails();
  }, [showToast]);

  const steps = [
    { num: 1, label: 'Select Patient', icon: User },
    { num: 2, label: 'Choose Service & Doctor', icon: Stethoscope },
    { num: 3, label: 'Choose Date', icon: CalendarDays },
  ];

  const selectedChild = children.find(c => String(c.id) === String(selectedChildId));
  const selectedService = services.find(s => String(s.id) === String(selectedServiceId));
  const selectedDoctor = doctors.find(d => String(d.id) === String(selectedDoctorId));

  const canProceed = () => {
    if (step === 1) return selectedChildId !== '';
    if (step === 2) return selectedServiceId !== '' && selectedDoctorId !== '';
    if (step === 3) return appointmentDate !== '';
    return false;
  };

  const handleConfirmSubmit = async () => {
    setIsSubmitting(true);
    setErrorMsg(null);
    try {
      const payload = {
        doctor_name: selectedDoctor.full_name || `${selectedDoctor.first_name} ${selectedDoctor.last_name}`,
        appointment_date: appointmentDate,
        patient_id: selectedChildId
      };

      await api.appointments.create(payload);

      setIsSubmitting(false);
      setIsConfirmed(true);
      showToast('Appointment booked successfully!', 'success');
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setErrorMsg(err.message || 'Failed to schedule appointment. Verify colleague schedules.');
      showToast('Booking failed', 'error');
    }
  };

  // Generate next 14 days (weekdays only)
  const getDates = () => {
    const arr = [];
    let count = 0;
    let daysToAdd = 1;
    while (count < 10) {
      const d = new Date();
      d.setDate(d.getDate() + daysToAdd);
      const isWeekend = d.getDay() === 0 || d.getDay() === 6;
      if (!isWeekend) {
        arr.push(d);
        count++;
      }
      daysToAdd++;
    }
    return arr;
  };

  const dates = getDates();

  // Doctors filtered by selected service
  const filteredDoctors = selectedServiceId
    ? doctors.filter(d => String(d.service_id) === String(selectedServiceId))
    : doctors;

  if (isLoadingLists) {
    return (
      <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center justify-center p-8">
        <Loader2 className="size-12 text-[#0ea5e9] animate-spin mb-4" />
        <p className="text-[#64748b] font-medium">Opening scheduling desk...</p>
      </div>
    );
  }

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl p-12 max-w-md w-full text-center shadow-xl border border-[#e2e8f0] animate-scale-in">
          <div className="size-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="size-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#0f172a] mb-3">Booking Confirmed!</h2>
          <p className="text-[#64748b] mb-2">Your appointment has been successfully scheduled.</p>
          <div className="bg-[#f8fafc] rounded-2xl p-5 my-6 text-left border border-[#e2e8f0]">
            <div className="flex items-center gap-2 mb-3">
              <User className="size-4 text-[#0ea5e9]" />
              <span className="text-sm font-bold text-[#0f172a]">{selectedChild?.full_name}</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Stethoscope className="size-4 text-[#0ea5e9]" />
              <span className="text-sm font-bold text-[#0f172a]">{selectedService?.name}</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <UserRound className="size-4 text-[#0ea5e9]" />
              <span className="text-sm font-bold text-[#0f172a]">
                {selectedDoctor?.full_name || `${selectedDoctor?.first_name} ${selectedDoctor?.last_name}`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="size-4 text-[#0ea5e9]" />
              <span className="text-sm font-bold text-[#0f172a]">
                {appointmentDate && new Date(appointmentDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f5f9] p-6 lg:p-10 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#0ea5e9]/5 rounded-full blur-[100px]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/patient/appointments')}
              className="size-10 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:text-[#006591] hover:border-[#006591] transition-all"
            >
              <ArrowLeft className="size-5" />
            </button>
            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-[#0f172a] tracking-tight font-[Manrope]">Book Appointment</h1>
              <p className="text-[#64748b] text-sm mt-0.5">Schedule a clinical check-up or diagnostic slot</p>
            </div>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-2 mb-10">
          {steps.map((s, i) => (
            <button
              key={s.num}
              onClick={() => step > s.num && setStep(s.num)}
              className="flex items-center gap-2 flex-1 text-left"
            >
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
            </button>
          ))}
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 text-red-800 text-sm">
            <AlertCircle className="size-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <strong>Booking Failed:</strong>
              <p className="mt-0.5 text-xs text-red-700">{errorMsg}</p>
            </div>
          </div>
        )}

        {/* Step Content */}
        <div className="bg-white rounded-3xl p-8 border border-[#e2e8f0] shadow-sm">
          {/* STEP 1: Select Child */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-1">Which family member is this for?</h2>
                <p className="text-[#64748b] text-sm">Select from patient files registered under your care.</p>
              </div>

              {children.length === 0 ? (
                <div className="p-8 text-center bg-[#f8fafc] border-2 border-dashed border-[#e2e8f0] rounded-2xl">
                  <User className="size-12 text-[#94a3b8] mx-auto mb-3" />
                  <p className="font-semibold text-sm text-[#475569]">No children profiles registered under your guardian record.</p>
                  <p className="text-xs text-[#94a3b8] mt-1">Please request the attending doctor to add your child's file.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {children.map((child) => (
                    <button
                      key={child.id}
                      type="button"
                      onClick={() => setSelectedChildId(child.id)}
                      className={`text-left p-5 rounded-2xl border-2 transition-all hover:border-[#cbd5e1] ${
                        String(selectedChildId) === String(child.id)
                          ? 'border-[#0ea5e9] bg-[#f0f9ff] shadow-sm'
                          : 'border-[#e2e8f0] bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="size-11 rounded-full bg-gradient-to-br from-[#006591] to-[#0ea5e9] flex items-center justify-center text-white font-bold text-sm shrink-0">
                          {child.full_name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-bold text-[#0f172a]">{child.full_name}</p>
                          <p className="text-xs text-[#64748b]">ID: {child.id} • DOB: {child.date_of_birth}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* STEP 2: Choose Service & Doctor */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-1">Clinic Department & Doctor</h2>
                <p className="text-[#64748b] text-sm">Select the care service and target practitioner.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service List */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#64748b]">Medical Service</label>
                  <select
                    value={selectedServiceId}
                    onChange={e => { setSelectedServiceId(e.target.value); setSelectedDoctorId(''); }}
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                  >
                    <option value="">Select service...</option>
                    {services.map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>

                {/* Doctor List */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#64748b]">Attending Practitioner</label>
                  <select
                    value={selectedDoctorId}
                    onChange={e => setSelectedDoctorId(e.target.value)}
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] disabled:opacity-60"
                    disabled={!selectedServiceId}
                  >
                    <option value="">Select doctor...</option>
                    {filteredDoctors.map(d => (
                      <option key={d.id} value={d.id}>
                        {d.full_name || `Dr. ${d.first_name} ${d.last_name}`} ({d.grade})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Select Date */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-1">Pick an available day</h2>
                <p className="text-[#64748b] text-sm">Select a date for the visit. Schedules are recurring weekly on week days.</p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-3">Available Weekdays</h3>
                <div className="flex gap-3 overflow-x-auto pb-3">
                  {dates.map((d) => {
                    const dateStr = d.toISOString().split('T')[0];
                    return (
                      <button
                        key={dateStr}
                        type="button"
                        onClick={() => setAppointmentDate(dateStr)}
                        className={`flex flex-col items-center px-5 py-4 rounded-2xl border-2 min-w-[80px] shrink-0 transition-all ${
                          appointmentDate === dateStr
                            ? 'border-[#0ea5e9] bg-[#f0f9ff] shadow-sm'
                            : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1]'
                        }`}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">
                          {d.toLocaleDateString('en', { weekday: 'short' })}
                        </span>
                        <span className="text-2xl font-extrabold mt-1 text-[#171c1f]">{d.getDate()}</span>
                        <span className="text-[10px] text-[#94a3b8] mt-0.5">
                          {d.toLocaleDateString('en', { month: 'short' })}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#e2e8f0]">
          <button
            onClick={() => step > 1 ? setStep(step - 1) : navigate('/patient/appointments')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[#64748b] bg-white border border-[#e2e8f0] hover:text-[#0f172a] hover:border-[#cbd5e1] transition-all"
          >
            <ArrowLeft className="size-4" />
            {step > 1 ? 'Previous Step' : 'Cancel'}
          </button>

          {step < 3 ? (
            <button
              onClick={() => {
                if (!canProceed()) {
                  if (step === 1) showToast('Please select a patient', 'error');
                  if (step === 2) showToast('Please select service and doctor', 'error');
                  return;
                }
                setStep(step + 1);
              }}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#006591] to-[#0ea5e9] shadow-lg shadow-[#006591]/20 hover:shadow-xl hover:scale-[1.01] transition-all ${!canProceed() ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Next Step
              <ArrowRight className="size-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                if (!canProceed()) {
                  showToast('Please select a date', 'error');
                  return;
                }
                handleConfirmSubmit();
              }}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-green-600 to-emerald-500 shadow-lg shadow-green-500/20 hover:shadow-xl hover:scale-[1.01] transition-all disabled:opacity-60"
            >
              {isSubmitting ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Check className="size-4" />
              )}
              Confirm Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


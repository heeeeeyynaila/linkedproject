import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, ArrowRightLeft, CheckCircle2, ChevronRight, AlertCircle, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import api from '@/services/api';
import { useToast } from '@/components/Toast';

export default function SwitchShift() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedShift, setSelectedShift] = useState(null);
  const [targetDoctor, setTargetDoctor] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Dynamic data state
  const [myShifts, setMyShifts] = useState([]);
  const [availableDoctors, setAvailableDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        // Get current user profile
        const me = await api.auth.me();
        
        // Get schedules for current doctor
        const schedules = await api.schedules.mine();
        const formattedShifts = schedules.map(s => ({
          id: s.id,
          date: s.day_of_week.charAt(0).toUpperCase() + s.day_of_week.slice(1),
          time: `${s.start_time.substring(0, 5)} - ${s.end_time.substring(0, 5)}`,
          type: 'Recurring Shift',
          location: 'Main Clinic',
          raw: s
        }));
        setMyShifts(formattedShifts);

        // Get list of all doctors and filter out the current doctor
        const doctors = await api.doctors.list();
        const otherDoctors = doctors.filter(doc => doc.email !== me.email);
        setAvailableDoctors(otherDoctors);
        
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading SwitchShift data:', err);
        setError('Failed to load clinic schedules or doctors. Please try again.');
        setIsLoading(false);
        showToast('Error loading data', 'error');
      }
    }
    loadData();
  }, [showToast]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await api.shiftSwaps.create({
        schedule: selectedShift.id,
        receiver: targetDoctor.id
      });
      
      setIsSubmitting(false);
      setShowSuccess(true);
      showToast('Shift swap requested successfully!', 'success');
      
      setTimeout(() => {
        navigate('/doctor/schedule');
      }, 2500);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      showToast(err.message || 'Failed to submit swap request', 'error');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center justify-center p-8">
        <Loader2 className="size-12 text-[#0ea5e9] animate-spin mb-4" />
        <p className="text-[#64748b] font-medium">Loading clinic schedule and colleagues...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center justify-center p-8 text-center">
        <AlertCircle className="size-16 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-[#0f172a] mb-2">Something went wrong</h2>
        <p className="text-[#64748b] max-w-md mb-6">{error}</p>
        <button 
          onClick={() => navigate('/doctor')}
          className="px-6 py-3 bg-[#0ea5e9] text-white font-bold rounded-xl hover:bg-[#006591] transition-colors"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f5f9] p-8 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#006591]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0ea5e9]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#0f172a] tracking-tight">Switch Shift</h1>
            <p className="text-[#64748b] mt-1">Request a shift cover or swap with a colleague</p>
          </div>
          <button 
            onClick={() => navigate('/doctor/schedule')}
            className="px-4 py-2 bg-white text-[#64748b] hover:text-[#0f172a] rounded-xl font-semibold transition-all border border-[#e2e8f0] shadow-sm hover:shadow-md"
          >
            Back to Schedule
          </button>
        </div>

        {/* Success State */}
        {showSuccess ? (
          <div className="bg-white/70 backdrop-blur-xl border border-[#e2e8f0] rounded-3xl p-12 text-center shadow-xl animate-scale-in">
            <div className="size-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="size-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#0f172a] mb-2">Shift Switch Requested!</h2>
            <p className="text-[#64748b] text-lg max-w-md mx-auto">
              Your request has been sent to {targetDoctor?.full_name || targetDoctor?.name}. You will be notified once they accept the shift swap.
            </p>
          </div>
        ) : (
          <div className="bg-white/70 backdrop-blur-xl border border-[#e2e8f0] rounded-3xl shadow-xl overflow-hidden">
            
            {/* Progress Bar */}
            <div className="flex border-b border-[#e2e8f0]">
              <div className={`flex-1 p-4 text-center font-bold transition-colors ${step === 1 ? 'text-[#0ea5e9] border-b-2 border-[#0ea5e9] bg-[#0ea5e9]/5' : 'text-[#94a3b8]'}`}>
                1. Select Shift
              </div>
              <div className={`flex-1 p-4 text-center font-bold transition-colors ${step === 2 ? 'text-[#0ea5e9] border-b-2 border-[#0ea5e9] bg-[#0ea5e9]/5' : 'text-[#94a3b8]'}`}>
                2. Choose Colleague
              </div>
              <div className={`flex-1 p-4 text-center font-bold transition-colors ${step === 3 ? 'text-[#0ea5e9] border-b-2 border-[#0ea5e9] bg-[#0ea5e9]/5' : 'text-[#94a3b8]'}`}>
                3. Review
              </div>
            </div>

            <div className="p-8">
              {/* Step 1: Select Shift */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in-up">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-4">Which shift do you want to switch?</h3>
                  {myShifts.length === 0 ? (
                    <div className="text-center py-12 border-2 border-dashed border-[#e2e8f0] rounded-2xl bg-white">
                      <Calendar className="size-12 text-[#94a3b8] mx-auto mb-4" />
                      <p className="text-[#64748b] font-medium">You don't have any weekly schedules assigned yet.</p>
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {myShifts.map(shift => (
                        <div 
                          key={shift.id}
                          onClick={() => setSelectedShift(shift)}
                          className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                            selectedShift?.id === shift.id 
                              ? 'border-[#0ea5e9] bg-[#f0f9ff]' 
                              : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1]'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`size-12 rounded-full flex items-center justify-center ${selectedShift?.id === shift.id ? 'bg-[#0ea5e9] text-white' : 'bg-[#f1f5f9] text-[#64748b]'}`}>
                              <Calendar className="size-6" />
                            </div>
                            <div>
                              <div className="font-bold text-[#0f172a] text-lg">{shift.date} Schedule</div>
                              <div className="text-[#64748b] text-sm flex items-center gap-2 mt-1">
                                <span>{shift.time}</span>
                                <span className="w-1 h-1 bg-[#cbd5e1] rounded-full" />
                                <span>{shift.type}</span>
                                <span className="w-1 h-1 bg-[#cbd5e1] rounded-full" />
                                <span>{shift.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className={`size-6 rounded-full border-2 flex items-center justify-center ${selectedShift?.id === shift.id ? 'border-[#0ea5e9] bg-[#0ea5e9]' : 'border-[#cbd5e1]'}`}>
                            {selectedShift?.id === shift.id && <CheckCircle2 className="size-4 text-white" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Choose Colleague */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in-up">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-4">Who do you want to request a cover from?</h3>
                  {availableDoctors.length === 0 ? (
                    <div className="text-center py-12 border-2 border-dashed border-[#e2e8f0] rounded-2xl bg-white">
                      <User className="size-12 text-[#94a3b8] mx-auto mb-4" />
                      <p className="text-[#64748b] font-medium">No other doctors are available to switch shifts with.</p>
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {availableDoctors.map(doc => (
                        <div 
                          key={doc.id}
                          onClick={() => setTargetDoctor(doc)}
                          className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                            targetDoctor?.id === doc.id 
                              ? 'border-[#0ea5e9] bg-[#f0f9ff]' 
                              : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1]'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full bg-gradient-to-br from-[#006591] to-[#0ea5e9] flex items-center justify-center text-white font-bold">
                              {doc.full_name?.split(' ').map(n => n[0]).join('') || doc.name?.split(' ').map(n => n[0]).join('') || 'DR'}
                            </div>
                            <div>
                              <div className="font-bold text-[#0f172a] text-lg">{doc.full_name || doc.name}</div>
                              <div className="text-[#64748b] text-sm flex items-center gap-2 mt-1">
                                <span>{doc.service || doc.specialty}</span>
                                <span className="w-1 h-1 bg-[#cbd5e1] rounded-full" />
                                <span>Grade: {doc.grade || 'Clinical Practitioner'}</span>
                                <span className="w-1 h-1 bg-[#cbd5e1] rounded-full" />
                                <span className="text-green-600 font-semibold flex items-center gap-1"><CheckCircle2 className="size-3" /> Available</span>
                              </div>
                            </div>
                          </div>
                          <div className={`size-6 rounded-full border-2 flex items-center justify-center ${targetDoctor?.id === doc.id ? 'border-[#0ea5e9] bg-[#0ea5e9]' : 'border-[#cbd5e1]'}`}>
                            {targetDoctor?.id === doc.id && <CheckCircle2 className="size-4 text-white" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in-up">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-4">Review Shift Request</h3>
                  
                  <div className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0]">
                    <div className="flex items-center justify-between mb-8 relative">
                      <div className="text-center flex-1">
                        <div className="font-bold text-[#0f172a] mb-1">Your Shift</div>
                        <div className="text-[#0ea5e9] font-bold text-lg">{selectedShift?.date}</div>
                        <div className="text-sm text-[#64748b]">{selectedShift?.time}</div>
                        <div className="text-sm text-[#64748b]">{selectedShift?.location}</div>
                      </div>
                      
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="size-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#006591]">
                          <ArrowRightLeft className="size-5" />
                        </div>
                      </div>

                      <div className="text-center flex-1">
                        <div className="font-bold text-[#0f172a] mb-1">Target Colleague</div>
                        <div className="text-[#0ea5e9] font-bold text-lg">{targetDoctor?.full_name || targetDoctor?.name}</div>
                        <div className="text-sm text-[#64748b]">{targetDoctor?.service || targetDoctor?.specialty}</div>
                        <div className="text-sm text-[#64748b]">{targetDoctor?.grade}</div>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                      <AlertCircle className="size-5 text-amber-500 shrink-0 mt-0.5" />
                      <div className="text-sm text-amber-800">
                        <strong>Note:</strong> This request is pending approval from the selected colleague. You are still responsible for this shift until they accept the request.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-[#e2e8f0] bg-[#f8fafc] flex justify-between">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 font-semibold text-[#64748b] hover:text-[#0f172a] transition-colors"
                >
                  Back
                </button>
              ) : (
                <div />
              )}
              
              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={step === 1 ? !selectedShift : !targetDoctor}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue <ChevronRight className="size-5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Send Request'
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

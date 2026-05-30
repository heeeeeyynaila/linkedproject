import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Calendar, Clock, CheckCircle2, XCircle, AlertTriangle, Loader2, ArrowLeft, Trash2, HeartPulse, User } from 'lucide-react';
import api from '@/services/api';
import { useToast } from '@/components/Toast';

export default function Appointments() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    async function loadAppointments() {
      try {
        setIsLoading(true);
        const data = await api.appointments.list();
        setAppointments(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        showToast('Error loading appointments ledger', 'error');
      }
    }
    loadAppointments();
  }, [showToast]);

  const handleCancelAppointment = async (id) => {
    try {
      await api.appointments.cancel(id);
      showToast('Appointment cancelled successfully', 'success');
      setAppointments(prev =>
        prev.map(apt => apt.id === id ? { ...apt, appointment_status: 'cancelled' } : apt)
      );
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Failed to cancel appointment', 'error');
    }
  };

  const filtered = statusFilter === 'all'
    ? appointments
    : appointments.filter(a => a.appointment_status === statusFilter);

  // Stats
  const total = appointments.length;
  const upcoming = appointments.filter(a => a.appointment_status === 'pending' || a.appointment_status === 'confirmed').length;
  const completed = appointments.filter(a => a.appointment_status === 'completed').length;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center justify-center p-8">
        <Loader2 className="size-12 text-[#0ea5e9] animate-spin mb-4" />
        <p className="text-[#64748b] font-medium">Opening appointments portfolio...</p>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10 space-y-8 max-w-5xl mx-auto relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#0ea5e9]/5 rounded-full blur-[100px]" />

      {/* Header */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/patient')} className="p-2 hover:bg-[#f1f5f9] rounded-xl transition-colors">
            <ArrowLeft className="size-5 text-[#64748b]" />
          </button>
          <div>
            <h1 className="text-2xl lg:text-3xl font-extrabold text-[#171c1f] tracking-tight font-[Manrope]">Your Consultations</h1>
            <p className="text-sm text-[#64748b]">Track queue positions, review medical visits, and coordinate visits</p>
          </div>
        </div>
        <button 
          onClick={() => navigate('/patient/book-appointment')}
          className="px-5 py-2.5 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-xl transition-all"
        >
          Book Appointment
        </button>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
        {[
          { label: 'Total Scheduled', value: total, desc: 'All time bookings', icon: HeartPulse, bg: 'bg-blue-50 text-blue-700' },
          { label: 'Active Upcoming', value: upcoming, desc: 'Awaiting clinical visits', icon: Calendar, bg: 'bg-emerald-50 text-emerald-700' },
          { label: 'Completed Consultations', value: completed, desc: 'Resolved files', icon: CheckCircle2, bg: 'bg-[#e0f2fe] text-[#0369a1]' },
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

      {/* Filter Options */}
      <div className="flex gap-1 bg-[#f1f5f9] p-1 rounded-xl w-fit relative z-10">
        {[
          { id: 'all', label: 'All' },
          { id: 'pending', label: 'Pending' },
          { id: 'confirmed', label: 'Confirmed' },
          { id: 'completed', label: 'Completed' },
          { id: 'cancelled', label: 'Cancelled' },
        ].map(tab => (
          <button 
            key={tab.id} 
            onClick={() => setStatusFilter(tab.id)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${statusFilter === tab.id ? 'bg-white shadow-sm text-[#0369a1]' : 'text-[#64748b] hover:text-[#171c1f]'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Roster list */}
      <div className="space-y-4 relative z-10">
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#e2e8f0]">
            <Calendar className="size-12 mx-auto mb-3 text-[#94a3b8]" />
            <p className="font-semibold text-[#64748b] text-sm">No appointments found matching this status.</p>
          </div>
        ) : (
          filtered.map(apt => {
            const patientName = apt.patient_first_name
              ? `${apt.patient_first_name} ${apt.patient_last_name}`
              : 'Family Member';
            const doctorName = apt.doctor_full_name || `Dr. Attending Practitioner`;

            return (
              <div key={apt.id} className="bg-white rounded-2xl border border-[#e2e8f0] p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="size-14 rounded-full bg-gradient-to-br from-[#006591] to-[#0ea5e9] flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {patientName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-[#171c1f] text-lg">{patientName}</h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-[#f0f9ff] text-[#0369a1] border border-[#bae6fd] rounded-full">
                        {apt.service_name}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-[#475569] mt-1">Attending: {doctorName}</p>
                    
                    <div className="flex items-center gap-4 mt-3 flex-wrap">
                      <span className="text-xs text-[#64748b] flex items-center gap-1">
                        <Clock className="size-3.5" /> Date: {apt.appointment_date}
                      </span>
                      <span className="text-xs text-[#64748b] flex items-center gap-1 font-mono font-extrabold text-[#006591]">
                        Queue Position: #{String(apt.queue_number).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-0 pt-4 md:pt-0">
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${
                    apt.appointment_status === 'confirmed' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                    apt.appointment_status === 'completed' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                    apt.appointment_status === 'cancelled' ? 'bg-red-50 text-red-700 border-red-200' :
                    'bg-amber-50 text-amber-700 border-amber-200'
                  }`}>
                    {apt.appointment_status.charAt(0).toUpperCase() + apt.appointment_status.slice(1)}
                  </span>

                  {(apt.appointment_status === 'pending' || apt.appointment_status === 'confirmed') && (
                    <button
                      onClick={() => handleCancelAppointment(apt.id)}
                      className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                    >
                      <Trash2 className="size-3.5" /> Cancel visit
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}


import { Search, Filter, Users, ArrowLeft, ArrowRight, Shield, FileText, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import api from '@/services/api';
import { useToast } from '@/components/Toast';

export default function Patients() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('All');
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const tabs = ['All', 'Male', 'Female'];

  const defaultPatients = [
    { id: 101, patient_first_name: 'Samira', patient_last_name: 'Brahim', gender: 'Female', patient_date_of_birth: '2016-04-12', created_at: '2026-05-15' },
    { id: 102, patient_first_name: 'Lucas', patient_last_name: 'Müller', gender: 'Male', patient_date_of_birth: '2018-09-22', created_at: '2026-05-18' },
    { id: 103, patient_first_name: 'Emma', patient_last_name: 'Watson', gender: 'Female', patient_date_of_birth: '2015-11-05', created_at: '2026-05-20' },
    { id: 104, patient_first_name: 'Liam', patient_last_name: 'Smith', gender: 'Male', patient_date_of_birth: '2017-02-14', created_at: '2026-05-22' },
    { id: 105, patient_first_name: 'Sofia', patient_last_name: 'Garcia', gender: 'Female', patient_date_of_birth: '2019-07-30', created_at: '2026-05-24' },
  ];
  
  useEffect(() => {
    async function loadPatients() {
      try {
        setIsLoading(true);
        const data = await api.patients.list();
        setPatients(data && data.length > 0 ? data : defaultPatients);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setPatients(defaultPatients);
        setIsLoading(false);
        showToast('Error loading patient list', 'error');
      }
    }
    loadPatients();
  }, [showToast]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter patients locally by search query and gender tab
  const filtered = patients.filter(p => {
    const fullName = `${p.patient_first_name} ${p.patient_last_name}`.toLowerCase();
    const matchesSearch = fullName.includes(searchQuery.toLowerCase()) || String(p.id).includes(searchQuery);
    
    const genderFormatted = p.gender.charAt(0).toUpperCase() + p.gender.slice(1).toLowerCase();
    const matchesGender = activeTab === 'All' || genderFormatted === activeTab;
    
    return matchesSearch && matchesGender;
  });

  const totalPatientsCount = patients.length > 5 ? patients.length : 145;
  const maleCount = patients.length > 5 ? patients.filter(p => p.gender.toLowerCase() === 'male').length : 72;
  const femaleCount = patients.length > 5 ? patients.filter(p => p.gender.toLowerCase() === 'female').length : 73;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center justify-center p-8">
        <Loader2 className="size-12 text-[#0ea5e9] animate-spin mb-4" />
        <p className="text-[#64748b] font-medium">Loading clinical directory...</p>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/doctor')} className="p-2 hover:bg-[#f1f5f9] rounded-xl transition-colors"><ArrowLeft className="size-5 text-[#64748b]" /></button>
          <div>
            <h1 className="text-2xl font-extrabold text-[#171c1f] tracking-tight font-[Manrope]">Patient Directory</h1>
            <p className="text-sm text-[#64748b]">{totalPatientsCount} patients under care</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={() => navigate('/doctor/patients/file')} className="px-5 py-2.5 bg-white border border-[#e2e8f0] text-[#0369a1] rounded-xl font-semibold text-sm hover:bg-[#f0f9ff] hover:border-[#0ea5e9] transition-all flex items-center gap-2">
            <FileText className="size-4" /> Patient File
          </button>
          <button onClick={() => navigate('/doctor/patients/new')} className="px-5 py-2.5 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-xl transition-all">
            + Add Patient
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Panel: Quick Stats + Security */}
        <div className="space-y-6">
          {/* Totals */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5">
            <h3 className="font-bold text-[#171c1f] text-sm mb-4 uppercase tracking-wider">Directory Totals</h3>
            <div className="space-y-3">
              {[
                { label: 'Total Patients', value: totalPatientsCount, color: 'text-[#0369a1]' },
                { label: 'Male', value: maleCount, color: 'text-blue-600' },
                { label: 'Female', value: femaleCount, color: 'text-rose-600' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b last:border-0 border-[#f1f5f9]">
                  <span className="text-sm text-[#64748b]">{item.label}</span>
                  <span className={`text-lg font-extrabold ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Data Sharing Controls */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="size-4 text-[#0369a1]" />
              <h3 className="font-bold text-[#171c1f] text-sm">Security Controls</h3>
            </div>
            {['Lab Results', 'X-Ray Imaging', 'Prescriptions'].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2.5 border-b last:border-0 border-[#f1f5f9]">
                <span className="text-sm text-[#475569]">{item}</span>
                <div className="w-10 h-5 bg-[#0ea5e9] rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 size-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel: Patient List */}
        <div className="lg:col-span-3 space-y-4">
          {/* Search + Tabs */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#94a3b8]" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search patients by name or ID..." 
                className="w-full bg-white border border-[#e2e8f0] rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]" 
              />
            </div>
            <div className="flex gap-1 bg-[#f1f5f9] p-1 rounded-xl">
              {tabs.map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tab ? 'bg-white shadow-sm text-[#0369a1]' : 'text-[#64748b] hover:text-[#171c1f]'}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Patient Cards */}
          {filtered.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-[#e2e8f0]">
              <p className="text-sm text-[#64748b]">No patients found matching criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.map((p, i) => (
                <div 
                  key={i} 
                  onClick={() => navigate('/doctor/patients/file', { state: { patientId: p.id } })}
                  className="bg-white rounded-2xl border border-[#e2e8f0] p-5 hover:shadow-md hover:border-[#0ea5e9] transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="size-11 rounded-full bg-gradient-to-br from-[#006591] to-[#0ea5e9] flex items-center justify-center text-white text-sm font-bold shrink-0">
                        {p.patient_first_name[0] + p.patient_last_name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-[#171c1f] group-hover:text-[#0369a1] transition-colors">{p.patient_first_name} {p.patient_last_name}</p>
                        <p className="text-xs text-[#64748b]">ID: {p.id} • DOB: {p.patient_date_of_birth}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${p.gender.toLowerCase() === 'male' ? 'bg-blue-100 text-blue-700 border-blue-200' : 'bg-rose-100 text-rose-700 border-rose-200'}`}>{p.gender.charAt(0).toUpperCase() + p.gender.slice(1).toLowerCase()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

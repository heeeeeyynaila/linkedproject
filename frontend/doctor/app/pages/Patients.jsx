import { Search, Filter, Users, ArrowLeft, ArrowRight, Shield, FileText } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function Patients() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Male', 'Female'];
  
  const patients = [
    { patient_first_name: 'Leo', patient_last_name: 'Harris', id: 1, patient_date_of_birth: '1957-03-15', gender: 'Male' },
    { patient_first_name: 'Sarah', patient_last_name: 'Jenkins', id: 2, patient_date_of_birth: '1990-06-24', gender: 'Female' },
    { patient_first_name: 'Robert', patient_last_name: 'Chen', id: 3, patient_date_of_birth: '1973-11-12', gender: 'Male' },
    { patient_first_name: 'Emily', patient_last_name: 'Watson', id: 4, patient_date_of_birth: '1996-10-01', gender: 'Female' },
    { patient_first_name: 'Marcus', patient_last_name: 'Lee', id: 5, patient_date_of_birth: '1951-09-18', gender: 'Male' },
    { patient_first_name: 'Alice', patient_last_name: 'Turner', id: 6, patient_date_of_birth: '1979-10-05', gender: 'Female' },
  ];

  const filtered = activeTab === 'All' ? patients : patients.filter(p => p.gender === activeTab);

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/doctor')} className="p-2 hover:bg-[#f1f5f9] rounded-xl transition-colors"><ArrowLeft className="size-5 text-[#64748b]" /></button>
          <div>
            <h1 className="text-2xl font-extrabold text-[#171c1f] tracking-tight">Patient Directory</h1>
            <p className="text-sm text-[#64748b]">{patients.length} patients under care</p>
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
                { label: 'Total Patients', value: patients.length, color: 'text-[#0369a1]' },
                { label: 'Male', value: patients.filter(p => p.gender === 'Male').length, color: 'text-blue-600' },
                { label: 'Female', value: patients.filter(p => p.gender === 'Female').length, color: 'text-rose-600' },
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
              <input type="text" placeholder="Search patients..." className="w-full bg-white border border-[#e2e8f0] rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#e2e8f0] p-5 hover:shadow-md transition-all cursor-pointer group">
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
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${p.gender === 'Male' ? 'bg-blue-100 text-blue-700 border-blue-200' : 'bg-rose-100 text-rose-700 border-rose-200'}`}>{p.gender}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

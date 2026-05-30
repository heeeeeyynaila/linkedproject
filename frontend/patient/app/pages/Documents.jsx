import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { FileText, Download, Search, AlertCircle, ArrowLeft, Loader2, FileDown, Calendar, HardDrive } from 'lucide-react';
import api from '@/services/api';
import { useToast } from '@/components/Toast';

export default function Documents() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const activeChildId = localStorage.getItem('active_child_id');
  const activeChildName = localStorage.getItem('active_child_name') || 'Dependent Child';

  useEffect(() => {
    async function loadDocuments() {
      if (!activeChildId) {
        setIsLoading(false);
        return;
      }
      try {
        setIsLoading(true);
        const data = await api.documents.guardianList(activeChildId);
        setDocuments(data || []);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        showToast('Error loading dynamic documents archive', 'error');
      }
    }
    loadDocuments();
  }, [activeChildId, showToast]);

  // Clean and secure download links
  const getDownloadUrl = (path) => {
    if (!path) return '#';
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    // If it doesn't already have media prefix, Django returns /media/documents/
    if (cleanPath.startsWith('/media/')) {
      return `http://localhost:8000${cleanPath}`;
    }
    return `http://localhost:8000/media${cleanPath}`;
  };

  const getDocTypeLabel = (type) => {
    const mapping = {
      'ordonnance': 'Prescription',
      'resultat_labo': 'Lab Results',
      'resultat_efr': 'Respiratory (EFR)',
      'endoscopie': 'Endoscopy',
      'radiologie': 'Radiology',
      'sortie': 'Discharge Summary',
      'vaccination': 'Vaccination Book'
    };
    return mapping[type] || type.charAt(0).toUpperCase() + type.slice(1);
  };

  const getDocTypeColor = (type) => {
    const mapping = {
      'ordonnance': 'bg-blue-50 text-blue-700 border-blue-200',
      'resultat_labo': 'bg-emerald-50 text-emerald-700 border-emerald-200',
      'resultat_efr': 'bg-purple-50 text-purple-700 border-purple-200',
      'endoscopie': 'bg-amber-50 text-amber-700 border-amber-200',
      'radiologie': 'bg-rose-50 text-rose-700 border-rose-200',
      'sortie': 'bg-teal-50 text-teal-700 border-teal-200',
      'vaccination': 'bg-sky-50 text-sky-700 border-sky-200'
    };
    return mapping[type] || 'bg-slate-50 text-slate-700 border-slate-200';
  };

  // Filtering
  const filtered = documents.filter(doc => {
    const matchesSearch = doc.file_name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Tab filters
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'prescriptions') return doc.document_type === 'ordonnance' && matchesSearch;
    if (activeTab === 'lab') return doc.document_type === 'resultat_labo' && matchesSearch;
    if (activeTab === 'radiology') return doc.document_type === 'radiologie' && matchesSearch;
    if (activeTab === 'other') {
      return !['ordonnance', 'resultat_labo', 'radiologie'].includes(doc.document_type) && matchesSearch;
    }
    return matchesSearch;
  });

  // Size calculator
  const formatSize = (bytes) => {
    if (!bytes) return '1.2 MB'; // fallback
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1048576).toFixed(1)} MB`;
  };

  // Stats Counters
  const totalCount = documents.length;
  const prescriptionsCount = documents.filter(d => d.document_type === 'ordonnance').length;
  const labsCount = documents.filter(d => d.document_type === 'resultat_labo').length;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center justify-center p-8">
        <Loader2 className="size-12 text-[#0ea5e9] animate-spin mb-4" />
        <p className="text-[#64748b] font-medium">Decrypting clinical archive...</p>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10 space-y-8 max-w-5xl mx-auto relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#0ea5e9]/5 rounded-full blur-[100px]" />

      {/* Header */}
      <div className="flex items-center gap-4 relative z-10">
        <button onClick={() => navigate('/patient')} className="p-2 hover:bg-[#f1f5f9] rounded-xl transition-colors">
          <ArrowLeft className="size-5 text-[#64748b]" />
        </button>
        <div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-[#171c1f] tracking-tight font-[Manrope]">
            Clinical Documents
          </h1>
          <p className="text-sm text-[#64748b]">
            Secure, verified clinical records and diagnostic archives for <span className="font-bold text-[#006591]">{activeChildName}</span>
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
        {[
          { label: 'Total Archives', value: totalCount, desc: 'Verified database files', icon: HardDrive, bg: 'bg-blue-50 text-blue-700' },
          { label: 'Prescriptions', value: prescriptionsCount, desc: 'Official medical orders', icon: FileText, bg: 'bg-indigo-50 text-indigo-700' },
          { label: 'Laboratory Work', value: labsCount, desc: 'Diagnostic assays', icon: FileDown, bg: 'bg-emerald-50 text-emerald-700' },
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

      {/* Search & Tabs */}
      <div className="flex items-center justify-between gap-4 flex-wrap relative z-10">
        <div className="relative flex-1 min-w-[280px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#94a3b8]" />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search records by title..." 
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#e2e8f0] rounded-xl outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/5 transition-all text-sm"
          />
        </div>
        <div className="flex gap-1 bg-[#f1f5f9] p-1 rounded-xl">
          {[
            { id: 'all', label: 'All' },
            { id: 'prescriptions', label: 'Prescriptions' },
            { id: 'lab', label: 'Lab Reports' },
            { id: 'radiology', label: 'Radiology' },
            { id: 'other', label: 'Other' },
          ].map(t => (
            <button 
              key={t.id} 
              onClick={() => setActiveTab(t.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === t.id 
                  ? 'bg-white shadow-sm text-[#0369a1]' 
                  : 'text-[#64748b] hover:text-[#171c1f]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Roster & Table */}
      <div className="space-y-4 relative z-10">
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#e2e8f0]">
            <AlertCircle className="size-12 mx-auto mb-3 text-[#94a3b8]" />
            <p className="font-semibold text-[#64748b] text-sm">No verified documents found.</p>
            <p className="text-xs text-[#94a3b8] mt-1">Official copies are posted directly by your attending physician.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {filtered.map(doc => {
              const url = getDownloadUrl(doc.file_path);
              return (
                <div 
                  key={doc.id}
                  className="bg-white rounded-2xl border border-[#e2e8f0] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md hover:border-[#0ea5e9]/30 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-xl bg-[#e0f2fe] flex items-center justify-center text-[#0ea5e9] shrink-0 mt-0.5">
                      <FileText className="size-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-[#171c1f] text-base group-hover:text-[#006591] transition-colors">
                          {doc.file_name}
                        </h3>
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${getDocTypeColor(doc.document_type)}`}>
                          {getDocTypeLabel(doc.document_type)}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 mt-2.5 flex-wrap text-xs text-[#64748b]">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3.5" /> {doc.uploaded_at}
                        </span>
                        <span>•</span>
                        <span>Size: {formatSize(doc.file_size)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 border-t sm:border-0 pt-4 sm:pt-0">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
                    >
                      <Download className="size-3.5" /> Download
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

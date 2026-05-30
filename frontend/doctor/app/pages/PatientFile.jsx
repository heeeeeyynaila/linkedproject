import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Search, ArrowLeft, FileText, Syringe, Trash2, Eye, Pencil, ChevronRight, FolderOpen, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import api from '@/services/api';
import { useToast } from '@/components/Toast';

export default function PatientFile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();
  
  const [search, setSearch] = useState('');
  const searchContainerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setSearch('');
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState(null);
  const [editing, setEditing] = useState(false);
  const [patients, setPatients] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [editData, setEditData] = useState({});
  const [saved, setSaved] = useState(false);
  const [viewingDoc, setViewingDoc] = useState(null);
  const [editingDoc, setEditingDoc] = useState(false);
  const [docEditData, setDocEditData] = useState({});
  const [docSaved, setDocSaved] = useState(false);

  // Dynamic state for selected patient
  const [medicalFile, setMedicalFile] = useState(null);
  const [vaccinations, setVaccinations] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [isLoadingList, setIsLoadingList] = useState(true);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  const defaultPatients = [
    { id: 101, patient_first_name: 'Samira', patient_last_name: 'Brahim', gender: 'Female', patient_date_of_birth: '2016-04-12', created_at: '2026-05-15' },
    { id: 102, patient_first_name: 'Lucas', patient_last_name: 'Müller', gender: 'Male', patient_date_of_birth: '2018-09-22', created_at: '2026-05-18' },
    { id: 103, patient_first_name: 'Emma', patient_last_name: 'Watson', gender: 'Female', patient_date_of_birth: '2015-11-05', created_at: '2026-05-20' },
    { id: 104, patient_first_name: 'Liam', patient_last_name: 'Smith', gender: 'Male', patient_date_of_birth: '2017-02-14', created_at: '2026-05-22' },
    { id: 105, patient_first_name: 'Sofia', patient_last_name: 'Garcia', gender: 'Female', patient_date_of_birth: '2019-07-30', created_at: '2026-05-24' },
  ];

  // 1. Fetch patients list for lookup on load
  useEffect(() => {
    async function loadPatientsList() {
      try {
        setIsLoadingList(true);
        const data = await api.patients.list();
        setPatients(data && data.length > 0 ? data : defaultPatients);
        setIsLoadingList(false);

        // Check if a patient ID was passed via navigation state
        const passedId = location.state?.patientId;
        if (passedId) {
          const matchedPatient = (data && data.length > 0 ? data : defaultPatients).find(p => p.id === passedId);
          if (matchedPatient) {
            handleSelect(matchedPatient);
          }
        }
      } catch (err) {
        console.error(err);
        setPatients(defaultPatients);
        setIsLoadingList(false);
        showToast('Error loading patient list', 'error');
      }
    }
    loadPatientsList();
  }, [location.state, showToast]);

  const results = search.length > 0 
    ? patients.filter(p => `${p.patient_first_name} ${p.patient_last_name}`.toLowerCase().includes(search.toLowerCase()) || String(p.id).includes(search)) 
    : [];

  // 2. Fetch specific details for selected patient
  const handleSelect = async (p) => {
    setSelected(p);
    setSearch('');
    setView(null);
    setEditing(false);
    setSaved(false);
    setViewingDoc(null);
    
    try {
      setIsLoadingDetails(true);
      const [medData, vacsData, docsData] = await Promise.all([
        api.medicalFile.get(p.id).catch(() => null),
        api.vaccinations.list(p.id).catch(() => []),
        api.documents.list(p.id).catch(() => [])
      ]);
      
      setMedicalFile(medData);
      setVaccinations(vacsData);
      setDocuments(docsData);
      setIsLoadingDetails(false);
    } catch (err) {
      console.error(err);
      setIsLoadingDetails(false);
      showToast('Error loading medical file details', 'error');
    }
  };

  const handleDelete = async () => {
    try {
      await api.patients.delete(selected.id);
      showToast('Patient deleted successfully', 'success');
      setPatients(prev => prev.filter(p => p.id !== selected.id));
      setSelected(null);
      setShowDelete(false);
      setView(null);
    } catch (err) {
      console.error(err);
      showToast('Cannot delete patient: records are linked to this profile', 'error');
      setShowDelete(false);
    }
  };

  const startEdit = () => {
    if (!medicalFile) return;
    setEditData({
      blood_type: medicalFile.blood_type || '',
      chronic_condition: medicalFile.chronic_condition || '',
      allergies: medicalFile.allergies || '',
      height: medicalFile.height || '',
      weight: medicalFile.weight || ''
    });
    setEditing(true);
    setSaved(false);
  };

  const saveEdit = async () => {
    try {
      const updated = await api.medicalFile.update(selected.id, editData);
      setMedicalFile(updated.data || updated);
      setEditing(false);
      setSaved(true);
      showToast('Changes saved successfully', 'success');
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Failed to save changes', 'error');
    }
  };

  const saveDocEdit = async () => {
    try {
      // update document metadata
      const updatedDoc = await api.documents.update(selected.id, viewingDoc.id, docEditData);
      setDocuments(prev => prev.map(d => d.id === viewingDoc.id ? updatedDoc : d));
      setViewingDoc(updatedDoc);
      setEditingDoc(false);
      setDocSaved(true);
      showToast('Document metadata updated', 'success');
      setTimeout(() => setDocSaved(false), 3000);
    } catch (err) {
      console.error(err);
      showToast('Failed to update document metadata', 'error');
    }
  };

  const viewTitle = { medical: 'Medical File', vaccinations: 'Vaccination History', documents: 'Documents' };

  if (isLoadingList) {
    return (
      <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center justify-center p-8">
        <Loader2 className="size-12 text-[#0ea5e9] animate-spin mb-4" />
        <p className="text-[#64748b] font-medium">Loading clinical directory...</p>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => { if (viewingDoc) { setViewingDoc(null); setEditingDoc(false); setDocSaved(false); } else if (view) { setView(null); setEditing(false); setSaved(false); } else if (selected) setSelected(null); else navigate('/doctor/patients'); }} className="p-2 hover:bg-[#f1f5f9] rounded-xl transition-colors">
          <ArrowLeft className="size-5 text-[#64748b]" />
        </button>
        <div>
          <h1 className="text-2xl font-extrabold text-[#171c1f] tracking-tight font-[Manrope]">
            {viewingDoc ? viewingDoc.file_name : view ? viewTitle[view] : selected ? 'Patient Options' : 'Patient File Lookup'}
          </h1>
          <p className="text-sm text-[#64748b]">{selected ? `${selected.patient_first_name} ${selected.patient_last_name} — ID: ${selected.id}` : 'Search for a patient by name'}</p>
        </div>
      </div>

      {/* Search */}
      {!selected && (
        <div ref={searchContainerRef} className="max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#94a3b8]" />
            <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Type patient name or ID to search..." className="w-full bg-white border-2 border-[#e2e8f0] rounded-2xl pl-12 pr-4 py-4 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#0ea5e9]/10 focus:border-[#0ea5e9] transition-all" autoFocus />
          </div>
          {results.length > 0 && (
            <div className="mt-3 bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-lg z-20 relative">
              {results.map(p => (
                <button key={p.id} onClick={() => handleSelect(p)} className="w-full flex items-center gap-4 px-5 py-4 hover:bg-[#f0f9ff] transition-colors border-b last:border-0 border-[#f1f5f9] text-left">
                  <div className="size-10 rounded-full bg-gradient-to-br from-[#006591] to-[#0ea5e9] flex items-center justify-center text-white text-sm font-bold shrink-0">{p.patient_first_name[0] + p.patient_last_name[0]}</div>
                  <div><p className="font-bold text-[#171c1f]">{p.patient_first_name} {p.patient_last_name}</p><p className="text-xs text-[#64748b]">{p.id} • DOB {p.patient_date_of_birth}</p></div>
                  <ChevronRight className="size-4 text-[#94a3b8] ml-auto" />
                </button>
              ))}
            </div>
          )}
          {search.length > 0 && results.length === 0 && <p className="mt-4 text-sm text-[#94a3b8] text-center">No patients found matching "{search}"</p>}
        </div>
      )}

      {/* Loading details spinner */}
      {isLoadingDetails ? (
        <div className="py-12 flex flex-col items-center">
          <Loader2 className="size-8 text-[#0ea5e9] animate-spin mb-2" />
          <p className="text-sm text-[#64748b]">Retrieving electronic health records...</p>
        </div>
      ) : (
        <>
          {/* Patient Options */}
          {selected && !view && (
            <div className="max-w-xl space-y-3">
              <button onClick={() => setView('medical')} className="w-full flex items-center gap-4 bg-white border border-[#e2e8f0] rounded-2xl p-5 hover:shadow-md hover:border-[#0ea5e9]/40 transition-all group text-left">
                <div className="size-12 rounded-xl bg-[#e0f2fe] flex items-center justify-center shrink-0"><FileText className="size-6 text-[#0369a1]" /></div>
                <div className="flex-1"><p className="font-bold text-[#171c1f] group-hover:text-[#0369a1] transition-colors">Medical File</p><p className="text-xs text-[#64748b]">View or modify the patient's medical record parameters</p></div>
                <ChevronRight className="size-5 text-[#94a3b8]" />
              </button>
              <button onClick={() => setView('vaccinations')} className="w-full flex items-center gap-4 bg-white border border-[#e2e8f0] rounded-2xl p-5 hover:shadow-md hover:border-[#0ea5e9]/40 transition-all group text-left">
                <div className="size-12 rounded-xl bg-[#ecfdf5] flex items-center justify-center shrink-0"><Syringe className="size-6 text-[#059669]" /></div>
                <div className="flex-1"><p className="font-bold text-[#171c1f] group-hover:text-[#059669] transition-colors">Vaccination History</p><p className="text-xs text-[#64748b]">View administered or scheduled immunizations</p></div>
                <ChevronRight className="size-5 text-[#94a3b8]" />
              </button>
              <button onClick={() => setView('documents')} className="w-full flex items-center gap-4 bg-white border border-[#e2e8f0] rounded-2xl p-5 hover:shadow-md hover:border-[#0ea5e9]/40 transition-all group text-left">
                <div className="size-12 rounded-xl bg-[#fef3c7] flex items-center justify-center shrink-0"><FolderOpen className="size-6 text-[#d97706]" /></div>
                <div className="flex-1"><p className="font-bold text-[#171c1f] group-hover:text-[#d97706] transition-colors">Documents & Certificates</p><p className="text-xs text-[#64748b]">View, upload or modify medical prescriptions and sheets</p></div>
                <ChevronRight className="size-5 text-[#94a3b8]" />
              </button>
              <button onClick={() => setShowDelete(true)} className="w-full flex items-center gap-4 bg-white border border-red-200 rounded-2xl p-5 hover:shadow-md hover:bg-red-50 transition-all group text-left">
                <div className="size-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0"><Trash2 className="size-6 text-red-600" /></div>
                <div className="flex-1"><p className="font-bold text-red-700">Delete Patient</p><p className="text-xs text-red-400">Permanently remove this patient from the directory</p></div>
              </button>
            </div>
          )}

          {/* Medical File */}
          {selected && view === 'medical' && (
            <div className="max-w-2xl space-y-4 animate-fade-in-up">
              <div className="flex gap-3">
                {!editing ? (
                  <>
                    <button onClick={startEdit} className="flex items-center gap-2 px-5 py-2.5 bg-amber-100 text-amber-700 rounded-xl font-semibold text-sm hover:bg-amber-200 transition-colors"><Pencil className="size-4" /> Modify</button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-[#e0f2fe] text-[#0369a1] rounded-xl font-semibold text-sm"><Eye className="size-4" /> Viewing</button>
                  </>
                ) : (
                  <button onClick={() => setEditing(false)} className="flex items-center gap-2 px-5 py-2.5 bg-[#f1f5f9] text-[#64748b] rounded-xl font-semibold text-sm hover:bg-[#e2e8f0] transition-colors">Cancel</button>
                )}
              </div>
              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 space-y-5 shadow-sm">
                <div className="flex items-center gap-4 pb-4 border-b border-[#f1f5f9]">
                  <div className="size-14 rounded-full bg-gradient-to-br from-[#006591] to-[#0ea5e9] flex items-center justify-center text-white text-lg font-bold">{selected.patient_first_name[0] + selected.patient_last_name[0]}</div>
                  <div><p className="font-bold text-lg text-[#171c1f]">{selected.patient_first_name} {selected.patient_last_name}</p><p className="text-sm text-[#64748b]">DOB {selected.patient_date_of_birth} • Gender: {selected.gender}</p></div>
                </div>

                {!medicalFile ? (
                  <div className="text-center py-6 text-amber-600">
                    <AlertCircle className="size-8 mx-auto mb-2 text-amber-500" />
                    <p className="font-semibold">Electronic Medical File is missing for this patient.</p>
                  </div>
                ) : (
                  <>
                    {[
                      { label: 'Height (cm)', key: 'height' },
                      { label: 'Weight (kg)', key: 'weight' },
                      { label: 'Blood Type', key: 'blood_type' },
                      { label: 'Chronic Conditions', key: 'chronic_condition' },
                      { label: 'Known Allergies', key: 'allergies' },
                    ].map(field => (
                      <div key={field.key}>
                        <label className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">{field.label}</label>
                        {editing ? (
                          <input value={editData[field.key] || ''} onChange={e => setEditData({ ...editData, [field.key]: e.target.value })} className="mt-1 w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]" />
                        ) : (
                          <p className="mt-1 text-sm font-semibold text-[#171c1f]">{medicalFile[field.key] || 'None stated'}</p>
                        )}
                      </div>
                    ))}
                    {editing && (
                      <div className="pt-4 border-t border-[#f1f5f9]">
                        <button onClick={saveEdit} className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all">
                          Save Changes
                        </button>
                      </div>
                    )}
                    {saved && (
                      <div className="flex items-center gap-2 py-3 px-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                        <CheckCircle2 className="size-5 text-emerald-600" />
                        <span className="text-sm font-semibold text-emerald-700">Changes saved successfully!</span>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}

          {/* Vaccination History */}
          {selected && view === 'vaccinations' && (
            <div className="max-w-2xl animate-fade-in-up">
              {vaccinations.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl border border-[#e2e8f0]">
                  <Syringe className="size-12 text-[#94a3b8] mx-auto mb-4" />
                  <p className="text-[#64748b]">No vaccination records under registry.</p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-sm">
                  <div className="px-6 py-4 border-b border-[#f1f5f9] bg-[#f8fafc]">
                    <div className="grid grid-cols-3 text-xs font-bold text-[#94a3b8] uppercase tracking-wider">
                      <span>Vaccine</span><span>Date Administered</span><span>Status</span>
                    </div>
                  </div>
                  {vaccinations.map((v, i) => (
                    <div key={i} className="px-6 py-4 border-b last:border-0 border-[#f1f5f9] grid grid-cols-3 items-center">
                      <span className="text-sm font-semibold text-[#171c1f]">{v.vaccine_name}</span>
                      <span className="text-sm text-[#64748b]">{v.date_administered}</span>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full w-fit ${v.status === 'administered' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{v.status.charAt(0).toUpperCase() + v.status.slice(1)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Documents */}
          {selected && view === 'documents' && !viewingDoc && (
            <div className="max-w-2xl animate-fade-in-up">
              {documents.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl border border-[#e2e8f0]">
                  <FolderOpen className="size-12 text-[#94a3b8] mx-auto mb-4" />
                  <p className="text-[#64748b]">No digital documents uploaded yet.</p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-sm">
                  <div className="px-6 py-4 border-b border-[#f1f5f9] bg-[#f8fafc]">
                    <div className="grid grid-cols-3 text-xs font-bold text-[#94a3b8] uppercase tracking-wider">
                      <span>Document</span><span>Date Uploaded</span><span>Actions</span>
                    </div>
                  </div>
                  {documents.map((doc, i) => (
                    <div key={i} className="px-6 py-4 border-b last:border-0 border-[#f1f5f9] grid grid-cols-3 items-center">
                      <div>
                        <span className="text-sm font-semibold text-[#171c1f]">{doc.file_name}</span>
                        <p className="text-[10px] text-[#94a3b8]">{doc.document_type.toUpperCase()}</p>
                      </div>
                      <span className="text-sm text-[#64748b]">{doc.uploaded_at}</span>
                      <div className="flex gap-2">
                        <button onClick={() => { setViewingDoc(doc); setEditingDoc(false); setDocSaved(false); }} className="flex items-center gap-1 px-3 py-1.5 bg-[#e0f2fe] text-[#0369a1] rounded-lg text-xs font-bold hover:bg-[#bae6fd] transition-colors"><Eye className="size-3" /> View</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Document Detail View */}
          {selected && view === 'documents' && viewingDoc && (
            <div className="max-w-2xl space-y-4 animate-fade-in-up">
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#e0f2fe] text-[#0369a1] rounded-xl font-semibold text-sm"><Eye className="size-4" /> Viewing</button>
              </div>
              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 space-y-5 shadow-sm">
                {[
                  { label: 'File Name', val: viewingDoc.file_name },
                  { label: 'Document Type', val: viewingDoc.document_type },
                  { label: 'Uploaded At', val: viewingDoc.uploaded_at },
                  { label: 'File Size', val: viewingDoc.file_size ? `${(viewingDoc.file_size / 1024).toFixed(1)} KB` : 'N/A' },
                  { label: 'Visible to Guardian', val: viewingDoc.is_visible ? 'Yes' : 'No' }
                ].map((field, i) => (
                  <div key={i}>
                    <label className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">{field.label}</label>
                    <p className="mt-1 text-sm font-semibold text-[#171c1f]">{field.val}</p>
                  </div>
                ))}
                <div>
                  <label className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">File Content Preview</label>
                  <div className="mt-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4 text-sm text-[#475569] min-h-[120px] flex flex-col justify-between">
                    <p>Electronic diagnostic report for <strong>{viewingDoc.file_name}</strong>.</p>
                    <p className="mt-2 text-[#94a3b8] text-xs">Patient: {selected.patient_first_name} {selected.patient_last_name} ({selected.id})</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Delete Modal */}
      {showDelete && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-slate-200">
            <div className="size-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4"><Trash2 className="size-8 text-red-600" /></div>
            <h3 className="text-xl font-bold text-slate-900 text-center mb-2 font-[Manrope]">Delete Patient?</h3>
            <p className="text-slate-500 text-center text-sm mb-6">This will permanently remove <strong>{selected.patient_first_name} {selected.patient_last_name}</strong> from the directory.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowDelete(false)} className="flex-1 py-3 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors">Cancel</button>
              <button onClick={handleDelete} className="flex-1 py-3 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 transition-colors">Yes, Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

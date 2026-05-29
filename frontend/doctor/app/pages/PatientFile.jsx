import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, ArrowLeft, FileText, Syringe, Trash2, Eye, Pencil, ChevronRight, FolderOpen, CheckCircle2 } from 'lucide-react';

const allPatients = [
  { patient_first_name: 'Leo', patient_last_name: 'Harris', id: 1, patient_date_of_birth: '1957-03-15', gender: 'Male', blood_type: 'A+', chronic_condition: 'Cardiac Arrhythmia', allergies: 'Penicillin', height: '175', weight: '82', documents: [{ description: 'Blood Test Results', uploaded_at: '2024-09-10', document_type: 'Lab Report' }, { description: 'ECG Report', uploaded_at: '2024-08-22', document_type: 'Cardiology' }, { description: 'Discharge Summary', uploaded_at: '2024-07-15', document_type: 'Hospital' }], vaccinations: [{ vaccine_name: 'COVID-19 (Pfizer)', date_administered: '2024-03-15', status: 'administered' }, { vaccine_name: 'Influenza', date_administered: '2024-10-01', status: 'administered' }, { vaccine_name: 'Hepatitis B', date_administered: '2023-06-20', status: 'scheduled' }] },
  { patient_first_name: 'Sarah', patient_last_name: 'Jenkins', id: 2, patient_date_of_birth: '1990-06-24', gender: 'Female', blood_type: 'O+', chronic_condition: 'Post-op Recovery', allergies: 'None', height: '163', weight: '58', documents: [{ description: 'Surgery Report', uploaded_at: '2024-09-01', document_type: 'Surgical' }, { description: 'Post-op Instructions', uploaded_at: '2024-09-02', document_type: 'Hospital' }], vaccinations: [{ vaccine_name: 'COVID-19 (Moderna)', date_administered: '2024-01-10', status: 'administered' }, { vaccine_name: 'Tetanus', date_administered: '2023-11-05', status: 'administered' }] },
  { patient_first_name: 'Robert', patient_last_name: 'Chen', id: 3, patient_date_of_birth: '1973-11-12', gender: 'Male', blood_type: 'B-', chronic_condition: 'Pulmonary Embolism', allergies: 'Aspirin', height: '180', weight: '90', documents: [{ description: 'CT Scan Report', uploaded_at: '2024-08-15', document_type: 'Radiology' }, { description: 'Coagulation Panel', uploaded_at: '2024-09-05', document_type: 'Lab Report' }], vaccinations: [{ vaccine_name: 'COVID-19 (Pfizer)', date_administered: '2024-02-20', status: 'administered' }, { vaccine_name: 'Pneumococcal', date_administered: '2024-05-12', status: 'administered' }] },
  { patient_first_name: 'Emily', patient_last_name: 'Watson', id: 4, patient_date_of_birth: '1996-10-01', gender: 'Female', blood_type: 'AB+', chronic_condition: 'Routine Monitoring', allergies: 'Latex', height: '168', weight: '60', documents: [{ description: 'Annual Checkup', uploaded_at: '2024-10-01', document_type: 'General' }, { description: 'Allergy Test', uploaded_at: '2024-06-20', document_type: 'Lab Report' }], vaccinations: [{ vaccine_name: 'COVID-19 (J&J)', date_administered: '2024-04-08', status: 'administered' }, { vaccine_name: 'HPV', date_administered: '2023-09-15', status: 'scheduled' }] },
  { patient_first_name: 'Marcus', patient_last_name: 'Lee', id: 5, patient_date_of_birth: '1951-09-18', gender: 'Male', blood_type: 'O-', chronic_condition: 'Respiratory Distress', allergies: 'Sulfa drugs', height: '172', weight: '78', documents: [{ description: 'Chest X-Ray', uploaded_at: '2024-09-18', document_type: 'Radiology' }, { description: 'Pulmonary Function', uploaded_at: '2024-09-20', document_type: 'Lab Report' }, { description: 'Oxygen Therapy Plan', uploaded_at: '2024-09-22', document_type: 'Treatment' }], vaccinations: [{ vaccine_name: 'COVID-19 (Pfizer)', date_administered: '2024-01-25', status: 'administered' }, { vaccine_name: 'Influenza', date_administered: '2024-09-20', status: 'administered' }, { vaccine_name: 'Shingles', date_administered: '2023-07-10', status: 'administered' }] },
  { patient_first_name: 'Alice', patient_last_name: 'Turner', id: 6, patient_date_of_birth: '1979-10-05', gender: 'Female', blood_type: 'A-', chronic_condition: 'Lab Results Pending', allergies: 'Codeine', height: '165', weight: '65', documents: [{ description: 'Metabolic Panel', uploaded_at: '2024-10-05', document_type: 'Lab Report' }, { description: 'Referral Letter', uploaded_at: '2024-09-30', document_type: 'General' }], vaccinations: [{ vaccine_name: 'COVID-19 (Moderna)', date_administered: '2024-03-01', status: 'administered' }, { vaccine_name: 'Tdap', date_administered: '2024-02-14', status: 'administered' }] },
];

export default function PatientFile() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState(null);
  const [editing, setEditing] = useState(false);
  const [patients, setPatients] = useState(allPatients);
  const [showDelete, setShowDelete] = useState(false);
  const [editData, setEditData] = useState({});
  const [saved, setSaved] = useState(false);
  const [viewingDoc, setViewingDoc] = useState(null);
  const [editingDoc, setEditingDoc] = useState(false);
  const [docEditData, setDocEditData] = useState({});
  const [docSaved, setDocSaved] = useState(false);

  const results = search.length > 0 ? patients.filter(p => `${p.patient_first_name} ${p.patient_last_name}`.toLowerCase().includes(search.toLowerCase())) : [];

  const handleSelect = (p) => { setSelected(p); setSearch(''); setView(null); setEditing(false); setSaved(false); };

  const handleDelete = () => {
    setPatients(prev => prev.filter(p => p.id !== selected.id));
    setSelected(null); setShowDelete(false); setView(null);
  };

  const startEdit = () => {
    setEditData({ blood_type: selected.blood_type, chronic_condition: selected.chronic_condition, allergies: selected.allergies, height: selected.height, weight: selected.weight });
    setEditing(true); setSaved(false);
  };

  const saveEdit = () => {
    setPatients(prev => prev.map(p => p.id === selected.id ? { ...p, ...editData } : p));
    setSelected({ ...selected, ...editData });
    setEditing(false); setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const viewTitle = { medical: 'Medical File', vaccinations: 'Vaccination History', documents: 'Documents' };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => { if (viewingDoc) { setViewingDoc(null); setEditingDoc(false); setDocSaved(false); } else if (view) { setView(null); setEditing(false); setSaved(false); } else if (selected) setSelected(null); else navigate('/doctor/patients'); }} className="p-2 hover:bg-[#f1f5f9] rounded-xl transition-colors">
          <ArrowLeft className="size-5 text-[#64748b]" />
        </button>
        <div>
          <h1 className="text-2xl font-extrabold text-[#171c1f] tracking-tight">
            {viewingDoc ? viewingDoc.description : view ? viewTitle[view] : selected ? 'Patient Options' : 'Patient File Lookup'}
          </h1>
          <p className="text-sm text-[#64748b]">{selected ? `${selected.patient_first_name} ${selected.patient_last_name}` + ' — ' + selected.id : 'Search for a patient by name'}</p>
        </div>
      </div>

      {/* Search */}
      {!selected && (
        <div className="max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#94a3b8]" />
            <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Type patient name to search..." className="w-full bg-white border-2 border-[#e2e8f0] rounded-2xl pl-12 pr-4 py-4 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#0ea5e9]/10 focus:border-[#0ea5e9] transition-all" autoFocus />
          </div>
          {results.length > 0 && (
            <div className="mt-3 bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-lg">
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

      {/* Patient Options */}
      {selected && !view && (
        <div className="max-w-xl space-y-3">
          <button onClick={() => setView('medical')} className="w-full flex items-center gap-4 bg-white border border-[#e2e8f0] rounded-2xl p-5 hover:shadow-md hover:border-[#0ea5e9]/40 transition-all group text-left">
            <div className="size-12 rounded-xl bg-[#e0f2fe] flex items-center justify-center shrink-0"><FileText className="size-6 text-[#0369a1]" /></div>
            <div className="flex-1"><p className="font-bold text-[#171c1f] group-hover:text-[#0369a1] transition-colors">Medical File</p><p className="text-xs text-[#64748b]">View or modify the patient's medical record</p></div>
            <ChevronRight className="size-5 text-[#94a3b8]" />
          </button>
          <button onClick={() => setView('vaccinations')} className="w-full flex items-center gap-4 bg-white border border-[#e2e8f0] rounded-2xl p-5 hover:shadow-md hover:border-[#0ea5e9]/40 transition-all group text-left">
            <div className="size-12 rounded-xl bg-[#ecfdf5] flex items-center justify-center shrink-0"><Syringe className="size-6 text-[#059669]" /></div>
            <div className="flex-1"><p className="font-bold text-[#171c1f] group-hover:text-[#059669] transition-colors">Vaccination History</p><p className="text-xs text-[#64748b]">View the patient's vaccination records</p></div>
            <ChevronRight className="size-5 text-[#94a3b8]" />
          </button>
          <button onClick={() => setView('documents')} className="w-full flex items-center gap-4 bg-white border border-[#e2e8f0] rounded-2xl p-5 hover:shadow-md hover:border-[#0ea5e9]/40 transition-all group text-left">
            <div className="size-12 rounded-xl bg-[#fef3c7] flex items-center justify-center shrink-0"><FolderOpen className="size-6 text-[#d97706]" /></div>
            <div className="flex-1"><p className="font-bold text-[#171c1f] group-hover:text-[#d97706] transition-colors">Documents</p><p className="text-xs text-[#64748b]">View or modify the patient's documents</p></div>
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
        <div className="max-w-2xl space-y-4">
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
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 space-y-5">
            <div className="flex items-center gap-4 pb-4 border-b border-[#f1f5f9]">
              <div className="size-14 rounded-full bg-gradient-to-br from-[#006591] to-[#0ea5e9] flex items-center justify-center text-white text-lg font-bold">{selected.patient_first_name[0] + selected.patient_last_name[0]}</div>
              <div><p className="font-bold text-lg text-[#171c1f]">{selected.patient_first_name} {selected.patient_last_name}</p><p className="text-sm text-[#64748b]">{selected.id} • DOB {selected.patient_date_of_birth}</p></div>
            </div>
            {[
              { label: 'Height (cm)', key: 'height' },
              { label: 'Weight (kg)', key: 'weight' },
              { label: 'Blood Type', key: 'blood_type' },
              { label: 'Chronic Condition', key: 'chronic_condition' },
              { label: 'Known Allergies', key: 'allergies' },
            ].map(field => (
              <div key={field.key}>
                <label className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">{field.label}</label>
                {editing ? (
                  <input value={editData[field.key] || ''} onChange={e => setEditData({ ...editData, [field.key]: e.target.value })} className="mt-1 w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]" />
                ) : (
                  <p className="mt-1 text-sm font-semibold text-[#171c1f]">{selected[field.key]}</p>
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
          </div>
        </div>
      )}

      {/* Vaccination History */}
      {selected && view === 'vaccinations' && (
        <div className="max-w-2xl">
          <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#f1f5f9] bg-[#f8fafc]">
              <div className="grid grid-cols-3 text-xs font-bold text-[#94a3b8] uppercase tracking-wider">
                <span>Vaccine</span><span>Date</span><span>Status</span>
              </div>
            </div>
            {selected.vaccinations.map((v, i) => (
              <div key={i} className="px-6 py-4 border-b last:border-0 border-[#f1f5f9] grid grid-cols-3 items-center">
                <span className="text-sm font-semibold text-[#171c1f]">{v.vaccine_name}</span>
                <span className="text-sm text-[#64748b]">{v.date_administered}</span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full w-fit ${v.status === 'administered' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{v.status}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Documents */}
      {selected && view === 'documents' && !viewingDoc && (
        <div className="max-w-2xl">
          <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#f1f5f9] bg-[#f8fafc]">
              <div className="grid grid-cols-3 text-xs font-bold text-[#94a3b8] uppercase tracking-wider">
                <span>Document</span><span>Date</span><span>Actions</span>
              </div>
            </div>
            {selected.documents.map((doc, i) => (
              <div key={i} className="px-6 py-4 border-b last:border-0 border-[#f1f5f9] grid grid-cols-3 items-center">
                <div>
                  <span className="text-sm font-semibold text-[#171c1f]">{doc.description}</span>
                  <p className="text-[10px] text-[#94a3b8]">{doc.document_type}</p>
                </div>
                <span className="text-sm text-[#64748b]">{doc.uploaded_at}</span>
                <div className="flex gap-2">
                  <button onClick={() => { setViewingDoc(doc); setEditingDoc(false); setDocSaved(false); }} className="flex items-center gap-1 px-3 py-1.5 bg-[#e0f2fe] text-[#0369a1] rounded-lg text-xs font-bold hover:bg-[#bae6fd] transition-colors"><Eye className="size-3" /> View</button>
                  <button onClick={() => { setViewingDoc(doc); setEditingDoc(true); setDocEditData({ description: doc.description, document_type: doc.document_type, uploaded_at: doc.uploaded_at }); setDocSaved(false); }} className="flex items-center gap-1 px-3 py-1.5 bg-amber-100 text-amber-700 rounded-lg text-xs font-bold hover:bg-amber-200 transition-colors"><Pencil className="size-3" /> Modify</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Document Detail View */}
      {selected && view === 'documents' && viewingDoc && (
        <div className="max-w-2xl space-y-4">
          <div className="flex gap-3">
            {!editingDoc ? (
              <>
                <button onClick={() => { setEditingDoc(true); setDocEditData({ description: viewingDoc.description, document_type: viewingDoc.document_type, uploaded_at: viewingDoc.uploaded_at }); setDocSaved(false); }} className="flex items-center gap-2 px-5 py-2.5 bg-amber-100 text-amber-700 rounded-xl font-semibold text-sm hover:bg-amber-200 transition-colors"><Pencil className="size-4" /> Modify</button>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#e0f2fe] text-[#0369a1] rounded-xl font-semibold text-sm"><Eye className="size-4" /> Viewing</button>
              </>
            ) : (
              <button onClick={() => setEditingDoc(false)} className="flex items-center gap-2 px-5 py-2.5 bg-[#f1f5f9] text-[#64748b] rounded-xl font-semibold text-sm hover:bg-[#e2e8f0] transition-colors">Cancel</button>
            )}
          </div>
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 space-y-5">
            {[
              { label: 'Description', key: 'description' },
              { label: 'Document Type', key: 'document_type' },
              { label: 'Uploaded At', key: 'uploaded_at' },
            ].map(field => (
              <div key={field.key}>
                <label className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">{field.label}</label>
                {editingDoc ? (
                  <input value={docEditData[field.key] || ''} onChange={e => setDocEditData({ ...docEditData, [field.key]: e.target.value })} className="mt-1 w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]" />
                ) : (
                  <p className="mt-1 text-sm font-semibold text-[#171c1f]">{viewingDoc[field.key]}</p>
                )}
              </div>
            ))}
            <div>
              <label className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">Content</label>
              <div className="mt-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4 text-sm text-[#475569] min-h-[120px]">
                <p>Document content for <strong>{viewingDoc.description}</strong> — {viewingDoc.document_type}</p>
                <p className="mt-2 text-[#94a3b8]">Patient: {selected.patient_first_name} {selected.patient_last_name} ({selected.id})</p>
                <p className="text-[#94a3b8]">Date: {viewingDoc.uploaded_at}</p>
              </div>
            </div>
            {editingDoc && (
              <div className="pt-4 border-t border-[#f1f5f9]">
                <button onClick={() => { setViewingDoc({ ...viewingDoc, ...docEditData }); setEditingDoc(false); setDocSaved(true); setTimeout(() => setDocSaved(false), 3000); }} className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-xl transition-all">
                  Save Changes
                </button>
              </div>
            )}
            {docSaved && (
              <div className="flex items-center gap-2 py-3 px-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                <CheckCircle2 className="size-5 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">Document changes saved successfully!</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDelete && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-slate-200">
            <div className="size-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4"><Trash2 className="size-8 text-red-600" /></div>
            <h3 className="text-xl font-bold text-slate-900 text-center mb-2">Delete Patient?</h3>
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

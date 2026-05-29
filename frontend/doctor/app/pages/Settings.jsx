import { User, Shield, Fingerprint, Monitor, Upload, ArrowLeft, Save, Key, Globe, Bell } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function Settings() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('profile');

  const sections = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'devices', label: 'Devices', icon: Monitor },
  ];

  const devices = [
    { name: 'MacBook Pro — Chrome', location: 'Casablanca, Morocco', lastActive: 'Active now', current: true },
    { name: 'iPhone 15 — Safari', location: 'Casablanca, Morocco', lastActive: '2 hours ago', current: false },
    { name: 'iPad Air — Arcio App', location: 'Hospital Network', lastActive: 'Yesterday', current: false },
  ];

  const certifications = [
    { name: 'HIPAA Compliance', status: 'Verified', date: 'Valid until Dec 2026' },
    { name: 'Board Certification', status: 'Active', date: 'Renewed Jan 2026' },
    { name: 'DEA Registration', status: 'Active', date: 'Valid until Aug 2027' },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/doctor')} className="p-2 hover:bg-[#f1f5f9] rounded-xl transition-colors"><ArrowLeft className="size-5 text-[#64748b]" /></button>
          <div>
            <h1 className="text-2xl font-extrabold text-[#171c1f] tracking-tight">Settings</h1>
            <p className="text-sm text-[#64748b]">Account configuration & security</p>
          </div>
        </div>
        <button className="px-5 py-2.5 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl font-semibold text-sm shadow-lg shadow-cyan-500/20 flex items-center gap-2">
          <Save className="size-4" /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Section Nav */}
        <div className="space-y-2">
          {sections.map(s => (
            <button key={s.id} onClick={() => setActiveSection(s.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeSection === s.id ? 'bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white shadow-lg' : 'text-[#64748b] hover:bg-[#f1f5f9]'}`}>
              <s.icon className="size-4" />{s.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeSection === 'profile' && (
            <>
              {/* Profile Card */}
              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
                <h3 className="font-bold text-[#171c1f] mb-6">Personal Information</h3>
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative">
                    <div className="size-20 rounded-2xl bg-gradient-to-br from-[#006591] to-[#0ea5e9] flex items-center justify-center text-white text-2xl font-bold">DA</div>
                    <button className="absolute -bottom-1 -right-1 size-7 bg-white border border-[#e2e8f0] rounded-full flex items-center justify-center shadow-sm hover:shadow-md">
                      <Upload className="size-3.5 text-[#64748b]" />
                    </button>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#171c1f]">Dr. Arcio</h4>
                    <p className="text-sm text-[#64748b]">Senior Physician — Cardiology</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: 'Full Name', value: 'Dr. Arcio Rahman' },
                    { label: 'Email', value: 'dr.arcio@hospital.org' },
                    { label: 'Phone', value: '+212 600 123 456' },
                    { label: 'Address', value: 'Casablanca, Morocco' },
                    { label: 'Service', value: 'Cardiology' },
                    { label: 'Grade', value: 'Specialist' },
                  ].map((field, i) => (
                    <div key={i}>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-1.5 block">{field.label}</label>
                      <input type="text" defaultValue={field.value} className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-sm text-[#171c1f] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Digital Signature */}
              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
                <h3 className="font-bold text-[#171c1f] mb-4">Digital Signature</h3>
                <div className="border-2 border-dashed border-[#e2e8f0] rounded-xl p-8 text-center hover:border-[#0ea5e9] transition-colors cursor-pointer">
                  <Upload className="size-8 text-[#94a3b8] mx-auto mb-2" />
                  <p className="text-sm text-[#64748b]">Upload signature image or draw</p>
                  <p className="text-xs text-[#94a3b8] mt-1">PNG, SVG up to 2MB</p>
                </div>
              </div>
            </>
          )}

          {activeSection === 'security' && (
            <>
              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
                <h3 className="font-bold text-[#171c1f] mb-6">Security Settings</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Biometric Authentication', desc: 'Use fingerprint or face ID for login', icon: Fingerprint, enabled: true },
                    { label: 'Two-Factor Authentication', desc: 'Add extra security with 2FA', icon: Key, enabled: true },
                    { label: 'Auto-sync Patient Data', desc: 'Keep records synchronized', icon: Globe, enabled: false },
                    { label: 'Privacy Mode', desc: 'Hide sensitive data on screen', icon: Shield, enabled: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-[#f8fafc]">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-xl bg-[#e0f2fe] flex items-center justify-center">
                          <item.icon className="size-5 text-[#0369a1]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#171c1f]">{item.label}</p>
                          <p className="text-xs text-[#64748b]">{item.desc}</p>
                        </div>
                      </div>
                      <div className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors ${item.enabled ? 'bg-[#0ea5e9]' : 'bg-[#d1d5db]'}`}>
                        <div className={`absolute top-0.5 size-5 bg-white rounded-full shadow-sm transition-transform ${item.enabled ? 'right-0.5' : 'left-0.5'}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
                <h3 className="font-bold text-[#171c1f] mb-4">Certifications & Compliance</h3>
                <div className="space-y-3">
                  {certifications.map((c, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-[#f8fafc] transition-colors">
                      <div>
                        <p className="text-sm font-semibold text-[#171c1f]">{c.name}</p>
                        <p className="text-xs text-[#64748b]">{c.date}</p>
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">{c.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeSection === 'notifications' && (
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
              <h3 className="font-bold text-[#171c1f] mb-6">Notification Preferences</h3>
              <div className="space-y-4">
                {[
                  { label: 'Patient Alerts', desc: 'Critical vitals and status changes', enabled: true },
                  { label: 'Lab Results', desc: 'When new results are available', enabled: true },
                  { label: 'Appointment Reminders', desc: '30 min before scheduled visits', enabled: true },
                  { label: 'System Updates', desc: 'Maintenance and feature announcements', enabled: false },
                  { label: 'Email Digest', desc: 'Daily summary of all notifications', enabled: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-[#f8fafc]">
                    <div><p className="text-sm font-semibold text-[#171c1f]">{item.label}</p><p className="text-xs text-[#64748b]">{item.desc}</p></div>
                    <div className={`w-11 h-6 rounded-full relative cursor-pointer ${item.enabled ? 'bg-[#0ea5e9]' : 'bg-[#d1d5db]'}`}>
                      <div className={`absolute top-0.5 size-5 bg-white rounded-full shadow-sm ${item.enabled ? 'right-0.5' : 'left-0.5'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'devices' && (
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
              <h3 className="font-bold text-[#171c1f] mb-6">Active Devices</h3>
              <div className="space-y-3">
                {devices.map((d, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-[#f8fafc]">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-[#e0f2fe] flex items-center justify-center"><Monitor className="size-5 text-[#0369a1]" /></div>
                      <div>
                        <p className="text-sm font-semibold text-[#171c1f]">{d.name}</p>
                        <p className="text-xs text-[#64748b]">{d.location} • {d.lastActive}</p>
                      </div>
                    </div>
                    {d.current ? (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">Current</span>
                    ) : (
                      <button className="text-xs font-bold text-red-500 hover:underline">Revoke</button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

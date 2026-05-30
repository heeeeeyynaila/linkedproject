import { User, Shield, Fingerprint, Monitor, Upload, ArrowLeft, Save, Key, Globe, Bell, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import api from '@/services/api';
import { useToast } from '@/components/Toast';

export default function Settings() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [activeSection, setActiveSection] = useState('profile');
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSavingPassword, setIsSavingPassword] = useState(false);

  const [securitySwitches, setSecuritySwitches] = useState({
    'Biometric Authentication': true,
    'Two-Factor Authentication': true,
    'Auto-sync Patient Data': false,
    'Privacy Mode': false,
  });

  const [notificationSwitches, setNotificationSwitches] = useState({
    'Patient Alerts': true,
    'Lab Results': true,
    'Appointment Reminders': true,
    'System Updates': false,
    'Email Digest': false,
  });

  const profileInputRef = useRef(null);
  const signatureInputRef = useRef(null);
  const [isUploadingProfile, setIsUploadingProfile] = useState(false);
  const [isUploadingSignature, setIsUploadingSignature] = useState(false);

  const handleProfileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploadingProfile(true);
    try {
      const formData = new FormData();
      formData.append('profile_picture', file);
      const res = await api.auth.uploadDoctorImages(formData);
      setProfile(prev => ({
        ...prev,
        profile_picture: res.profile_picture
      }));
      showToast('Profile picture updated successfully!', 'success');
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Failed to upload profile picture', 'error');
    } finally {
      setIsUploadingProfile(false);
    }
  };

  const handleSignatureUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploadingSignature(true);
    try {
      const formData = new FormData();
      formData.append('signature', file);
      const res = await api.auth.uploadDoctorImages(formData);
      setProfile(prev => ({
        ...prev,
        signature: res.signature
      }));
      showToast('Signature updated successfully!', 'success');
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Failed to upload signature', 'error');
    } finally {
      setIsUploadingSignature(false);
    }
  };

  useEffect(() => {
    async function fetchProfile() {
      try {
        setIsLoading(true);
        const data = await api.auth.me();
        setProfile(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        showToast('Error loading profile details', 'error');
      }
    }
    fetchProfile();
  }, [showToast]);

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center justify-center p-8">
        <Loader2 className="size-12 text-[#0ea5e9] animate-spin mb-4" />
        <p className="text-[#64748b] font-medium">Loading settings...</p>
      </div>
    );
  }

  const initials = profile?.full_name 
    ? profile.full_name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() 
    : 'DR';

  const shortName = profile?.full_name 
    ? `Dr. ${profile.full_name.replace('Dr. ', '')}` 
    : 'Doctor';

  const profileFields = [
    { label: 'Full Name', value: profile?.full_name || '' },
    { label: 'Email', value: profile?.email || '' },
    { label: 'Phone', value: profile?.phone || 'Not provided' },
    { label: 'Address', value: profile?.address || 'Not provided' },
    { label: 'Service', value: profile?.service || 'N/A' },
    { label: 'Grade', value: profile?.grade || 'N/A' },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/doctor')} className="p-2 hover:bg-[#f1f5f9] rounded-xl transition-colors"><ArrowLeft className="size-5 text-[#64748b]" /></button>
          <div>
            <h1 className="text-2xl font-extrabold text-[#171c1f] tracking-tight font-[Manrope]">Settings</h1>
            <p className="text-sm text-[#64748b]">Account configuration & security</p>
          </div>
        </div>
        <button 
          onClick={() => showToast('Changes saved successfully', 'success')}
          className="px-5 py-2.5 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl font-semibold text-sm shadow-lg shadow-cyan-500/20 flex items-center gap-2"
        >
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
              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-sm">
                <h3 className="font-bold text-[#171c1f] mb-6">Personal Information</h3>
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative">
                    {profile?.profile_picture ? (
                      <img 
                        src={profile.profile_picture} 
                        alt="Profile" 
                        className="size-20 rounded-2xl object-cover border border-[#e2e8f0]" 
                      />
                    ) : (
                      <div className="size-20 rounded-2xl bg-gradient-to-br from-[#006591] to-[#0ea5e9] flex items-center justify-center text-white text-2xl font-bold font-[Inter]">{initials}</div>
                    )}
                    <button 
                      onClick={() => profileInputRef.current?.click()}
                      disabled={isUploadingProfile}
                      className="absolute -bottom-1 -right-1 size-7 bg-white border border-[#e2e8f0] rounded-full flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {isUploadingProfile ? (
                        <Loader2 className="size-3.5 text-[#64748b] animate-spin" />
                      ) : (
                        <Upload className="size-3.5 text-[#64748b]" />
                      )}
                    </button>
                    <input 
                      type="file" 
                      ref={profileInputRef} 
                      className="hidden" 
                      accept="image/*" 
                      onChange={handleProfileUpload} 
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#171c1f]">{shortName}</h4>
                    <p className="text-sm text-[#64748b]">{profile?.grade || 'Physician'} — {profile?.service || 'Clinical Sanctuary'}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {profileFields.map((field, i) => (
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
                <div 
                  onClick={() => signatureInputRef.current?.click()}
                  className="border-2 border-dashed border-[#e2e8f0] rounded-xl p-8 text-center hover:border-[#0ea5e9] transition-colors cursor-pointer relative overflow-hidden group min-h-[160px] flex flex-col justify-center items-center"
                >
                  {isUploadingSignature ? (
                    <Loader2 className="size-8 text-[#0ea5e9] animate-spin mb-2" />
                  ) : profile?.signature ? (
                    <div className="space-y-2">
                      <img 
                        src={profile.signature} 
                        alt="Signature" 
                        className="max-h-24 object-contain mx-auto" 
                      />
                      <p className="text-xs text-[#64748b] group-hover:text-[#0ea5e9] font-medium">Click to upload a new signature</p>
                    </div>
                  ) : (
                    <>
                      <Upload className="size-8 text-[#94a3b8] mx-auto mb-2 group-hover:text-[#0ea5e9] transition-colors" />
                      <p className="text-sm text-[#64748b]">Upload signature image or draw</p>
                      <p className="text-xs text-[#94a3b8] mt-1">PNG, SVG up to 2MB</p>
                    </>
                  )}
                  <input 
                    type="file" 
                    ref={signatureInputRef} 
                    className="hidden" 
                    accept="image/*" 
                    onChange={handleSignatureUpload} 
                  />
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
                    { label: 'Biometric Authentication', desc: 'Use fingerprint or face ID for login', icon: Fingerprint },
                    { label: 'Two-Factor Authentication', desc: 'Add extra security with 2FA', icon: Key },
                    { label: 'Auto-sync Patient Data', desc: 'Keep records synchronized', icon: Globe },
                    { label: 'Privacy Mode', desc: 'Hide sensitive data on screen', icon: Shield },
                  ].map((item, i) => {
                    const isEnabled = securitySwitches[item.label];
                    return (
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
                        <div 
                          onClick={() => {
                            setSecuritySwitches(prev => ({ ...prev, [item.label]: !prev[item.label] }));
                            showToast(`${item.label} toggled!`, 'success');
                          }}
                          className={`w-11 h-6 rounded-full relative cursor-pointer transition-all ${isEnabled ? 'bg-[#0ea5e9]' : 'bg-[#d1d5db]'}`}
                        >
                          <div className={`absolute top-0.5 size-5 bg-white rounded-full shadow-sm transition-transform ${isEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Change Password */}
              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 space-y-4">
                <h3 className="font-bold text-[#171c1f]">Update Security Password</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-1.5 block">Current Password</label>
                    <input 
                      type="password" 
                      value={oldPassword} 
                      onChange={(e) => setOldPassword(e.target.value)} 
                      placeholder="••••••••••••" 
                      className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-sm text-[#171c1f] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-1.5 block">New Password</label>
                    <input 
                      type="password" 
                      value={newPassword} 
                      onChange={(e) => setNewPassword(e.target.value)} 
                      placeholder="••••••••••••" 
                      className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-sm text-[#171c1f] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-1.5 block">Confirm New Password</label>
                    <input 
                      type="password" 
                      value={confirmPassword} 
                      onChange={(e) => setConfirmPassword(e.target.value)} 
                      placeholder="••••••••••••" 
                      className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-sm text-[#171c1f] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]" 
                    />
                  </div>
                  <button 
                    disabled={isSavingPassword || !oldPassword || !newPassword || !confirmPassword}
                    onClick={async () => {
                      if (newPassword !== confirmPassword) {
                        showToast('New passwords do not match', 'error');
                        return;
                      }
                      try {
                        setIsSavingPassword(true);
                        await api.auth.changePassword({ old_password: oldPassword, new_password: newPassword });
                        showToast('Password changed successfully!', 'success');
                        setOldPassword('');
                        setNewPassword('');
                        setConfirmPassword('');
                      } catch (err) {
                        showToast(err?.message || 'Error changing password', 'error');
                      } finally {
                        setIsSavingPassword(false);
                      }
                    }}
                    className="w-full py-3 bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 font-[Manrope]"
                  >
                    {isSavingPassword ? <Loader2 className="size-4 animate-spin" /> : 'Update Password'}
                  </button>
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
                  { label: 'Patient Alerts', desc: 'Critical vitals and status changes' },
                  { label: 'Lab Results', desc: 'When new results are available' },
                  { label: 'Appointment Reminders', desc: '30 min before scheduled visits' },
                  { label: 'System Updates', desc: 'Maintenance and feature announcements' },
                  { label: 'Email Digest', desc: 'Daily summary of all notifications' },
                ].map((item, i) => {
                  const isEnabled = notificationSwitches[item.label];
                  return (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-[#f8fafc]">
                      <div>
                        <p className="text-sm font-semibold text-[#171c1f]">{item.label}</p>
                        <p className="text-xs text-[#64748b]">{item.desc}</p>
                      </div>
                      <div 
                        onClick={() => {
                          setNotificationSwitches(prev => ({ ...prev, [item.label]: !prev[item.label] }));
                          showToast(`${item.label} preference updated!`, 'success');
                        }}
                        className={`w-11 h-6 rounded-full relative cursor-pointer transition-all ${isEnabled ? 'bg-[#0ea5e9]' : 'bg-[#d1d5db]'}`}
                      >
                        <div className={`absolute top-0.5 size-5 bg-white rounded-full shadow-sm transition-transform ${isEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                      </div>
                    </div>
                  );
                })}
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

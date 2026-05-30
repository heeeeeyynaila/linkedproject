import { useNavigate } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Upload, Minus, Heart, ChevronDown, X, Activity, LayoutDashboard, Settings, Baby, Bell } from 'lucide-react';
import api from '@/services/api';

const specialties = ['Pulmonologie', 'Hämatologie', 'Nephrologie', 'Kardiologie', 'Neurologie'];
const experts = ['Dr. Miller', 'Dr. Jenkins', 'Dr. Chen', 'Dr. Watson'];

const allServices = [
  { name: 'Pediatric Pulmonology', desc: 'Care for children with breathing problems, lung diseases, and sleep disorders.' },
  { name: 'Pediatric Hematology', desc: 'Treatment for blood disorders, including anemia and bleeding disorders.' },
  { name: 'Pediatric Nephrology', desc: 'Expert care for kidney and urinary tract diseases in children.' },
  { name: 'Pediatric Cardiology', desc: 'Comprehensive heart care, from murmurs to congenital heart defects.' },
  { name: 'Pediatric Neurology', desc: 'Care for children with nervous system, brain, and spinal cord disorders.' },
  { name: 'General Pediatrics', desc: 'Routine checkups, vaccinations, and preventive care.' },
  { name: 'Pediatric Emergency', desc: '24/7 urgent care for acute illnesses and injuries.' },
  { name: 'Neonatology', desc: 'Specialized care for premature and high-risk infants.' },
];

const roles = [
  {
    id: 'patient',
    label: 'Patient Portal',
    subtitle: 'Your child\'s health, your way',
    description: 'Book pediatric appointments, view medical records, track vaccinations, and stay connected with your child\'s care team.',
    path: '/login/patient',
    icon: <Heart className="w-8 h-8 text-[#0891b2]" />,
    color: '#0891b2',
    bg: 'bg-[#ecfeff]',
    border: 'border-[#a5f3fc]',
  },
  {
    id: 'doctor',
    label: 'Doctor Portal',
    subtitle: 'Pediatric excellence',
    description: 'Manage young patients, review analytics, coordinate with departments, and deliver world-class pediatric healthcare.',
    path: '/login/doctor',
    icon: <Activity className="w-8 h-8 text-[#059669]" />,
    color: '#059669',
    bg: 'bg-[#ecfdf5]',
    border: 'border-[#a7f3d0]',
  },
  {
    id: 'admin',
    label: 'Admin Portal',
    subtitle: 'System control',
    description: 'Oversee operations, manage staff, configure system settings, and access comprehensive reports.',
    path: '/login/admin',
    icon: <Settings className="w-8 h-8 text-[#6d28d9]" />,
    color: '#6d28d9',
    bg: 'bg-[#f5f3ff]',
    border: 'border-[#ddd6fe]',
  }
];

function PublicNotificationsBell() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const bellRef = useRef(null);

  useEffect(() => {
    async function loadAnnouncements() {
      try {
        const data = await api.announcements.list();
        setAnnouncements(data || []);
      } catch (err) {
        console.error('Failed to load announcements:', err);
      }
    }
    loadAnnouncements();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (bellRef.current && !bellRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={bellRef}>
      <button 
        onClick={() => setShowNotifications(!showNotifications)}
        className={`p-2.5 rounded-full transition-all relative border border-[#e5e7eb] ${showNotifications ? 'bg-[#0ea5e9]/10 text-[#0ea5e9]' : 'hover:bg-gray-50 text-[#64748b]'}`}
      >
        <Bell className="size-5" />
        {announcements.length > 0 && (
          <span className="absolute top-2 right-2 size-2 bg-[#dc2626] border-2 border-white rounded-full animate-pulse"></span>
        )}
      </button>

      {showNotifications && (
        <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-[#e2e8f0] overflow-hidden animate-in fade-in zoom-in duration-200 z-50">
          <div className="p-4 border-b border-[#e2e8f0] flex items-center justify-between bg-[#f8fafc]">
            <h3 className="font-bold text-[#171c1f] text-sm">Clinic Announcements</h3>
            <span className="text-[10px] font-bold text-[#0891b2] uppercase tracking-wider bg-[#0891b2]/10 px-2 py-0.5 rounded-full">
              {announcements.length} Notice{announcements.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {announcements.length === 0 ? (
              <div className="p-8 text-center text-xs text-[#94a3b8]">
                No public announcements at this time.
              </div>
            ) : (
              announcements.map((ann, idx) => (
                <div key={ann.id || idx} className="p-4 border-b border-[#f1f5f9] last:border-0 hover:bg-[#f8fafc] transition-colors group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-[#0891b2] bg-[#ecfeff]">
                      Notice
                    </span>
                    <span className="text-[10px] text-[#94a3b8]">
                      {ann.published_at ? new Date(ann.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : "Just now"}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#171c1f] group-hover:text-[#0891b2] transition-colors line-clamp-2">{ann.title}</h4>
                  <p className="text-xs text-[#64748b] mt-1 line-clamp-2">{ann.content}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Landing() {
  const navigate = useNavigate();
  const [selectedSpecialty, setSelectedSpecialty] = useState('Pulmonologie');
  const [selectedExpert, setSelectedExpert] = useState('Dr. Miller');
  const [selectedDate, setSelectedDate] = useState('2024-10-24');

  const [showLogin, setShowLogin] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full opacity-30" 
          style={{ 
            backgroundImage: 'url(/hero-bg.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      {/* Navigation */}
      <header className="relative z-10 flex items-center justify-between px-10 lg:px-16 py-6">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowLogin(false)}>
          <img src="/logo.png" alt="Arcio Logo" className="h-10 object-contain rounded" />
          <span className="text-xl font-extrabold text-[#1a1a2e] tracking-tight">Arcio</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" onClick={(e) => { e.preventDefault(); setShowLogin(false); setShowServices(false); }} className="text-sm font-medium text-[#4a4a5a] hover:text-[#0891b2] transition-colors">Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setShowServices(true); }} className="text-sm font-medium text-[#4a4a5a] hover:text-[#0891b2] transition-colors">Services</a>
          <a href="#" className="text-sm font-medium text-[#4a4a5a] hover:text-[#0891b2] transition-colors">About</a>
          <a href="#" className="text-sm font-medium text-[#4a4a5a] hover:text-[#0891b2] transition-colors">Contact</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <PublicNotificationsBell />

          {!showLogin ? (
            <button
              onClick={() => setShowLogin(true)}
              className="px-7 py-2.5 bg-[#0891b2] text-white rounded-full text-sm font-semibold hover:bg-[#0e7490] transition-all shadow-md shadow-[#0891b2]/20"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => setShowLogin(false)}
              className="px-7 py-2.5 bg-white border border-[#e5e7eb] text-[#4a4a5a] rounded-full text-sm font-semibold hover:bg-gray-50 transition-all"
            >
              Back to Home
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center px-10 lg:px-16 pb-16">
        {showLogin ? (
          <div className="w-full max-w-6xl mx-auto py-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a2e] tracking-tight mb-4">
                Welcome to Arcio
              </h2>
              <p className="text-lg text-[#6b7280]">Select your portal to continue</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => navigate(role.path)}
                  className={`group relative flex flex-col items-center text-center p-8 rounded-3xl border-2 ${role.border} ${role.bg} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className="mb-6 p-4 rounded-full bg-white shadow-sm border border-black/5 group-hover:scale-110 transition-transform duration-300">
                    {role.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">{role.label}</h3>
                  <p className="text-sm font-semibold mb-4" style={{ color: role.color }}>{role.subtitle}</p>
                  <p className="text-[#4b5563] text-sm leading-relaxed">{role.description}</p>
                  
                  <div className="mt-8 flex items-center justify-center gap-2 text-sm font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" style={{ color: role.color }}>
                    Access Portal <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-xl animate-in fade-in slide-in-from-left-8 duration-700">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="size-2 rounded-full bg-[#0891b2]" />
              <span className="text-xs font-bold text-[#0891b2] uppercase tracking-[0.2em]">
                Trusted Pediatric Archive
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
              <span className="text-[#1a1a2e]">Your Health,</span>
              <br />
              <span className="text-[#0891b2]">Our Priority</span>
            </h1>

            {/* Description */}
            <p className="text-base text-[#6b7280] leading-relaxed mb-10 max-w-md">
              Compassionate care for your family. A secure, high-performance clinical archive for the next generation of pediatrics.
            </p>

            {/* Booking Form Card */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-[#f0f0f0] p-5 flex flex-wrap items-end gap-4 max-w-lg">
              {/* Specialty */}
              <div className="flex-1 min-w-[120px]">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-1 block">Specialty</label>
                <div className="relative">
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="w-full appearance-none bg-transparent text-sm font-semibold text-[#1a1a2e] pr-6 py-1 border-0 focus:outline-none cursor-pointer"
                  >
                    {specialties.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 size-4 text-[#9ca3af] pointer-events-none" />
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-10 bg-[#e5e7eb] hidden sm:block" />

              {/* Expert */}
              <div className="flex-1 min-w-[120px]">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-1 block">Expert</label>
                <div className="relative">
                  <select
                    value={selectedExpert}
                    onChange={(e) => setSelectedExpert(e.target.value)}
                    className="w-full appearance-none bg-transparent text-sm font-semibold text-[#1a1a2e] pr-6 py-1 border-0 focus:outline-none cursor-pointer"
                  >
                    {experts.map(e => <option key={e} value={e}>{e}</option>)}
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 size-4 text-[#9ca3af] pointer-events-none" />
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-10 bg-[#e5e7eb] hidden sm:block" />

              {/* Date */}
              <div className="flex-1 min-w-[120px]">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-1 block">Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-[#1a1a2e] py-1 border-0 focus:outline-none cursor-pointer"
                />
              </div>

              {/* Book Now Button */}
              <button
                onClick={() => navigate('/book-appointment')}
                className="flex items-center gap-2 px-6 py-3 bg-[#0891b2] text-white rounded-full text-sm font-bold hover:bg-[#0e7490] transition-all shadow-lg shadow-[#0891b2]/25 shrink-0"
              >
                Book Now <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Services Modal */}
      {showServices && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-4xl w-full shadow-2xl border border-gray-100 relative max-h-[80vh] overflow-y-auto">
            <button onClick={() => setShowServices(false)} className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
              <X className="size-5 text-gray-600" />
            </button>
            
            <h2 className="text-3xl font-extrabold text-[#1a1a2e] mb-2">Our Services</h2>
            <p className="text-[#6b7280] mb-8">Comprehensive pediatric care for your family.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allServices.map((service, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-gray-200 hover:border-[#0891b2] hover:shadow-md transition-all group cursor-default">
                  <div className="size-10 rounded-xl bg-[#ecfeff] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Heart className="size-5 text-[#0891b2]" />
                  </div>
                  <h3 className="font-bold text-[#1a1a2e] mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 flex items-center justify-between px-10 lg:px-16 py-6 border-t border-[#f3f4f6]">
        <span className="text-xs text-[#9ca3af]">© 2026 Arcio Clinical</span>
        <div className="flex items-center gap-6">
          {['Privacy', 'Standards', 'HIPAA Compliant'].map((item) => (
            <span key={item} className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">
              {item}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArcioLogo } from '../../../src/components/ArcioLogo';
import api from '@/services/api';

export default function PatientLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const accent = '#006591';
  const accentDark = '#004a6b';

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await api.auth.login({ email, password });
      if (response && response.access) {
        localStorage.setItem('token', response.access);
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);
        localStorage.setItem('user_role', response.role);
        localStorage.setItem('user_fullname', response.full_name);
        localStorage.setItem('user_email', email);
        setTimeout(() => navigate('/patient'), 1200);
      } else {
        setError('Login failed. Please check your credentials.');
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setError(err?.message || 'Invalid email or password');
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Inter, sans-serif',
      background: '#ffffff',
      position: 'relative', overflow: 'hidden'
    }}>
      <style>{`
        @keyframes float1 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes float2 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 50px) scale(1.1); }
          66% { transform: translate(20px, -20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes cardAppear {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* Static Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-br from-white to-[#f0f9ff]">
      </div>

      {/* Central Glass Card */}
      <div className="relative z-10 w-full max-w-[360px] bg-white/90 backdrop-blur-xl border border-[#bae6fd] rounded-[32px] p-8 shadow-[0_0_30px_rgba(8,145,178,0.2)] animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        <button onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: '#64748b', fontSize: 13, cursor: 'pointer', marginBottom: 32, width: 'fit-content', transition: 'color 0.2s', padding: 0 }}
          onMouseEnter={e => e.currentTarget.style.color = '#0f172a'}
          onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
          ← Back to portal selection
        </button>

        <div style={{ marginBottom: 24 }}>
          <ArcioLogo size="lg" subtitle="Patient Portal" />
        </div>

        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 8, color: '#0f172a' }}>Welcome back</h1>
        <p style={{ fontSize: 14, color: '#64748b', marginBottom: 32 }}>Sign in to access your health records.</p>

        {error && (
          <div style={{ color: '#ef4444', fontSize: 13, marginBottom: 16, padding: '10px 12px', background: '#fee2e2', borderRadius: 10, fontWeight: 500 }}>
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Field label="Email address" type="email" value={email} onChange={setEmail} placeholder="you@example.com" accent={accent} required />
          <PasswordField label="Password" value={password} onChange={setPassword} show={showPass} onToggle={() => setShowPass(!showPass)} accent={accent} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#475569', cursor: 'pointer', fontWeight: 500 }}>
              <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} style={{ accentColor: accent }} />
              Remember me
            </label>
            <button type="button" style={{ background: 'none', border: 'none', color: accent, fontSize: 13, cursor: 'pointer', fontWeight: 600, padding: 0 }}>
              Forgot password?
            </button>
          </div>

          <SubmitButton loading={loading} accent={accent} accentDark={accentDark} label="Sign In" />
        </form>
      </div>
    </div>
  );
}

/* ── Shared sub-components ── */
function Field({ label, type, value, onChange, placeholder, accent }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>{label}</label>
      <input
        type={type} value={value} onChange={e => onChange(e.target.value)}
        placeholder={placeholder} required
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: '100%', padding: '14px 16px', borderRadius: 14, fontSize: 14,
          background: 'rgba(255,255,255,0.7)', color: '#0f172a',
          border: `1px solid ${focused ? accent : '#bae6fd'}`,
          outline: 'none', transition: 'all 0.2s',
          boxShadow: focused ? `0 0 0 4px ${accent}30` : '0 0 12px rgba(8,145,178,0.15)',
        }}
      />
    </div>
  );
}

function PasswordField({ label, value, onChange, show, onToggle, accent }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>{label}</label>
      <div style={{ position: 'relative' }}>
        <input
          type={show ? 'text' : 'password'} value={value} onChange={e => onChange(e.target.value)}
          placeholder="••••••••" required
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{
            width: '100%', padding: '14px 44px 14px 16px', borderRadius: 14, fontSize: 14,
            background: 'rgba(255,255,255,0.7)', color: '#0f172a',
            border: `1px solid ${focused ? accent : '#bae6fd'}`,
            outline: 'none', transition: 'all 0.2s',
            boxShadow: focused ? `0 0 0 4px ${accent}30` : '0 0 12px rgba(8,145,178,0.15)',
          }}
        />
        <button type="button" onClick={onToggle} style={{
          position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
          background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: 16, padding: 0
        }}>{show ? '🙈' : '👁'}</button>
      </div>
    </div>
  );
}

function SubmitButton({ loading, accent, accentDark, label }) {
  return (
    <button type="submit" disabled={loading} style={{
      padding: '16px', borderRadius: 14, border: 'none', fontSize: 15, fontWeight: 700, cursor: loading ? 'wait' : 'pointer',
      background: `linear-gradient(135deg, ${accent}, ${accentDark})`,
      color: '#fff', marginTop: 16, transition: 'all 0.2s',
      boxShadow: `0 8px 24px ${accent}40`,
      opacity: loading ? 0.8 : 1,
    }}
    onMouseEnter={e => {
      if (!loading) {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 12px 28px ${accent}50`;
      }
    }}
    onMouseLeave={e => {
      if (!loading) {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = `0 8px 24px ${accent}40`;
      }
    }}
    >
      {loading ? '⏳ Signing in…' : label}
    </button>
  );
}

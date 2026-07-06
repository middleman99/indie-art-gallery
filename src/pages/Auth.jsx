// src/pages/Auth.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { Eye, EyeOff, Palette, ShoppingBag, Layers } from 'lucide-react'

const ROLES = [
  { value: 'buyer',  label: 'Buyer',       desc: 'Discover and collect art',              icon: ShoppingBag },
  { value: 'artist', label: 'Artist',       desc: 'Sell your original work',               icon: Palette },
  { value: 'both',   label: 'Artist + Buyer', desc: 'Buy and sell on the platform',        icon: Layers },
]

export default function Auth() {
  const [mode, setMode]       = useState('login') // 'login' | 'signup'
  const [step, setStep]       = useState(1)        // signup steps
  const [showPw, setShowPw]   = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm]       = useState({ email: '', password: '', displayName: '', role: '' })
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const { login, signup } = useAuth()
  const toast = useToast()
  const navigate = useNavigate()

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await login({ email: form.email, password: form.password })
      navigate('/')
    } catch (err) {
      toast.error(err.message.includes('invalid') ? 'Wrong email or password.' : err.message)
    } finally { setLoading(false) }
  }

  async function handleSignup(e) {
    e.preventDefault()
    if (!form.role) { toast.error('Pick a role to continue.'); return }
    if (!agreedToTerms) { toast.error('You must confirm you are 18+ and agree to the Terms to continue.'); return }
    setLoading(true)
    try {
      await signup(form)
      toast.success('Welcome to Indie Art Gallery!')
      navigate('/')
    } catch (err) {
      toast.error(err.message.includes('email-already') ? 'That email is already in use.' : err.message)
    } finally { setLoading(false) }
  }

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'var(--sp-6)', position: 'relative', overflow: 'hidden' }}>

      {/* Background art */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse at 70% 20%, rgba(255,77,77,0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(255,215,0,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 420, margin: '0 auto', width: '100%' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--sp-8)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1 }}>
            Indie<span style={{ color: 'var(--coral)' }}>Art</span>
          </div>
          <div style={{ color: 'var(--slate)', fontSize: 'var(--text-xs)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 6 }}>
            Gallery
          </div>
        </div>

        {/* Tab toggle */}
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--r-full)', padding: 4, marginBottom: 'var(--sp-6)' }}>
          {['login', 'signup'].map(m => (
            <button
              key={m}
              onClick={() => { setMode(m); setStep(1) }}
              style={{
                flex: 1, padding: '10px 0', border: 'none', cursor: 'pointer',
                borderRadius: 'var(--r-full)', fontSize: 'var(--text-sm)', fontWeight: 600,
                fontFamily: 'var(--font-body)', letterSpacing: '0.04em', textTransform: 'capitalize',
                background: mode === m ? 'var(--coral)' : 'transparent',
                color: mode === m ? '#fff' : 'var(--slate)',
                transition: 'all var(--t-fast)',
              }}
            >
              {m === 'login' ? 'Sign In' : 'Join Free'}
            </button>
          ))}
        </div>

        {/* LOGIN */}
        {mode === 'login' && (
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
            <div className="input-group">
              <label className="input-label">Email</label>
              <input className="input" type="email" placeholder="your@email.com" required
                value={form.email} onChange={e => set('email', e.target.value)} />
            </div>
            <div className="input-group">
              <label className="input-label">Password</label>
              <div style={{ position: 'relative' }}>
                <input className="input" type={showPw ? 'text' : 'password'} placeholder="••••••••" required
                  value={form.password} onChange={e => set('password', e.target.value)}
                  style={{ paddingRight: 48 }} />
                <button type="button" onClick={() => setShowPw(p => !p)}
                  style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--slate)', cursor: 'pointer' }}>
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button className="btn btn-primary btn-lg btn-full" type="submit" disabled={loading}>
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        )}

        {/* SIGNUP STEP 1 — Name + Email + Password */}
        {mode === 'signup' && step === 1 && (
          <form onSubmit={e => { e.preventDefault(); setStep(2) }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
            <div className="input-group">
              <label className="input-label">Display Name</label>
              <input className="input" type="text" placeholder="How the world knows you" required
                value={form.displayName} onChange={e => set('displayName', e.target.value)} />
            </div>
            <div className="input-group">
              <label className="input-label">Email</label>
              <input className="input" type="email" placeholder="your@email.com" required
                value={form.email} onChange={e => set('email', e.target.value)} />
            </div>
            <div className="input-group">
              <label className="input-label">Password</label>
              <div style={{ position: 'relative' }}>
                <input className="input" type={showPw ? 'text' : 'password'} placeholder="Min 8 characters" required minLength={8}
                  value={form.password} onChange={e => set('password', e.target.value)}
                  style={{ paddingRight: 48 }} />
                <button type="button" onClick={() => setShowPw(p => !p)}
                  style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--slate)', cursor: 'pointer' }}>
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button className="btn btn-primary btn-lg btn-full" type="submit">
              Continue →
            </button>
          </form>
        )}

        {/* SIGNUP STEP 2 — Role */}
        {mode === 'signup' && step === 2 && (
          <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
            <div style={{ marginBottom: 'var(--sp-2)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: 4 }}>How are you joining?</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--slate)' }}>You can always change this later.</p>
            </div>

            {ROLES.map(({ value, label, desc, icon: Icon }) => (
              <div
                key={value}
                onClick={() => set('role', value)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 'var(--sp-4)',
                  padding: 'var(--sp-4)',
                  border: `2px solid ${form.role === value ? 'var(--coral)' : 'rgba(255,248,240,0.1)'}`,
                  borderRadius: 'var(--r-md)',
                  background: form.role === value ? 'var(--coral-soft)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all var(--t-fast)',
                }}
              >
                <div style={{ width: 42, height: 42, borderRadius: 'var(--r-md)', background: form.role === value ? 'var(--coral)' : 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={20} color={form.role === value ? '#fff' : 'var(--slate)'} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{label}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>{desc}</div>
                </div>
              </div>
            ))}

            {/* Real, required consent - replaces decorative text that used to sit
                below the form and did nothing. Submit is disabled until checked. */}
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--sp-3)', cursor: 'pointer', fontSize: 'var(--text-xs)', color: 'var(--slate)', lineHeight: 1.6, marginTop: 'var(--sp-2)' }}>
              <input
                type="checkbox"
                required
                checked={agreedToTerms}
                onChange={e => setAgreedToTerms(e.target.checked)}
                style={{ width: 18, height: 18, accentColor: 'var(--coral)', cursor: 'pointer', flexShrink: 0, marginTop: 2 }}
              />
              <span>
                I confirm I am 18 years of age or older, and I agree to the{' '}
                <a href="/terms" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--coral)' }}>Terms of Service</a>
                {' '}and{' '}
                <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--coral)' }}>Privacy Policy</a>.
                All art I list must be my own original work.
              </span>
            </label>

            <div className="flex gap-3" style={{ marginTop: 'var(--sp-2)' }}>
              <button type="button" className="btn btn-ghost" onClick={() => setStep(1)} style={{ flex: 1 }}>← Back</button>
              <button type="submit" className="btn btn-primary" style={{ flex: 2 }} disabled={!form.role || !agreedToTerms || loading}>
                {loading ? 'Creating account…' : 'Create Account'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
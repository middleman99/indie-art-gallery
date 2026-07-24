// src/pages/LandingPage.jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Radio, Gavel, ShieldCheck, ArrowRight, Tag, ShoppingBag, Repeat, Coins } from 'lucide-react'

function LiveAuctionDemo() {
  const [secondsLeft, setSecondsLeft] = useState(47)
  const [bid, setBid] = useState(140)

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(s => {
        if (s <= 1) {
          setBid(b => b + 5)
          return 60
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const mins = Math.floor(secondsLeft / 60)
  const secs = secondsLeft % 60

  return (
    <div style={{
      background: 'var(--charcoal2, #16213E)',
      border: '1px solid rgba(255,215,0,0.25)',
      borderRadius: 'var(--r-lg)',
      padding: 'var(--sp-5)',
      maxWidth: 340,
      width: '100%',
      boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--sp-3)' }}>
        <span className="badge badge-live" style={{ fontSize: 10 }}>
          <span className="live-dot" style={{ width: 6, height: 6 }} /> LIVE
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 700, color: secondsLeft < 15 ? 'var(--coral)' : 'var(--gold)' }}>
          {mins}:{secs.toString().padStart(2, '0')}
        </span>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--cream)', marginBottom: 4 }}>
        "Midnight Bloom"
      </div>
      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', marginBottom: 'var(--sp-4)' }}>
        by a real independent artist, live right now
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>Current bid</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--gold)' }}>${bid}</div>
        </div>
        <div className="btn btn-gold btn-sm" style={{ pointerEvents: 'none' }}>
          <Gavel size={12} /> Bid
        </div>
      </div>
    </div>
  )
}

const ROYALTY_STAGES = [
  {
    icon: Tag,
    label: 'Artist sets a royalty',
    actor: 'Maya lists "Midnight Bloom" with a 10% resale royalty',
    detail: 'One-time setup at listing',
  },
  {
    icon: ShoppingBag,
    label: 'A buyer purchases it',
    actor: 'Jordan buys it for $300',
    detail: 'Maya gets paid, as always',
  },
  {
    icon: Repeat,
    label: 'Jordan resells it later',
    actor: 'Jordan relists it for $450',
    detail: 'The royalty travels with the piece',
  },
  {
    icon: Coins,
    label: 'Maya gets paid again',
    actor: 'automatically, no chasing anyone down',
    detail: '+$45 royalty, released with the resale payout',
  },
]

function RoyaltyFlowDemo() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setStage(s => (s + 1) % ROYALTY_STAGES.length), 2600)
    return () => clearInterval(interval)
  }, [])

  const current = ROYALTY_STAGES[stage]
  const Icon = current.icon

  return (
    <div style={{
      background: 'var(--charcoal2, #16213E)',
      border: '1px solid rgba(255,215,0,0.25)',
      borderRadius: 'var(--r-lg)',
      padding: 'var(--sp-6)',
      maxWidth: 380,
      width: '100%',
      margin: '0 auto',
      boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
      textAlign: 'center',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 'var(--sp-5)' }}>
        {ROYALTY_STAGES.map((_, i) => (
          <span
            key={i}
            style={{
              width: i === stage ? 20 : 6,
              height: 6,
              borderRadius: 999,
              background: i === stage ? 'var(--gold)' : 'rgba(255,255,255,0.15)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,215,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--sp-4)' }}>
        <Icon size={26} color="var(--gold)" />
      </div>

      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--cream)', marginBottom: 'var(--sp-2)' }}>
        {current.label}
      </div>
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--slate)', marginBottom: 'var(--sp-3)' }}>
        {current.actor}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--gold)', fontWeight: 700 }}>
        {current.detail}
      </div>
    </div>
  )
}

const STEPS = [
  {
    n: '01',
    title: 'List or go live',
    body: 'Artists list pieces for sale or start a live show and auction a piece to viewers in real time.',
  },
  {
    n: '02',
    title: 'Bid in the moment',
    body: "Buyers watch, chat, and bid live. The price moves as fast as the room does - no waiting, no algorithm.",
  },
  {
    n: '03',
    title: 'Win, pay, done',
    body: "Winning bidder pays securely, the artist ships or delivers, and payout lands after delivery is confirmed.",
  },
]

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: '100dvh', background: 'var(--charcoal)', color: 'var(--cream)' }}>

      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--sp-4) var(--sp-5)',
        maxWidth: 1100,
        margin: '0 auto',
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 700 }}>
          Indie Art Gallery
        </div>
        <button className="btn btn-ghost btn-sm" onClick={() => navigate('/auth')}>
          Sign In
        </button>
      </header>

      <section style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: 'var(--sp-8) var(--sp-5) var(--sp-10)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 'var(--sp-10)',
      }}>
        <div style={{ flex: '1 1 420px', minWidth: 280 }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            lineHeight: 1.05,
            marginBottom: 'var(--sp-4)',
          }}>
            Where art<br />goes live.
          </h1>
          <p style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--slate)',
            lineHeight: 1.6,
            marginBottom: 'var(--sp-6)',
            maxWidth: 480,
          }}>
            Independent artists auction their work live on camera. Buyers bid in real time.
            No gallery cut, no algorithm - just the room, the clock, and the art.
          </p>
          <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/auth')}>
              For Artists <ArrowRight size={16} />
            </button>
            <button className="btn btn-gold btn-lg" onClick={() => navigate('/auth')}>
              For Buyers <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div style={{ flex: '1 1 340px', display: 'flex', justifyContent: 'center', minWidth: 280 }}>
          <LiveAuctionDemo />
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: 'var(--sp-10) var(--sp-5)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--sp-8)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)' }}>How it works</h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-6)', justifyContent: 'center' }}>
          {STEPS.map(step => (
            <div key={step.n} style={{ flex: '1 1 260px', maxWidth: 320 }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                color: 'var(--coral)',
                fontWeight: 700,
                marginBottom: 'var(--sp-2)',
              }}>
                {step.n}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', marginBottom: 'var(--sp-2)' }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: 'var(--sp-10) var(--sp-5)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: 'var(--sp-10)' }}>
          <div style={{ flex: '1 1 340px', display: 'flex', justifyContent: 'center', minWidth: 280 }}>
            <RoyaltyFlowDemo />
          </div>
          <div style={{ flex: '1 1 420px', minWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 'var(--sp-3)' }}>
              <ShieldCheck size={20} color="var(--gold)" />
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Resale Royalties
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--sp-4)' }}>
              Artists get paid, again and again.
            </h2>
            <p style={{ color: 'var(--slate)', fontSize: 'var(--text-md, 1rem)', lineHeight: 1.7 }}>
              Set a resale royalty when you list. If a buyer ever resells your piece on Indie Art Gallery,
              you automatically receive your cut - every time it changes hands, not just the first sale.
              No contracts, no invoices, no chasing anyone down.
            </p>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: 'var(--sp-8) var(--sp-5) var(--sp-10)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-5)' }}>
          <div style={{
            flex: '1 1 320px',
            padding: 'var(--sp-6)',
            borderRadius: 'var(--r-lg)',
            background: 'rgba(255,77,77,0.06)',
            border: '1px solid rgba(255,77,77,0.2)',
          }}>
            <Radio size={24} color="var(--coral)" style={{ marginBottom: 'var(--sp-3)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', marginBottom: 'var(--sp-2)' }}>
              Sell your work
            </h3>
            <p style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)', marginBottom: 'var(--sp-5)', lineHeight: 1.6 }}>
              Free to list. Go live from your phone. Keep most of what you sell - no listing fees eating your margin before you've sold anything.
            </p>
            <button className="btn btn-primary" onClick={() => navigate('/auth')}>
              Start selling <ArrowRight size={16} />
            </button>
          </div>

          <div style={{
            flex: '1 1 320px',
            padding: 'var(--sp-6)',
            borderRadius: 'var(--r-lg)',
            background: 'rgba(255,215,0,0.06)',
            border: '1px solid rgba(255,215,0,0.2)',
          }}>
            <Gavel size={24} color="var(--gold)" style={{ marginBottom: 'var(--sp-3)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', marginBottom: 'var(--sp-2)' }}>
              Find something real
            </h3>
            <p style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)', marginBottom: 'var(--sp-5)', lineHeight: 1.6 }}>
              Watch the piece before you buy it. Bid live, ask the artist questions in chat, and know exactly who made what you're bringing home.
            </p>
            <button className="btn btn-gold" onClick={() => navigate('/auth')}>
              Start browsing <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <footer style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: 'var(--sp-6) var(--sp-5)',
        borderTop: '1px solid rgba(255,248,240,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 'var(--sp-3)',
      }}>
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>
          Indie Art Gallery, a Middleman Merchants LLC platform
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-4)', flexWrap: 'wrap' }}>
          <a href="/terms" style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>Terms</a>
          <a href="/privacy" style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>Privacy</a>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>
            <ShieldCheck size={13} color="var(--green-ok)" /> Payments secured by Stripe
          </span>
        </span>
      </footer>
    </div>
  )
}
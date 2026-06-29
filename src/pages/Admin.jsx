// src/pages/Admin.jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { collection, getDocs, orderBy, query, limit, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import TopBar from '../components/TopBar'
import { useToast } from '../context/ToastContext'
import { Users, ShoppingBag, DollarSign, AlertTriangle, Ban, CheckCircle, Radio } from 'lucide-react'

const DEMO_STATS = [
  { label: 'Total Users',    value: '0',   icon: Users,       color: 'var(--coral)' },
  { label: 'Active Listings',value: '0',   icon: ShoppingBag, color: 'var(--gold)' },
  { label: 'Total Revenue',  value: '$0',  icon: DollarSign,  color: 'var(--green-ok)' },
  { label: 'Flagged Users',  value: '0',   icon: AlertTriangle,color: '#FF8C00' },
]

export default function Admin() {
  const { isAdmin, profile } = useAuth()
  const navigate = useNavigate()
  const toast = useToast()
  const [tab, setTab] = useState('overview')
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (!isAdmin) navigate('/')
  }, [isAdmin])

  if (!isAdmin) return null

  return (
    <div className="page">
      <TopBar title="Admin" back />

      <div className="container" style={{ paddingTop: 'var(--sp-4)' }}>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--sp-3)', marginBottom: 'var(--sp-6)' }}>
          {DEMO_STATS.map(({ label, value, icon: Icon, color }) => (
            <div key={label} style={{ padding: 'var(--sp-4)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', marginBottom: 'var(--sp-2)' }}>
                <Icon size={14} color={color} />
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xl)', fontWeight: 700, color }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {['overview', 'users', 'listings', 'payouts'].map(t => (
            <button key={t} className={`chip ${tab === t ? 'selected' : ''}`}
              onClick={() => setTab(t)} style={{ textTransform: 'capitalize' }}>
              {t}
            </button>
          ))}
        </div>

        {tab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
            <div style={{ padding: 'var(--sp-5)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
              <h4 style={{ marginBottom: 'var(--sp-3)', display: 'flex', alignItems: 'center', gap: 8 }}><Radio size={16} color="var(--coral)" /> Live Activity</h4>
              <p style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)' }}>No shows currently live.</p>
            </div>

            <div style={{ padding: 'var(--sp-5)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
              <h4 style={{ marginBottom: 'var(--sp-3)', display: 'flex', alignItems: 'center', gap: 8 }}><ShoppingBag size={16} color="var(--gold)" /> Recent Sales</h4>
              <p style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)' }}>No sales yet.</p>
            </div>

            <div style={{ padding: 'var(--sp-5)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
              <h4 style={{ marginBottom: 'var(--sp-3)', display: 'flex', alignItems: 'center', gap: 8 }}><AlertTriangle size={16} color="#FF8C00" /> Flagged / Reports</h4>
              <p style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)' }}>No active reports.</p>
            </div>
          </div>
        )}

        {tab === 'users' && (
          <div>
            <div style={{ padding: 'var(--sp-6)', textAlign: 'center', color: 'var(--slate)' }}>
              <Users size={32} style={{ margin: '0 auto var(--sp-3)', opacity: 0.3 }} />
              <p>User list loads from Firebase when real accounts are created.</p>
            </div>
          </div>
        )}

        {tab === 'listings' && (
          <div>
            <div style={{ padding: 'var(--sp-6)', textAlign: 'center', color: 'var(--slate)' }}>
              <ShoppingBag size={32} style={{ margin: '0 auto var(--sp-3)', opacity: 0.3 }} />
              <p>All active listings will appear here.</p>
            </div>
          </div>
        )}

        {tab === 'payouts' && (
          <div>
            <div style={{ padding: 'var(--sp-6)', textAlign: 'center', color: 'var(--slate)' }}>
              <DollarSign size={32} style={{ margin: '0 auto var(--sp-3)', opacity: 0.3 }} />
              <p>Pending and completed payouts will appear here.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

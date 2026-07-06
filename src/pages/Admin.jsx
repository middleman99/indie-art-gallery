// src/pages/Admin.jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { collection, getDocs, orderBy, query, limit, doc, updateDoc, where, getCountFromServer, getAggregateFromServer, sum } from 'firebase/firestore'
import { db } from '../firebase'
import TopBar from '../components/TopBar'
import { useToast } from '../context/ToastContext'
import { Users, ShoppingBag, DollarSign, AlertTriangle, Ban, CheckCircle, Radio } from 'lucide-react'

export default function Admin() {
  const { isAdmin, profile } = useAuth()
  const navigate = useNavigate()
  const toast = useToast()
  const [tab, setTab] = useState('overview')

  const [stats, setStats] = useState({ totalUsers: '0', activeListings: '0', totalRevenue: '$0', flaggedUsers: '0' })
  const [statsLoading, setStatsLoading] = useState(true)

  const [users, setUsers] = useState([])
  const [usersLoading, setUsersLoading] = useState(false)
  const [banningId, setBanningId] = useState(null)

  const [listings, setListings] = useState([])
  const [listingsLoading, setListingsLoading] = useState(false)

  const [payoutOrders, setPayoutOrders] = useState([])
  const [payoutsLoading, setPayoutsLoading] = useState(false)
  const [refundingId, setRefundingId] = useState(null)

  const [liveShows, setLiveShows] = useState([])
  const [recentSales, setRecentSales] = useState([])

  useEffect(() => {
    if (!isAdmin) navigate('/')
  }, [isAdmin])

  // Overview stats - loaded once on mount using aggregation queries, so this reads
  // summary numbers only rather than downloading every user/listing/order document.
  useEffect(() => {
    if (!isAdmin) return
    async function loadStats() {
      setStatsLoading(true)
      // Promise.allSettled instead of Promise.all - each stat loads and displays
      // independently now. Previously, if ANY one query failed (e.g. the revenue
      // sum needing a Firestore index), Promise.all rejected the whole batch and
      // NONE of the four stats updated - even the three that had nothing wrong
      // with them. That was a real bug, not a Firestore limitation.
      const [userCountResult, listingCountResult, flaggedCountResult, revenueResult] = await Promise.allSettled([
        getCountFromServer(collection(db, 'users')),
        getCountFromServer(query(collection(db, 'listings'), where('status', '==', 'active'))),
        getCountFromServer(query(collection(db, 'users'), where('isBanned', '==', true))),
        // Revenue = sum of winningBid (the item's sale price) across orders that have
        // actually been paid - 'paid' (awaiting delivery) and 'delivered' (paid out).
        // This is gross sale price of merchandise, not including the buyer's premium
        // (a service fee on top) and not the platform's fee cut specifically.
        getAggregateFromServer(
          query(collection(db, 'orders'), where('status', 'in', ['paid', 'delivered'])),
          { total: sum('winningBid') }
        ),
      ])

      const newStats = { ...stats }
      let anyFailed = false

      if (userCountResult.status === 'fulfilled') {
        newStats.totalUsers = String(userCountResult.value.data().count)
      } else {
        console.error('Could not load total users:', userCountResult.reason)
        anyFailed = true
      }

      if (listingCountResult.status === 'fulfilled') {
        newStats.activeListings = String(listingCountResult.value.data().count)
      } else {
        console.error('Could not load active listings:', listingCountResult.reason)
        anyFailed = true
      }

      if (flaggedCountResult.status === 'fulfilled') {
        newStats.flaggedUsers = String(flaggedCountResult.value.data().count)
      } else {
        console.error('Could not load flagged users:', flaggedCountResult.reason)
        anyFailed = true
      }

      if (revenueResult.status === 'fulfilled') {
        newStats.totalRevenue = `$${(revenueResult.value.data().total || 0).toLocaleString()}`
      } else {
        console.error('Could not load total revenue:', revenueResult.reason)
        anyFailed = true
      }

      setStats(newStats)
      if (anyFailed) toast.error('Some stats could not load - check console for details.')
      setStatsLoading(false)
    }
    loadStats()
  }, [isAdmin])

  // Overview tab content - live shows + recent sales
  useEffect(() => {
    if (!isAdmin || tab !== 'overview') return
    async function loadOverviewContent() {
      try {
        const liveSnap = await getDocs(query(collection(db, 'shows'), where('status', '==', 'live')))
        setLiveShows(liveSnap.docs.map(d => ({ id: d.id, ...d.data() })))
      } catch (err) {
        console.error('Could not load live shows:', err)
      }
      try {
        const salesSnap = await getDocs(
          query(collection(db, 'orders'), where('status', 'in', ['paid', 'delivered']), orderBy('createdAt', 'desc'), limit(5))
        )
        setRecentSales(salesSnap.docs.map(d => ({ id: d.id, ...d.data() })))
      } catch (err) {
        console.error('Could not load recent sales:', err)
      }
    }
    loadOverviewContent()
  }, [isAdmin, tab])

  // Users tab - loaded lazily, only when that tab is actually opened
  useEffect(() => {
    if (!isAdmin || tab !== 'users') return
    async function loadUsers() {
      setUsersLoading(true)
      try {
        const snap = await getDocs(query(collection(db, 'users'), orderBy('createdAt', 'desc'), limit(50)))
        setUsers(snap.docs.map(d => ({ id: d.id, ...d.data() })))
      } catch (err) {
        console.error('Could not load users:', err)
        toast.error('Could not load users.')
      } finally {
        setUsersLoading(false)
      }
    }
    loadUsers()
  }, [isAdmin, tab])

  async function toggleBan(targetUser) {
    if (banningId) return
    setBanningId(targetUser.id)
    try {
      await updateDoc(doc(db, 'users', targetUser.id), { isBanned: !targetUser.isBanned })
      setUsers(list => list.map(u => u.id === targetUser.id ? { ...u, isBanned: !u.isBanned } : u))
      toast.success(targetUser.isBanned ? 'User unbanned.' : 'User banned.')
    } catch (err) {
      console.error('Could not update ban status:', err)
      toast.error('Could not update ban status.')
    } finally {
      setBanningId(null)
    }
  }

  async function handleRefund(order) {
    if (refundingId) return
    if (!order.paymentIntentId) {
      toast.error('This order has no paymentIntentId on file - cannot process a refund automatically. Handle it directly in the Stripe Dashboard.')
      return
    }
    const confirmed = window.confirm(
      `Refund $${order.winningBid} to ${order.buyerName} for "${order.pieceTitle}"?` +
      (order.status === 'delivered' ? ' This will also reverse the payout already sent to the artist.' : '') +
      ' This cannot be undone.'
    )
    if (!confirmed) return

    setRefundingId(order.id)
    try {
      const res = await fetch('/.netlify/functions/stripe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'refund_order',
          data: {
            paymentIntentId: order.paymentIntentId,
            // Only reverse a transfer if one was actually sent (order reached 'delivered').
            transferId: order.status === 'delivered' ? order.payoutTransferId : undefined,
          },
        }),
      })
      const result = await res.json()
      if (!res.ok || result.error) throw new Error(result.error || 'Refund failed')

      await updateDoc(doc(db, 'orders', order.id), { status: 'refunded' })
      setPayoutOrders(list => list.filter(o => o.id !== order.id))
      toast.success('Refund processed.')
    } catch (err) {
      console.error('Refund failed:', err)
      toast.error(err.message || 'Could not process refund.')
    } finally {
      setRefundingId(null)
    }
  }

  // Listings tab
  useEffect(() => {
    if (!isAdmin || tab !== 'listings') return
    async function loadListings() {
      setListingsLoading(true)
      try {
        const snap = await getDocs(query(collection(db, 'listings'), where('status', '==', 'active'), orderBy('createdAt', 'desc'), limit(50)))
        setListings(snap.docs.map(d => ({ id: d.id, ...d.data() })))
      } catch (err) {
        console.error('Could not load listings:', err)
        toast.error('Could not load listings.')
      } finally {
        setListingsLoading(false)
      }
    }
    loadListings()
  }, [isAdmin, tab])

  // Payouts tab - orders that are paid (awaiting delivery confirmation) or delivered
  // (payout already released), so admin can see payout status at a glance.
  useEffect(() => {
    if (!isAdmin || tab !== 'payouts') return
    async function loadPayouts() {
      setPayoutsLoading(true)
      try {
        const snap = await getDocs(
          query(collection(db, 'orders'), where('status', 'in', ['paid', 'delivered']), orderBy('createdAt', 'desc'), limit(50))
        )
        setPayoutOrders(snap.docs.map(d => ({ id: d.id, ...d.data() })))
      } catch (err) {
        console.error('Could not load payout orders:', err)
        toast.error('Could not load payouts.')
      } finally {
        setPayoutsLoading(false)
      }
    }
    loadPayouts()
  }, [isAdmin, tab])

  if (!isAdmin) return null

  const STATS_DISPLAY = [
    { label: 'Total Users', value: stats.totalUsers, icon: Users, color: 'var(--coral)' },
    { label: 'Active Listings', value: stats.activeListings, icon: ShoppingBag, color: 'var(--gold)' },
    { label: 'Total Revenue', value: stats.totalRevenue, icon: DollarSign, color: 'var(--green-ok)' },
    { label: 'Flagged Users', value: stats.flaggedUsers, icon: AlertTriangle, color: '#FF8C00' },
  ]

  return (
    <div className="page">
      <TopBar title="Admin" back />

      <div className="container" style={{ paddingTop: 'var(--sp-4)' }}>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--sp-3)', marginBottom: 'var(--sp-6)' }}>
          {STATS_DISPLAY.map(({ label, value, icon: Icon, color }) => (
            <div key={label} style={{ padding: 'var(--sp-4)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', marginBottom: 'var(--sp-2)' }}>
                <Icon size={14} color={color} />
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xl)', fontWeight: 700, color }}>
                {statsLoading ? '…' : value}
              </div>
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
              {liveShows.length === 0 ? (
                <p style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)' }}>No shows currently live.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                  {liveShows.map(s => (
                    <div key={s.id} style={{ fontSize: 'var(--text-sm)' }}>
                      <strong>{s.artistName}</strong> — {s.title} ({s.viewerCount || 0} watching)
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ padding: 'var(--sp-5)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
              <h4 style={{ marginBottom: 'var(--sp-3)', display: 'flex', alignItems: 'center', gap: 8 }}><ShoppingBag size={16} color="var(--gold)" /> Recent Sales</h4>
              {recentSales.length === 0 ? (
                <p style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)' }}>No sales yet.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                  {recentSales.map(o => (
                    <div key={o.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-sm)' }}>
                      <span>{o.pieceTitle} — {o.buyerName}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--coral)' }}>${o.winningBid}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ padding: 'var(--sp-5)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
              <h4 style={{ marginBottom: 'var(--sp-3)', display: 'flex', alignItems: 'center', gap: 8 }}><AlertTriangle size={16} color="#FF8C00" /> Flagged Users</h4>
              <p style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)' }}>
                {stats.flaggedUsers === '0'
                  ? 'No banned users. (There is no separate reporting system yet - this reflects banned accounts only.)'
                  : `${stats.flaggedUsers} banned account(s). See the Users tab to manage.`}
              </p>
            </div>
          </div>
        )}

        {tab === 'users' && (
          <div>
            {usersLoading ? (
              <div style={{ padding: 'var(--sp-6)', textAlign: 'center', color: 'var(--slate)' }}>Loading users...</div>
            ) : users.length === 0 ? (
              <div style={{ padding: 'var(--sp-6)', textAlign: 'center', color: 'var(--slate)' }}>
                <Users size={32} style={{ margin: '0 auto var(--sp-3)', opacity: 0.3 }} />
                <p>No users found.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                {users.map(u => (
                  <div key={u.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--sp-3)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
                    <div>
                      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>
                        {u.displayName} {u.isBanned && <span className="badge" style={{ background: 'rgba(255,59,59,0.15)', color: 'var(--red-err)', marginLeft: 6 }}>Banned</span>}
                      </div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>{u.email} — {u.role}</div>
                    </div>
                    <button
                      className={u.isBanned ? 'btn btn-ghost btn-sm' : 'btn btn-sm'}
                      style={!u.isBanned ? { background: 'rgba(255,59,59,0.15)', color: 'var(--red-err)' } : {}}
                      onClick={() => toggleBan(u)}
                      disabled={banningId === u.id}
                    >
                      {u.isBanned ? <CheckCircle size={13} /> : <Ban size={13} />}
                      {banningId === u.id ? '...' : u.isBanned ? 'Unban' : 'Ban'}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 'listings' && (
          <div>
            {listingsLoading ? (
              <div style={{ padding: 'var(--sp-6)', textAlign: 'center', color: 'var(--slate)' }}>Loading listings...</div>
            ) : listings.length === 0 ? (
              <div style={{ padding: 'var(--sp-6)', textAlign: 'center', color: 'var(--slate)' }}>
                <ShoppingBag size={32} style={{ margin: '0 auto var(--sp-3)', opacity: 0.3 }} />
                <p>No active listings.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                {listings.map(l => (
                  <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--sp-3)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
                    <div>
                      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{l.title}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>by {l.artistName}</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--coral)' }}>
                      {l.listingType === 'auction' ? `Bid: $${l.currentBid || l.startingBid}` : `$${l.price}`}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 'payouts' && (
          <div>
            {payoutsLoading ? (
              <div style={{ padding: 'var(--sp-6)', textAlign: 'center', color: 'var(--slate)' }}>Loading payouts...</div>
            ) : payoutOrders.length === 0 ? (
              <div style={{ padding: 'var(--sp-6)', textAlign: 'center', color: 'var(--slate)' }}>
                <DollarSign size={32} style={{ margin: '0 auto var(--sp-3)', opacity: 0.3 }} />
                <p>No pending or completed payouts.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                {payoutOrders.map(o => (
                  <div key={o.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--sp-3)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
                    <div>
                      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{o.pieceTitle}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>{o.artistName} ← {o.buyerName} — ${o.winningBid}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}>
                      <span className="badge" style={{
                        background: o.status === 'delivered' ? 'rgba(46,204,113,0.15)' : 'rgba(255,215,0,0.15)',
                        color: o.status === 'delivered' ? 'var(--green-ok)' : 'var(--gold)',
                      }}>
                        {o.status === 'delivered' ? 'Paid Out' : 'Awaiting Delivery'}
                      </span>
                      <button
                        className="btn btn-ghost btn-sm"
                        style={{ color: 'var(--red-err)' }}
                        onClick={() => handleRefund(o)}
                        disabled={refundingId === o.id}
                      >
                        {refundingId === o.id ? '...' : 'Refund'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
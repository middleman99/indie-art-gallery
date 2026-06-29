// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import BottomNav from './components/BottomNav'
import Discover from './pages/Discover'
import Live from './pages/Live'
import Store from './pages/Store'
import Profile from './pages/Profile'
import Auth from './pages/Auth'
import ListArt from './pages/ListArt'
import Admin from './pages/Admin'
import ConnectStripe from './pages/ConnectStripe'

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100dvh', color: 'var(--slate)' }}>Loading…</div>
  if (!user) return <Navigate to="/auth" replace />
  return children
}

function ArtistRoute({ children }) {
  const { user, isArtist, loading } = useAuth()
  if (loading) return null
  if (!user) return <Navigate to="/auth" replace />
  if (!isArtist) return <Navigate to="/profile" replace />
  return children
}

export default function App() {
  const { user } = useAuth()

  return (
    <>
      <Routes>
        <Route path="/"              element={<Discover />} />
        <Route path="/live"          element={<Live />} />
        <Route path="/store"         element={<Store />} />
        <Route path="/auth"          element={user ? <Navigate to="/" replace /> : <Auth />} />
        <Route path="/profile"       element={<Profile />} />
        <Route path="/list"          element={<ArtistRoute><ListArt /></ArtistRoute>} />
        <Route path="/connect-stripe" element={<ProtectedRoute><ConnectStripe /></ProtectedRoute>} />
        <Route path="/admin"         element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="*"              element={<Navigate to="/" replace />} />
      </Routes>

      {!['/auth'].includes(window.location.pathname) && <BottomNav />}
    </>
  )
}
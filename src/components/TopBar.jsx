// src/components/TopBar.jsx
import { useNavigate } from 'react-router-dom'
import { Bell, Search } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function TopBar({ title, showSearch = false, back = false }) {
  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <header className="topbar">
      {back ? (
        <button
          onClick={() => navigate(-1)}
          style={{ background: 'none', border: 'none', color: 'var(--cream)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
        >
          ← Back
        </button>
      ) : (
        <div className="topbar-logo">
          Indie<span>Art</span>
        </div>
      )}

      {title && (
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          {title}
        </h2>
      )}

      <div className="flex gap-3 items-center">
        {showSearch && (
          <button
            onClick={() => navigate('/search')}
            style={{ background: 'none', border: 'none', color: 'var(--slate)', cursor: 'pointer' }}
          >
            <Search size={20} />
          </button>
        )}
        {user && (
          <button
            onClick={() => navigate('/notifications')}
            style={{ background: 'none', border: 'none', color: 'var(--slate)', cursor: 'pointer', position: 'relative' }}
          >
            <Bell size={20} />
          </button>
        )}
      </div>
    </header>
  )
}

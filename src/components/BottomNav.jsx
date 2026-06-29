// src/components/BottomNav.jsx
import { useNavigate, useLocation } from 'react-router-dom'
import { Home, Radio, ShoppingBag, User, LayoutDashboard } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const navItems = [
  { label: 'Discover',  icon: Home,          path: '/' },
  { label: 'Live',      icon: Radio,         path: '/live' },
  { label: 'Store',     icon: ShoppingBag,   path: '/store' },
  { label: 'Profile',   icon: User,          path: '/profile' },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { isAdmin } = useAuth()

  const items = isAdmin
    ? [...navItems, { label: 'Admin', icon: LayoutDashboard, path: '/admin' }]
    : navItems

  return (
    <nav className="bottom-nav">
      {items.map(({ label, icon: Icon, path }) => (
        <button
          key={path}
          className={`nav-item ${pathname === path ? 'active' : ''}`}
          onClick={() => navigate(path)}
          aria-label={label}
        >
          <Icon size={22} strokeWidth={pathname === path ? 2.5 : 1.8} />
          {label}
        </button>
      ))}
    </nav>
  )
}

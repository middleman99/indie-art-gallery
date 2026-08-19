// src/components/BottomNav.jsx
import { useNavigate, useLocation } from 'react-router-dom'
import { Home, Radio, ShoppingBag, User, LayoutDashboard, PlusSquare } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

// Tab labels/order follow Whatnot's live-shopping nav pattern (Home / Live /
// Shop / Sell / Account), adapted to this app's actual routes.
const navItems = [
  { label: 'Home',   icon: Home,        path: '/' },
  { label: 'Live',   icon: Radio,       path: '/live' },
  { label: 'Shop',   icon: ShoppingBag, path: '/store' },
  { label: 'Account',icon: User,        path: '/profile' },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { isAdmin, isArtist } = useAuth()

  // Whatnot separates buying from selling with its own nav entry (Seller
  // Hub) - artists here get a "Sell" tab the same way, inserted before Account.
  let items = navItems
  if (isArtist) {
    items = [...items.slice(0, 3), { label: 'Sell', icon: PlusSquare, path: '/go-live' }, ...items.slice(3)]
  }
  if (isAdmin) {
    items = [...items, { label: 'Admin', icon: LayoutDashboard, path: '/admin' }]
  }

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

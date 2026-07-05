import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-left">
        <Link to="/" className="logo">WAVE</Link>
      </div>
      <ul className="nav-center">
        <li>
          <Link to="/" className={pathname === '/' ? 'active' : ''}>
            Destinations
          </Link>
        </li>
        <li>
          <Link to="/trips" className={pathname === '/trips' ? 'active' : ''}>
            Trips
          </Link>
        </li>
        <li>
          <Link to="/journal" className={pathname === '/journal' ? 'active' : ''}>
            Journal
          </Link>
        </li>
      </ul>
      <div className="nav-right">
        <img src="https://i.pravatar.cc/40" alt="profile" className="avatar" />
      </div>
    </nav>
  )
}

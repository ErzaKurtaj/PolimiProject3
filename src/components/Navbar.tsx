import { useEffect, useState } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-left">
        <span className="logo">WAVE</span>
      </div>
      <ul className="nav-center">
        <li><a href="#">Destinations</a></li>
        <li><a href="#">Trips</a></li>
        <li><a href="#">Journal</a></li>
      </ul>
      <div className="nav-right">
        <img src="https://i.pravatar.cc/40" alt="profile" className="avatar" />
      </div>
    </nav>
  )
}

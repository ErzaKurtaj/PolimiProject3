import { useEffect, useState } from 'react'

export function PageIntro() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2400)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="page-intro" aria-hidden="true">
      <span className="intro-logo">WAVE</span>
      <div className="intro-bar"></div>
    </div>
  )
}

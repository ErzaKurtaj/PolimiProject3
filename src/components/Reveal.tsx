import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delayClass?: string
}

export function Reveal({ children, className = '', delayClass = '' }: RevealProps) {
  const { ref, isVisible } = useScrollReveal()
  const classes = ['reveal', isVisible ? 'in-view' : '', className, delayClass]
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}

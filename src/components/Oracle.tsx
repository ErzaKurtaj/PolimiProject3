import { useState, useEffect, useRef } from 'react'
import { oracleQuestions, oracleDestinations } from '../data/oracleData'
import type { OracleDestination } from '../types'

type Phase = 'questions' | 'reading' | 'reveal'

interface OracleProps {
  isOpen: boolean
  onClose: () => void
}

export function Oracle({ isOpen, onClose }: OracleProps) {
  const [phase, setPhase] = useState<Phase>('questions')
  const [currentQ, setCurrentQ] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({})
  const [qClass, setQClass] = useState('')
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null)
  const [revealDest, setRevealDest] = useState<OracleDestination | null>(null)
  const fillRef = useRef<HTMLDivElement | null>(null)

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setPhase('questions')
      setCurrentQ(0)
      setScores({})
      setQClass('')
      setSelectedOptionIdx(null)
      setRevealDest(null)
    }
  }, [isOpen])

  // Reading phase: animate bar then move to reveal
  useEffect(() => {
    if (phase !== 'reading') return

    const t1 = setTimeout(() => {
      if (fillRef.current) {
        fillRef.current.style.width = '100%'
      }
    }, 80)

    const t2 = setTimeout(() => {
      const topKey = computeTopDestination(scores)
      setRevealDest(oracleDestinations[topKey] ?? oracleDestinations['jeju'])
      setPhase('reveal')
    }, 2300)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [phase, scores])

  function computeTopDestination(s: Record<string, number>): string {
    let topKey = 'jeju'
    let topScore = -1
    for (const [key, val] of Object.entries(s)) {
      if (val > topScore) {
        topScore = val
        topKey = key
      }
    }
    return topKey
  }

  function handleOptionClick(optionIdx: number) {
    if (selectedOptionIdx !== null) return
    setSelectedOptionIdx(optionIdx)

    const option = oracleQuestions[currentQ].options[optionIdx]

    setTimeout(() => {
      // Add scores
      const newScores = { ...scores }
      for (const [dest, pts] of Object.entries(option.scores)) {
        newScores[dest] = (newScores[dest] ?? 0) + pts
      }

      const isLast = currentQ === oracleQuestions.length - 1

      // Exit animation
      setQClass('q-exit')

      setTimeout(() => {
        if (isLast) {
          setScores(newScores)
          setPhase('reading')
          if (fillRef.current) {
            fillRef.current.style.width = '0%'
          }
        } else {
          setScores(newScores)
          setCurrentQ((q) => q + 1)
          setSelectedOptionIdx(null)
          setQClass('q-enter')

          // Double rAF to trigger transition
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setQClass('')
            })
          })
        }
      }, 350)
    }, 150)
  }

  function handleRetry() {
    setPhase('questions')
    setCurrentQ(0)
    setScores({})
    setQClass('')
    setSelectedOptionIdx(null)
    setRevealDest(null)
  }

  const question = oracleQuestions[currentQ]

  return (
    <div
      className={`oracle${isOpen ? ' open' : ''}`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      <div className="oracle-bg"></div>

      {/* QUESTION PHASE */}
      <div className="oracle-inner">
        <button className="oracle-close" onClick={onClose} aria-label="Close oracle">
          ✕
        </button>

        <div className={`oracle-question-wrap${qClass ? ` ${qClass}` : ''}`}>
          <span className="oracle-eyebrow">Journey Oracle</span>
          <h2 className="oracle-question-text">{question.question}</h2>
          <div className="oracle-options">
            {question.options.map((opt, i) => (
              <button
                key={i}
                className={`oracle-option${selectedOptionIdx === i ? ' selected' : ''}`}
                onClick={() => handleOptionClick(i)}
              >
                <span className="oracle-option-num">0{i + 1}</span>
                <span className="oracle-option-text">{opt.text}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="oracle-footer">
          <div className="oracle-progress">
            {oracleQuestions.map((_, i) => (
              <span
                key={i}
                className={`oracle-progress-dot${i === currentQ ? ' active' : ''}`}
              ></span>
            ))}
          </div>
          <span className="oracle-counter">
            {currentQ + 1} / {oracleQuestions.length}
          </span>
        </div>
      </div>

      {/* READING PHASE */}
      <div className={`oracle-reading${phase === 'reading' ? ' visible' : ''}`}>
        <span className="oracle-reading-label">Reading your journey</span>
        <div className="oracle-reading-bar">
          <div className="oracle-reading-fill" ref={fillRef}></div>
        </div>
      </div>

      {/* REVEAL PHASE */}
      <div className={`oracle-reveal${phase === 'reveal' ? ' visible' : ''}`}>
        <div className="oracle-reveal-image">
          {revealDest && (
            <img src={revealDest.image} alt={revealDest.name} />
          )}
          <div className="oracle-reveal-img-overlay"></div>
        </div>
        <div className="oracle-reveal-content">
          <span className="oracle-reveal-eyebrow">Your destination is</span>
          <h2 className="oracle-reveal-name">{revealDest?.name}</h2>
          <span className="oracle-reveal-subtitle">{revealDest?.subtitle}</span>
          <p className="oracle-reveal-tagline">{revealDest?.tagline}</p>
          <p className="oracle-reveal-desc">{revealDest?.desc}</p>
          <div className="oracle-reveal-tags">
            {revealDest?.tags.map((tag) => (
              <span key={tag} className="oracle-reveal-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="oracle-reveal-meta">
            <div className="oracle-reveal-meta-item">
              <span className="oracle-meta-label">Best season</span>
              <span className="oracle-meta-value">{revealDest?.season}</span>
            </div>
            <div className="oracle-reveal-meta-item">
              <span className="oracle-meta-label">Duration</span>
              <span className="oracle-meta-value">{revealDest?.duration}</span>
            </div>
          </div>
          <div className="oracle-reveal-actions">
            <button className="btn primary">Explore This Journey</button>
            <button className="oracle-retry-btn" onClick={handleRetry}>
              Read Again →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

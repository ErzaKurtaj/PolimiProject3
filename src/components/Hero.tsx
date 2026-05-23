import { useState } from 'react'
import { sliderCards } from '../data/sliderCards'

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => {
    setActiveIndex((i) => (i === 0 ? sliderCards.length - 1 : i - 1))
  }

  const next = () => {
    setActiveIndex((i) => (i === sliderCards.length - 1 ? 0 : i + 1))
  }

  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-left">
          <span className="eyebrow">Featured Destination</span>
          <h1 className="hero-title">BA<span>LI</span></h1>
          <p className="hero-desc">
            A sensory way of exploring destinations through atmosphere, rhythm,
            and experience beginning with Bali's volcanic landscapes, ancient
            rituals, and ocean light.
          </p>
          <div className="actions">
            <button className="btn primary">Explore</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="slider-wrapper">
            <div className="slider">
              {sliderCards.map((card, i) => (
                <div key={card.title} className={`card${i === activeIndex ? ' active' : ''}`}>
                  <img src={card.image} alt={card.alt} />
                  <div className="card-info">
                    <h4>{card.title}</h4>
                    <p>{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="controls">
              <button className="nav-btn prev" onClick={prev} aria-label="Previous">
                <span>←</span>
              </button>
              <button className="nav-btn next" onClick={next} aria-label="Next">
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

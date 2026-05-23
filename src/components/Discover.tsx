import { discoverCards } from '../data/discoverCards'
import { Reveal } from './Reveal'

interface DiscoverProps {
  onCardClick: (resultId: string) => void
}

export function Discover({ onCardClick }: DiscoverProps) {
  return (
    <section className="discover">
      <Reveal className="discover-header">
        <span className="eyebrow-dark">Plan Your Journey</span>
        <h2 className="tripsh2">Discover Trips By Season &amp; Interest</h2>
      </Reveal>

      <div className="discover-grid">
        {discoverCards.map((card, i) => {
          const delayClass = `reveal-delay-${(i % 3) + 1}` as 'reveal-delay-1' | 'reveal-delay-2' | 'reveal-delay-3'
          return (
            <Reveal
              key={card.id}
              className={`discover-card ${card.bgClass}`}
              delayClass={delayClass}
            >
              <span className="icon"></span>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
              <div
                style={{ position: 'absolute', inset: 0, cursor: 'pointer' }}
                onClick={() => onCardClick(card.resultId)}
                role="button"
                aria-label={`View ${card.title}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') onCardClick(card.resultId)
                }}
              />
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

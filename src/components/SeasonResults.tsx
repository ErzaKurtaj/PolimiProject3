import { seasonResults } from '../data/seasonResults'

interface SeasonResultsProps {
  activeId: string | null
  onResultCardClick: (imgSrc: string, title: string) => void
}

export function SeasonResults({ activeId, onResultCardClick }: SeasonResultsProps) {
  return (
    <>
      {seasonResults.map((section) => {
        const isActive = activeId === section.id
        return (
          <section
            key={section.id}
            id={section.id}
            className="season-results"
            style={{
              display: isActive ? 'block' : 'none',
              opacity: isActive ? 1 : 0,
            }}
          >
            <h3 className={section.headingClass ?? ''}>{section.heading}</h3>
            <div className="results-grid">
              {section.cards.map((card) => (
                <div
                  key={card.title}
                  className="result-card"
                  onClick={() => onResultCardClick(card.image, card.title)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      onResultCardClick(card.image, card.title)
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={card.image} alt={card.alt} />
                  <span>{card.title}</span>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </>
  )
}

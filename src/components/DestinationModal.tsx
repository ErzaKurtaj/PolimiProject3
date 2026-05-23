import { destinationData } from '../data/destinationData'

interface DestinationModalProps {
  imgSrc: string | null
  title: string | null
  onClose: () => void
}

export function DestinationModal({ imgSrc, title, onClose }: DestinationModalProps) {
  const isOpen = imgSrc !== null && title !== null
  const data = title ? destinationData[title] : null

  return (
    <div
      className={`dest-modal${isOpen ? ' open' : ''}`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="dest-modal-backdrop"
        onClick={onClose}
      ></div>
      <div className="dest-modal-panel">
        <button className="dest-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div className="dest-image-wrap">
          {imgSrc && <img className="dest-img" src={imgSrc} alt={title ?? ''} />}
          <div className="dest-image-overlay"></div>
        </div>
        <div className="dest-content">
          {data ? (
            <>
              <div className="dest-tags">
                {data.tags.map((tag) => (
                  <span key={tag} className="dest-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="dest-name">{data.name}</h2>
              <p className="dest-desc">{data.description}</p>
              <div className="dest-meta">
                <div className="dest-meta-item">
                  <span className="dest-meta-label">Duration</span>
                  <span className="dest-meta-value">{data.duration}</span>
                </div>
                <div className="dest-meta-item">
                  <span className="dest-meta-label">Best Season</span>
                  <span className="dest-meta-value">{data.season}</span>
                </div>
              </div>
              <button className="btn primary">Plan Your Journey</button>
            </>
          ) : (
            <>
              <h2 className="dest-name">{title}</h2>
              <p className="dest-desc">Discover this destination and plan your journey.</p>
              <button className="btn primary">Plan Your Journey</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

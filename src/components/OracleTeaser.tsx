interface OracleTeaserProps {
  onOpen: () => void
}

export function OracleTeaser({ onOpen }: OracleTeaserProps) {
  return (
    <section className="oracle-teaser">
      <div className="oracle-teaser-inner">
        <div className="oracle-teaser-text">
          <span className="eyebrow-dark">Don't know where to go</span>
          <h2 className="oracle-teaser-heading">Let the Oracle read your state.</h2>
          <p className="oracle-teaser-sub">Four questions. One destination. Completely yours.</p>
        </div>
        <button className="oracle-open-btn" onClick={onOpen}>
          <span>Open the Oracle</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}

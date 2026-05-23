export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">WAVE</span>
          <p className="footer-tagline">
            Slow travel. Thoughtful journeys. Sensory places.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <span className="footer-col-title">Explore</span>
            <a href="#">Destinations</a>
            <a href="#">Trips</a>
            <a href="#">Journal</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-col">
            <span className="footer-col-title">Company</span>
            <a href="#">About</a>
            <a href="#">Stories</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 WAVE</span>
        <span>Designed with intention</span>
      </div>
    </footer>
  )
}

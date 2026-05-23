export function KoreaGuide() {
  return (
    <section className="korea-guide">
      <h2 className="guide-title">A Journey Through South Korea</h2>

      <svg
        className="route-path"
        viewBox="0 0 600 2000"
        preserveAspectRatio="none"
      >
        <path
          d="M300 0
         C180 220, 420 420, 300 620
         C180 820, 420 1020, 300 1220
         C180 1420, 420 1620, 300 1820"
          fill="none"
          stroke="rgba(0,0,0,0.15)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="6 12"
        />
      </svg>

      <div className="route">
        {/* LEFT */}
        <div className="route-item route-left">
          <div className="masked-image shape-a">
            <img src="/images/namsan.jpg" alt="Seoul" />
          </div>
          <div className="route-text">
            <h4 className="seoul">Seoul</h4>
            <p>
  Begin in Seoul to understand contrast. Move between royal palaces and narrow backstreets in the morning, then follow the city's faster rhythms after dark. This is where past and present overlap most clearly.
</p>
          </div>
        </div>

        {/* CENTER */}
        <div className="route-item route-center">
          <div className="masked-image shape-b">
            <img src="/images/busan.jpg" alt="Busan" />
          </div>
          <div className="route-text">
            <h4>Busan</h4>
            <p>
  Continue south to Busan, where the pace softens. Spend time near the water, walk temple paths above the sea, and let open horizons replace the density of the capital.
</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="route-item route-right">
          <div className="masked-image shape-c">
            <img src="/images/jeju.jpg" alt="Jeju" />
          </div>
          <div className="route-text">
            <h4>Jeju Island</h4>
            <p>
  End on Jeju Island. Follow coastal trails and volcanic stone paths, moving slowly. This is a place for stillness — where the journey becomes quieter and more reflective.
</p>
          </div>
        </div>
      </div>
    </section>
  )
}

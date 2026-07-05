import { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { upcomingTrips, pastTrips, wishlistDests } from '../data/tripsData'
import type { Trip, WishlistDest } from '../types'

type Tab = 'upcoming' | 'past' | 'wishlist'

function getDaysUntil(dateStr: string): number {
  const target = new Date(dateStr)
  const now = new Date()
  return Math.max(0, Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)))
}

function useCounter(end: number, duration = 1400) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start: number | null = null
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
    const step = (ts: number) => {
      if (!start) start = ts
      const t = Math.min((ts - start) / duration, 1)
      setCount(Math.floor(easeOut(t) * end))
      if (t < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration])
  return count
}

export function TripsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('upcoming')
  const [expandedTrip, setExpandedTrip] = useState<string | null>(null)
  const [contentVisible, setContentVisible] = useState(true)

  const countries = useCounter(23)
  const km = useCounter(87)
  const tripsCount = useCounter(41)

  function handleTabChange(tab: Tab) {
    if (tab === activeTab) return
    setContentVisible(false)
    setTimeout(() => {
      setActiveTab(tab)
      setExpandedTrip(null)
      setContentVisible(true)
    }, 220)
  }

  const tripList = activeTab === 'upcoming' ? upcomingTrips : pastTrips

  return (
    <>
      <Navbar />
      <main className="trips-page">
        <section className="trips-hero">
          <span className="eyebrow-dark">Your Adventures</span>
          <h1 className="trips-hero-heading">Trips</h1>
          <p className="trips-hero-sub">Every journey leaves a mark. Here are yours.</p>
          <div className="trips-stats">
            <div className="trips-stat">
              <span className="trips-stat-num">{countries}</span>
              <span className="trips-stat-label">Countries</span>
            </div>
            <div className="trips-stat-divider" />
            <div className="trips-stat">
              <span className="trips-stat-num">{km}k</span>
              <span className="trips-stat-label">Km Traveled</span>
            </div>
            <div className="trips-stat-divider" />
            <div className="trips-stat">
              <span className="trips-stat-num">{tripsCount}</span>
              <span className="trips-stat-label">Trips Taken</span>
            </div>
          </div>
        </section>

        <div className="trips-tabs">
          {(['upcoming', 'past', 'wishlist'] as Tab[]).map((tab) => (
            <button
              key={tab}
              className={`trips-tab${activeTab === tab ? ' active' : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {tab === 'upcoming' && <span className="tab-badge">{upcomingTrips.length}</span>}
            </button>
          ))}
        </div>

        <div className={`trips-content${contentVisible ? ' visible' : ''}`}>
          {activeTab !== 'wishlist' ? (
            <div className="trips-list">
              {tripList.map((trip) => (
                <TripCard
                  key={trip.id}
                  trip={trip}
                  isExpanded={expandedTrip === trip.id}
                  onToggle={() => setExpandedTrip(expandedTrip === trip.id ? null : trip.id)}
                />
              ))}
            </div>
          ) : (
            <div className="wishlist-grid">
              {wishlistDests.map((dest) => (
                <WishlistCard key={dest.id} dest={dest} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

function TripCard({
  trip,
  isExpanded,
  onToggle,
}: {
  trip: Trip
  isExpanded: boolean
  onToggle: () => void
}) {
  const pct = Math.round((trip.spent / trip.budget) * 100)
  const daysUntil = trip.status === 'upcoming' ? getDaysUntil(trip.startDate) : null
  const companions = trip.companions === 0 ? 'Solo' : `${trip.companions} companions`

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  return (
    <div className="trip-card">
      <div className="trip-card-main">
        <div className="trip-card-cover">
          <img src={trip.image} alt={trip.destination} loading="lazy" />
          <span className={`trip-status-badge ${trip.status}`}>
            {trip.status === 'upcoming' ? 'Upcoming' : 'Completed'}
          </span>
          {daysUntil !== null && (
            <div className="trip-countdown">
              <div className="trip-countdown-num">{daysUntil}</div>
              <div className="trip-countdown-label">days to go</div>
            </div>
          )}
        </div>
        <div className="trip-card-body">
          <div className="trip-card-top">
            <div className="trip-card-info">
              <h2 className="trip-destination">{trip.destination}</h2>
              <p className="trip-country">{trip.country}</p>
              <div className="trip-meta-row">
                <span className="trip-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {trip.duration} days
                </span>
                <span className="trip-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  {companions}
                </span>
                <span className="trip-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  ${trip.budget.toLocaleString()} budget
                </span>
              </div>
            </div>
            <div className="budget-ring-wrap">
              <div
                className="budget-ring"
                style={{
                  background: `conic-gradient(var(--accent) ${pct}%, rgba(255,255,255,0.06) 0)`,
                }}
              >
                <div className="budget-ring-inner">
                  <span className="budget-pct">{pct}%</span>
                  <span className="budget-label">spent</span>
                </div>
              </div>
              <span className="budget-ring-label">
                ${trip.spent.toLocaleString()} / ${trip.budget.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="trip-card-footer">
            <span className="trip-dates">
              {formatDate(trip.startDate)} — {formatDate(trip.endDate)}
            </span>
            <button
              className={`trip-expand-btn${isExpanded ? ' expanded' : ''}`}
              onClick={onToggle}
            >
              View Itinerary
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`trip-itinerary${isExpanded ? ' open' : ''}`}>
        <div className="trip-itinerary-inner">
          {trip.itinerary.map((day, i) => (
            <div key={i} className="trip-day">
              <div className="trip-day-label">{day.label}</div>
              <div className="trip-day-title">{day.title}</div>
              <ul className="trip-day-activities">
                {day.activities.map((act, j) => (
                  <li key={j}>{act}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function WishlistCard({ dest }: { dest: WishlistDest }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`wishlist-flip${flipped ? ' flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="wishlist-flip-inner">
        <div className="wishlist-flip-front">
          <img src={dest.image} alt={dest.name} loading="lazy" />
          <div className="wishlist-flip-front-overlay">
            <div className="wishlist-dest-name">{dest.name}</div>
            <div className="wishlist-dest-country">{dest.country}</div>
          </div>
          <div className="wishlist-hint">Tap to explore</div>
        </div>
        <div className="wishlist-flip-back">
          <div className="wishlist-back-title">{dest.name}</div>
          <p className="wishlist-back-desc">{dest.description}</p>
          <div className="wishlist-back-meta">
            <div className="wishlist-meta-row">
              <span className="wishlist-meta-key">Best Season</span>
              <span className="wishlist-meta-val">{dest.bestSeason}</span>
            </div>
            <div className="wishlist-meta-row">
              <span className="wishlist-meta-key">Est. Cost</span>
              <span className="wishlist-meta-val">{dest.estimatedCost}</span>
            </div>
          </div>
          <div className="wishlist-tags">
            {dest.tags.map((tag) => (
              <span key={tag} className="wishlist-tag">
                {tag}
              </span>
            ))}
          </div>
          <button className="wishlist-plan-btn" onClick={(e) => e.stopPropagation()}>
            Plan This Trip
          </button>
        </div>
      </div>
    </div>
  )
}

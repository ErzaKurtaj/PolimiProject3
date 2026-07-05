import { useState, useMemo } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { articles } from '../data/journalData'
import type { JournalArticle } from '../types'

const CATEGORIES = ['All', 'Culture', 'Food', 'Adventure', 'Nature', 'City', 'Photography'] as const

export function JournalPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [gridKey, setGridKey] = useState(0)

  const filteredArticles = useMemo(() => {
    return articles.filter((a) => {
      const matchCat = activeCategory === 'All' || a.category === activeCategory
      const q = searchQuery.toLowerCase()
      const matchSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.location.toLowerCase().includes(q)
      return matchCat && matchSearch
    })
  }, [activeCategory, searchQuery])

  const showFeatured = activeCategory === 'All' && !searchQuery
  const featured = articles[0]

  function handleFilter(cat: string) {
    if (cat === activeCategory) return
    setActiveCategory(cat)
    setGridKey((k) => k + 1)
  }

  return (
    <>
      <Navbar />
      <main className="journal-page">
        <section className="journal-hero">
          <span className="eyebrow-dark">Field Notes</span>
          <h1 className="journal-title">The Journal</h1>
          <p className="journal-subtitle">Stories from the road — honest, slow, and alive.</p>
          <div className="journal-search-wrap">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search articles, destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="journal-search-clear" onClick={() => setSearchQuery('')}>
                ×
              </button>
            )}
          </div>
        </section>

        <div className="journal-filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-pill${activeCategory === cat ? ' active' : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {showFeatured && (
          <section className="journal-featured">
            <div className="journal-featured-image">
              <img src={featured.image} alt={featured.title} />
              <div className="journal-featured-overlay" />
            </div>
            <div className="journal-featured-content">
              <span className="journal-cat-tag">{featured.category}</span>
              <h2 className="journal-featured-title">{featured.title}</h2>
              <p className="journal-featured-excerpt">{featured.excerpt}</p>
              <div className="journal-featured-meta">
                <span>{featured.author}</span>
                <span className="dot">·</span>
                <span>{featured.readTime} min read</span>
                <span className="dot">·</span>
                <span>{featured.date}</span>
              </div>
              <div style={{ marginTop: '28px' }}>
                <button className="btn ghost journal-read-btn">Read Article</button>
              </div>
            </div>
          </section>
        )}

        <section className="journal-grid-section">
          <div className="journal-grid" key={gridKey}>
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} />
              ))
            ) : (
              <p className="journal-empty">No articles found. Try a different search or category.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function ArticleCard({ article, index }: { article: JournalArticle; index: number }) {
  return (
    <article className="journal-card" style={{ animationDelay: `${index * 0.07}s` }}>
      <div className="journal-card-image">
        <img src={article.image} alt={article.title} loading="lazy" />
        <div className="journal-card-hover-overlay">
          <p className="journal-card-excerpt">{article.excerpt}</p>
          <button className="btn ghost journal-read-btn">Read Article</button>
        </div>
      </div>
      <div className="journal-card-body">
        <span className="journal-cat-tag">{article.category}</span>
        <h3 className="journal-card-title">{article.title}</h3>
        <div className="journal-card-footer-meta">
          <span className="journal-card-location">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {article.location}
          </span>
          <span className="journal-card-meta-right">
            <span>{article.readTime} min</span>
            <span className="dot">·</span>
            <span>{article.date}</span>
          </span>
        </div>
      </div>
    </article>
  )
}

import { useState } from 'react'
import { PageIntro } from '../components/PageIntro'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { OracleTeaser } from '../components/OracleTeaser'
import { Oracle } from '../components/Oracle'
import { Discover } from '../components/Discover'
import { SeasonResults } from '../components/SeasonResults'
import { KoreaGuide } from '../components/KoreaGuide'
import { Footer } from '../components/Footer'
import { DestinationModal } from '../components/DestinationModal'
import type { ModalState } from '../types'

export function HomePage() {
  const [activeResult, setActiveResult] = useState<string | null>(null)
  const [modalData, setModalData] = useState<ModalState | null>(null)
  const [oracleOpen, setOracleOpen] = useState(false)

  return (
    <>
      <PageIntro />
      <Navbar />
      <Hero />
      <OracleTeaser onOpen={() => setOracleOpen(true)} />
      <Discover
        onCardClick={(id) => {
          setActiveResult(id)
          setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
          }, 50)
        }}
      />
      <SeasonResults
        activeId={activeResult}
        onResultCardClick={(src, title) => setModalData({ imgSrc: src, title })}
      />
      <KoreaGuide />
      <Footer />
      <Oracle isOpen={oracleOpen} onClose={() => setOracleOpen(false)} />
      <DestinationModal
        imgSrc={modalData?.imgSrc ?? null}
        title={modalData?.title ?? null}
        onClose={() => setModalData(null)}
      />
    </>
  )
}

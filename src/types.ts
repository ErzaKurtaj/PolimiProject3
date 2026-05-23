export interface SliderCard {
  image: string
  alt: string
  title: string
  subtitle: string
}

export interface DiscoverCard {
  id: string
  resultId: string
  bgClass: string
  title: string
  description: string
}

export interface ResultCard {
  image: string
  alt: string
  title: string
}

export interface SeasonResult {
  id: string
  heading: string
  headingClass?: string
  cards: ResultCard[]
}

export interface DestinationData {
  name: string
  tags: string[]
  description: string
  duration: string
  season: string
}

export interface OracleDestination {
  key: string
  name: string
  subtitle: string
  tagline: string
  desc: string
  image: string
  tags: string[]
  season: string
  duration: string
}

export interface OracleOption {
  text: string
  scores: Record<string, number>
}

export interface OracleQuestion {
  question: string
  options: OracleOption[]
}

export interface ModalState {
  imgSrc: string
  title: string
}

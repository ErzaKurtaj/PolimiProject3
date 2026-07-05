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

export type JournalCategory = 'Culture' | 'Food' | 'Adventure' | 'Nature' | 'City' | 'Photography'

export interface JournalArticle {
  id: string
  category: JournalCategory
  title: string
  excerpt: string
  author: string
  date: string
  readTime: number
  image: string
  location: string
}

export interface TripDay {
  label: string
  title: string
  activities: string[]
}

export type TripStatus = 'upcoming' | 'past'

export interface Trip {
  id: string
  destination: string
  country: string
  image: string
  status: TripStatus
  startDate: string
  endDate: string
  duration: number
  companions: number
  budget: number
  spent: number
  itinerary: TripDay[]
}

export interface WishlistDest {
  id: string
  name: string
  country: string
  image: string
  description: string
  bestSeason: string
  estimatedCost: string
  tags: string[]
}

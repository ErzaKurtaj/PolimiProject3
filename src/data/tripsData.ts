import type { Trip, WishlistDest } from '../types'

export const upcomingTrips: Trip[] = [
  {
    id: 'bali-2026',
    destination: 'Bali',
    country: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=80',
    status: 'upcoming',
    startDate: '2026-06-15',
    endDate: '2026-06-28',
    duration: 13,
    companions: 2,
    budget: 3200,
    spent: 1480,
    itinerary: [
      {
        label: 'Days 1–3',
        title: 'Seminyak Arrival',
        activities: ['Check in at private villa', 'Sunset at Petitenget Beach', 'Dinner at Ku De Ta'],
      },
      {
        label: 'Days 4–6',
        title: 'Ubud & Surrounds',
        activities: ['Tegallalang rice terraces', 'Monkey Forest walk', 'Traditional cooking class'],
      },
      {
        label: 'Days 7–10',
        title: 'Nusa Penida',
        activities: ['Kelingking Beach', 'Broken Beach cliff walk', 'Crystal Bay snorkeling'],
      },
      {
        label: 'Days 11–13',
        title: 'Canggu Wind-Down',
        activities: ['Morning surf lessons', 'Beachside brunch', 'Departure day'],
      },
    ],
  },
  {
    id: 'kyoto-2026',
    destination: 'Kyoto',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1493997181344-712f2f19d87a?w=900&q=80',
    status: 'upcoming',
    startDate: '2026-08-20',
    endDate: '2026-08-30',
    duration: 10,
    companions: 0,
    budget: 2800,
    spent: 640,
    itinerary: [
      {
        label: 'Days 1–3',
        title: 'Higashiyama District',
        activities: ['Fushimi Inari dawn visit', 'Kiyomizudera temple', 'Ninenzaka lanes at dusk'],
      },
      {
        label: 'Days 4–6',
        title: 'Arashiyama',
        activities: ['Bamboo grove at sunrise', 'Iwatayama Monkey Park', 'Tenryuji Zen garden'],
      },
      {
        label: 'Days 7–10',
        title: 'Fushimi & Nara Day Trip',
        activities: ['Sake brewery tours', 'Nara deer park', 'Farewell kaiseki dinner'],
      },
    ],
  },
]

export const pastTrips: Trip[] = [
  {
    id: 'seoul-2025',
    destination: 'Seoul',
    country: 'South Korea',
    image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=900&q=80',
    status: 'past',
    startDate: '2025-03-10',
    endDate: '2025-03-20',
    duration: 10,
    companions: 3,
    budget: 2100,
    spent: 1950,
    itinerary: [
      {
        label: 'Days 1–3',
        title: 'Gangnam & Myeongdong',
        activities: ['Street food night tour', 'COEX Aquarium', 'Itaewon nightlife'],
      },
      {
        label: 'Days 4–6',
        title: 'Bukchon & Insadong',
        activities: ['Hanbok experience', 'Gyeongbokgung Palace', 'Traditional tea ceremony'],
      },
      {
        label: 'Days 7–10',
        title: 'Day Trips',
        activities: ['DMZ border tour', 'Nami Island ferry', 'Seoraksan hiking'],
      },
    ],
  },
  {
    id: 'santorini-2024',
    destination: 'Santorini',
    country: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&q=80',
    status: 'past',
    startDate: '2024-07-05',
    endDate: '2024-07-12',
    duration: 7,
    companions: 1,
    budget: 3600,
    spent: 3480,
    itinerary: [
      {
        label: 'Days 1–3',
        title: 'Oia & Fira',
        activities: ['Sunset from Oia castle', 'Caldera boat trip', 'Volcanic wine tasting'],
      },
      {
        label: 'Days 4–7',
        title: 'Beaches & Ancient Sites',
        activities: ['Red Beach', 'Perissa black sand', 'Akrotiri archaeological site'],
      },
    ],
  },
  {
    id: 'istanbul-2024',
    destination: 'Istanbul',
    country: 'Turkey',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=900&q=80',
    status: 'past',
    startDate: '2024-11-01',
    endDate: '2024-11-08',
    duration: 7,
    companions: 0,
    budget: 1400,
    spent: 1220,
    itinerary: [
      {
        label: 'Days 1–4',
        title: 'Old City & Sultanahmet',
        activities: ['Hagia Sophia', 'Grand Bazaar', 'Bosphorus evening cruise'],
      },
      {
        label: 'Days 5–7',
        title: 'Beyoğlu & Asian Side',
        activities: ['İstiklal Street gallery hopping', 'Kadıköy street food', 'Farewell hammam'],
      },
    ],
  },
]

export const wishlistDests: WishlistDest[] = [
  {
    id: 'patagonia',
    name: 'Patagonia',
    country: 'Chile & Argentina',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=900&q=80',
    description:
      'Vast glacial lakes, jagged granite towers, and a sky that swallows you whole. The most dramatic end-of-the-road on earth.',
    bestSeason: 'Nov – Mar',
    estimatedCost: '$4,500',
    tags: ['Trekking', 'Wilderness', 'Photography'],
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Republic of Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&q=80',
    description:
      'Overwater bungalows, bioluminescent shores at night, and water so clear it looks photoshopped.',
    bestSeason: 'Dec – Apr',
    estimatedCost: '$5,800',
    tags: ['Diving', 'Luxury', 'Island Life'],
  },
  {
    id: 'cappadocia',
    name: 'Cappadocia',
    country: 'Turkey',
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=900&q=80',
    description:
      'Hot air balloons over fairy chimneys at dawn. A surreal landscape carved by wind and fire that belongs on another planet.',
    bestSeason: 'Apr – Jun, Sep – Nov',
    estimatedCost: '$2,200',
    tags: ['Hot Air Balloon', 'History', 'Scenery'],
  },
  {
    id: 'amalfi',
    name: 'Amalfi Coast',
    country: 'Italy',
    image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=900&q=80',
    description:
      'Clifftop lemon groves, pastel villages, and a coastal road that will terrify and astonish you in equal measure.',
    bestSeason: 'May – Jun, Sep',
    estimatedCost: '$3,100',
    tags: ['Scenic Drive', 'Food', 'Coast'],
  },
]

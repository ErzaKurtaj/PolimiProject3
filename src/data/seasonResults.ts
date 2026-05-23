import type { SeasonResult } from '../types'

export const seasonResults: SeasonResult[] = [
  {
    id: 'summer-results',
    heading: 'Summer Escapes',
    cards: [
      { image: '/images/mario.png', alt: 'Salt and Sun', title: 'Salt & Sun' },
      { image: '/images/Rome, pasta making class.png', alt: 'Coastal Drift', title: 'Coastal Drift' },
      {
        image: '/images/ricardo-gomez-angel-dBOZ7XL4b_E-unsplash.jpg',
        alt: 'Golden Shore',
        title: 'Golden Shore',
      },
    ],
  },
  {
    id: 'winter-results',
    heading: 'Winter Wonders',
    headingClass: 'culture',
    cards: [
      { image: '/images/norway.png', alt: 'Aurora', title: 'Aurora lit skies and winter silence' },
      { image: '/images/swiss.png', alt: 'Swiss', title: 'Quiet towns wrapped in snow and light' },
      {
        image: '/images/Best Ski Resorts in the US Where to Ski for the Ultimate Winter Adventure.png',
        alt: 'Ski',
        title: 'Clear horizons under pale winter sun',
      },
    ],
  },
  {
    id: 'monsoon-results',
    heading: 'Monsoon Calm',
    cards: [
      { image: '/images/rainparis.png', alt: 'Rain and Stone', title: 'Rain & Stone' },
      { image: '/images/rain.png', alt: 'Misty Roads', title: 'Misty Roads' },
      { image: '/images/rainyys.png', alt: 'Quiet Hills', title: 'Quiet Hills' },
    ],
  },
  {
    id: 'sea-results',
    heading: 'By the Sea',
    cards: [
      {
        image: '/images/anders-jilden-cYrMQA7a3Wc-unsplash.jpg',
        alt: 'Salt and Sun',
        title: 'Salt & Sun',
      },
      {
        image: '/images/henrique-ferreira-RKsLQoSnuTc-unsplash.jpg',
        alt: 'Open Horizon',
        title: 'Open Horizon',
      },
      {
        image: '/images/ricardo-gomez-angel-dBOZ7XL4b_E-unsplash.jpg',
        alt: 'Blue Silence',
        title: 'Blue Silence',
      },
    ],
  },
  {
    id: 'culture-results',
    heading: 'Culture in the City',
    headingClass: 'culture',
    cards: [
      { image: '/images/rome.png', alt: 'Rome', title: 'Rome (Colosseum)' },
      { image: '/images/louvre.png', alt: 'Louvre', title: 'Urban Layers' },
      { image: '/images/paris.png', alt: 'Paris', title: 'Everyday Elegance' },
      { image: '/images/japan.png', alt: 'Japan', title: 'Living History' },
    ],
  },
  {
    id: 'nature-results',
    heading: 'Ways of Experiencing Place',
    headingClass: 'culture',
    cards: [
      { image: '/images/mario.png', alt: 'Mario Kart Japan', title: 'Mario Kart in Japan (Tokyo)' },
      {
        image: '/images/Rome, pasta making class.png',
        alt: 'Pasta Rome',
        title: 'Pasta cooking class in Rome',
      },
      { image: '/images/cycling.png', alt: 'Cycling Amsterdam', title: 'Cycling in Amsterdam' },
      { image: '/images/swimming.png', alt: 'Azores', title: 'Ocean Encounters — Azores' },
      { image: '/images/turkey.png', alt: 'Cappadocia', title: 'Sky Valleys in Cappadocia' },
    ],
  },
]

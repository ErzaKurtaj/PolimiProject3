# WAVE — Travel

A React + TypeScript travel site built with Vite, featuring a destination "Oracle" quiz, a travel journal, and a trips showcase.

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev/build tooling
- [React Router](https://reactrouter.com/) for client-side routing

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the Vite dev server             |
| `npm run build`   | Type-check and build for production   |
| `npm run preview` | Preview the production build locally  |

## Project Structure

```
src/
  components/   Reusable UI components (Navbar, Hero, Oracle, Discover, etc.)
  pages/        Route-level pages (Home, Journal, Trips)
  data/         Static data used across components/pages
  hooks/        Custom React hooks
  App.tsx       Route definitions
  main.tsx      App entry point
```

## Routes

- `/` — Home page
- `/journal` — Travel journal
- `/trips` — Trips showcase

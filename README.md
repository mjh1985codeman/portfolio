# Portfolio - Michael Hodges

A personal developer portfolio built with Next.js and Tailwind CSS. Showcases projects, skills, and contact information in a single-page layout with scroll-based reveal animations.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Animation:** react-type-animation, Intersection Observer

## Sections

- **Hero** - Introduction with a typing animation
- **About** - Background and skills overview
- **Projects** - Scrollable project cards with descriptions, tech tags, screenshots, and links to live sites and repos
- **Contact** - Email, phone, LinkedIn, and GitHub links

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm start` | Run the production build |
| `npm run lint` | Run linting |

## Project Structure

```
mh-next-portfolio/
├── app/
│   ├── page.tsx            # Main page (Hero, About, Projects, Contact)
│   ├── layout.tsx          # Root layout with Navbar
│   ├── globals.css
│   └── components/
│       ├── HeroSection.jsx
│       ├── AboutSection.jsx
│       ├── ProjectSection.jsx
│       └── Navbar.jsx
├── public/
│   └── images/             # Project screenshots
├── tailwind.config.ts
├── next.config.js
└── package.json
```

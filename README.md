# Malisa Maisarah — Portfolio Website

A personal portfolio website for **Malisa Maisarah binti Azman Suhaimi**, a Social Work graduate. The site showcases her experience in psychosocial assessment, community programme coordination, and administration across 4 pages.

Built with [Astro](https://astro.build), it features a splash screen, smooth page transitions, scroll-triggered fade-in animations, and animated stat counters.

## Tech Stack

- [Astro](https://astro.build) 7 — static site framework
- [React](https://react.dev) 19 — interactive islands (`StatCounter`, `SplashScreen`)
- [Tailwind CSS](https://tailwindcss.com) 4 — styling
- [Motion](https://motion.dev) — animations
- [TypeScript](https://www.typescriptlang.org) — type safety
- [Vercel](https://vercel.com) — deployment

## Features

- 4 main pages: Home, About, Services, Contact — plus a custom 404 page
- Animated splash screen on first visit
- Smooth `astro:transitions` between pages
- Fade-in-on-scroll animations with reduced-motion support
- Animated stat counters (50+ assessments, 10+ programmes, 6 sem Dean's List)
- Sticky navbar with responsive mobile menu
- Security headers via `vercel.json`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18+ and npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
npm run build
```

Static output is generated in the `dist/` folder.

### Preview

```bash
npm run preview
```

Serves the production build locally.

## Project Structure

```
├── public/                  # Static assets (images, favicon)
├── src/
│   ├── components/
│   │   ├── Navbar.astro     # Fixed header + mobile menu
│   │   ├── Footer.astro     # Site footer
│   │   ├── FadeIn.astro     # Scroll-triggered fade-in wrapper
│   │   ├── StatCounter.tsx  # Animated number counter (React)
│   │   └── SplashScreen.tsx # Intro splash animation (React)
│   ├── layouts/
│   │   └── BaseLayout.astro # Global HTML shell (head, fonts, nav, footer)
│   ├── pages/
│   │   ├── index.astro      # Home — hero, expertise, stats, about teaser
│   │   ├── about.astro      # Bio, academics, skills, career timeline
│   │   ├── services.astro   # Areas of expertise & experience
│   │   ├── contact.astro    # Achievements + contact details
│   │   └── 404.astro        # Not-found page
│   └── styles/
│       └── global.css       # Tailwind theme, brand colors, animations
├── astro.config.mjs         # Astro + React + Tailwind config
├── tsconfig.json            # Strict TS with @/* path alias
├── vercel.json              # Deployment config + security headers
└── guide.md                 # Content plan (source of all copy)
```

## Pages

| Route       | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `/`         | Hero, areas of expertise, quick stats, about teaser, CTA       |
| `/about`    | Full bio, academic background, skills & languages, timeline    |
| `/services` | Psychosocial support, community coordination, documentation    |
| `/contact`  | Achievements & impact, contact cards (email, phone, LinkedIn)  |
| `/404`      | Custom not-found page                                          |

## Content

All site copy (bio, experience, programmes, contact details) is sourced from the content plan in [`guide.md`](./guide.md). Update that file first, then mirror changes into the relevant `.astro` page.

## Deployment

The project is configured for [Vercel](https://vercel.com):

- Build command: `npm run build`
- Output directory: `dist`
- `vercel.json` applies security headers (nosniff, frame options, referrer policy, permissions policy)

Push to a Git repo and import it in Vercel, or run:

```bash
npx vercel
```

## Scripts

| Command            | Action                              |
| ------------------ | ----------------------------------- |
| `npm run dev`      | Start dev server at localhost:4321  |
| `npm run build`    | Build static site into `dist/`      |
| `npm run preview`  | Preview the production build        |
| `npm run astro`    | Run the Astro CLI                   |

## Contact

- Email: malisamaisarah02@gmail.com
- LinkedIn: [linkedin.com/in/malisa-maisarah](https://linkedin.com/in/malisa-maisarah)
- Location: Federal Territory, Putrajaya


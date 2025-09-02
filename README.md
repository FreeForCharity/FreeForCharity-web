Free For Charity website built with Next.js App Router.

## Overview

Free For Charity connects students, professionals, and businesses with nonprofits to reduce operating costs and increase impact. This site showcases programs, enables donations, and lets visitors volunteer via global popups.

## Tech Stack

- Next.js (App Router, TypeScript)
- Tailwind-style utility classes for styling
- next/font for Google fonts (Faustina, Fauna One, Lato, Inter)

## Local Development

1) Install dependencies
```bash
npm install
```

2) Run the dev server
```bash
npm run dev
```

Visit http://localhost:3000

## Key Features

- Global popups for Donate and Volunteer
  - Context provider: `src/app/components/PopupProvider.tsx`
  - Mounted via: `src/app/components/PopupsRootClient.tsx`
  - Open from anywhere using `usePopups()` or shared buttons:
    - `DonateButton.tsx`, `VolunteerButton.tsx`

- Mobile slide-out navigation
  - `src/app/components/NavBar.tsx`
  - Hamburger opens a right-side panel with overlay; actions wired to popups

- SEO
  - Global metadata in `src/app/layout.tsx` (title template, description, OG/Twitter, robots)
  - `src/app/sitemap.ts` and `src/app/robots.ts`

## Project Structure

- `src/app/page.tsx` – Home page
- `src/app/components/*` – UI components and popups
- `src/app/data/*` – Static content (FAQs, team, testimonials)
- `public/*` – Static assets (icons, images)

## Common Tasks

- Update homepage content: edit `src/app/page.tsx`
- Change CTA copy: update text in components under `src/app/components`
- Adjust SEO: edit `metadata` in `src/app/layout.tsx`

## Deployment

Any standard Next.js hosting works (Vercel recommended). Build and start:
```bash
npm run build
npm start
```

## Notes

- Popups are globally available modals; avoid fixed floating buttons. Use `DonateButton`/`VolunteerButton` or `usePopups()` to open.
- If you add new routes, consider updating `sitemap.ts` accordingly.

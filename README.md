# TIFF Wedding Decor — Website

Marketing site for TIFF's wedding decor services, built with Next.js (App Router,
TypeScript), Tailwind CSS + shadcn/ui, and a fully static export so it can run
anywhere (Vercel for staging, Hostinger for production regardless of hosting tier).

4 pages: overview (`/`), [Hotel Wedding Decor](/hotel-wedding-decor),
[Outdoor Wedding Decor](/outdoor-wedding-decor), and
[Traditional Ceremony Decor](/traditional-ceremony-decor). All copy is sourced from
the client's content brief and lives as typed data in `content/pages/`.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in NEXT_PUBLIC_CONSULTATION_ENDPOINT
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/` — routes (`page.tsx` per page), plus `sitemap.ts`, `robots.ts`, `not-found.tsx`.
- `components/sections/` — the 8 reusable section types every page is built from
  (hero, info table, comparison table, matrix table, process steps, CTA table, FAQ,
  consultation form). All 4 pages compose the same building blocks with different data.
- `components/layout/` — header and footer.
- `components/ui/` — shadcn/ui primitives.
- `content/pages/*.ts` — the actual Vietnamese copy for each page, typed against
  `content/types.ts`.
- `content/images.ts` — image manifest (see **Adding real photos** below).
- `design-system/tiff/MASTER.md` — the design token research/rationale.
- `docs/DEPLOYMENT.md` — how to get this live on Vercel and Hostinger.
- `docs/google-apps-script/` — the lead-capture form → Google Sheet integration.

## Adding real photos

No real photography exists yet — every image slot renders a labeled placeholder
block via `components/common/placeholder-image.tsx`. To swap in a real photo:

1. Drop the file into `public/images/`.
2. In `content/images.ts`, change that key's entry from
   `{ placeholder: true, ... }` to `{ placeholder: false, src: "/images/your-file.jpg", alt: "...", aspect: "wide" }`.

No component changes needed.

## Consultation form → Google Sheet

Every page's form posts to a Google Apps Script Web App URL
(`NEXT_PUBLIC_CONSULTATION_ENDPOINT`). See
[`docs/google-apps-script/SETUP.md`](./docs/google-apps-script/SETUP.md) for how to
deploy the receiving script in your own Google account.

## Build & deploy

```bash
npm run build   # outputs a static site to /out
npx serve out   # preview the static export locally
```

See [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md) for the full Vercel + Hostinger
walkthrough.

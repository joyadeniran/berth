# Berth Tech Agency — Website

Pan-African performance marketing agency one-pager. Next.js (App Router, TypeScript), built from a Claude Design handoff bundle to match the Berth brand system (`_ds/berth-design-system`): black-and-paper contrast, signal lime, the Berth curve, Satoshi + DM Serif Display.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/page.tsx` — the one-pager: hero, proof stats, services, selected work, north-star band, why Berth, industries, contact, footer
- `app/globals.css` — Berth design tokens (color, type, spacing, radii, shadows, motion) and keyframes
- `components/` — `Header` (scroll-blur nav), `Reveal` (scroll-triggered reveal), `CountUp` (scroll-triggered stat count-up), `HeroSwirl` / `DrawOnView` (the lime SVG swirl), `WorkCard`, `Button`, `Logo`, `Icon`, `SocialIcons`
- `public/assets` — Berth logo SVGs
- `public/images` — supplied campaign/brand photography

Three of the four "Selected Work" cards (Bybit, Binance, Salonpas) are still placeholder tiles — real campaign visuals haven't been supplied yet.

## Deploy

Deployed on [Vercel](https://vercel.com), linked to this repository's `main` branch.

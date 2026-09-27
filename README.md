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
- `lib/contact.ts` — the contact inbox (`holla@berth.agency`) and the FormSubmit endpoint the lead form posts to
- `components/` — `Header` (scroll-blur nav), `Reveal` (scroll-triggered reveal), `CountUp` (scroll-triggered stat count-up), `HeroSwirl` / `DrawOnView` (the lime SVG swirl), `RotatingWord` (the cycling hero word), `HeroPointer` (cursor spotlight + parallax), `CampaignModal` (the "Start a Campaign" lead form), `WorkCard`, `Button`, `Logo`, `Icon`, `SocialIcons`
- `public/assets` — Berth logo SVGs
- `public/images` — supplied campaign/brand photography

Three of the four "Selected Work" cards (Bybit, Binance, Salonpas) are still placeholder tiles — real campaign visuals haven't been supplied yet.

## "Start a Campaign"

Every "Start a Campaign" button opens a lead-capture modal (name, email, company, budget, message) that posts straight from the browser to [FormSubmit](https://formsubmit.co), which emails the lead to `holla@berth.agency`. No backend, API key, or env vars.

**One-time setup:** the very first submission after deploy triggers an "Activate Form" email to `holla@berth.agency`. Click the link in it once, and every lead after that lands in the inbox, with Reply going straight to the lead. Until it's activated, the form tells visitors to email `holla@berth.agency` directly.

To change the inbox, edit `CONTACT_EMAIL` in `lib/contact.ts` (the new address will need the same one-time activation).

## Deploy

Deployed on [Vercel](https://vercel.com), linked to this repository's `main` branch. No env vars required.

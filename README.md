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
- `app/api/contact/route.ts` — handles "Start a Campaign" submissions, emails the lead via Resend
- `components/` — `Header` (scroll-blur nav), `Reveal` (scroll-triggered reveal), `CountUp` (scroll-triggered stat count-up), `HeroSwirl` / `DrawOnView` (the lime SVG swirl), `RotatingWord` (the cycling hero word), `CampaignModal` (the "Start a Campaign" lead form), `WorkCard`, `Button`, `Logo`, `Icon`, `SocialIcons`
- `public/assets` — Berth logo SVGs
- `public/images` — supplied campaign/brand photography

Three of the four "Selected Work" cards (Bybit, Binance, Salonpas) are still placeholder tiles — real campaign visuals haven't been supplied yet.

## "Start a Campaign"

Every "Start a Campaign" button opens a lead-capture modal (name, email, company, budget, message) that POSTs to `/api/contact`, which emails the lead via [Resend](https://resend.com).

To make it live, set these in the Vercel project's Environment Variables:

| Variable | Required | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | From resend.com. Without it, the form fails gracefully and tells the visitor to email `holla@berthtech.com` directly instead. |
| `CONTACT_TO_EMAIL` | No | Where leads land. Defaults to `holla@berthtech.com`. |
| `CONTACT_FROM_EMAIL` | No | The verified send-from address, e.g. `Berth <campaigns@berthtech.com>`. Defaults to Resend's sandbox address (`onboarding@resend.dev`), which only delivers to the Resend account owner's own email — **verify a `berthtech.com` domain in Resend and set this** before relying on the form for real leads. |

## Deploy

Deployed on [Vercel](https://vercel.com), linked to this repository's `main` branch. Redeploy (or the next push) after adding the env vars above.

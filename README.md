# Fade & Trim Barbers — Dartford

> Modern, sleek single-page Astro site for **Fade & Trim Barbers**, Dartford. Built by Bytecode Consulting Ltd as the reference design that any barbershop can adopt.

**Live preview**: run `npm run dev` and open http://localhost:4321
**Repo**: https://github.com/bccuk/barber-site

## Tech

- [Astro 5](https://astro.build) (static site, zero JS by default)
- [Tailwind CSS v4](https://tailwindcss.com) via the official Vite plugin
- Google Fonts (Playfair Display + Inter) loaded via `<link>`
- TypeScript (strict)
- LocalBusiness JSON-LD for SEO

Total runtime JavaScript: **0 KB**. The whole site is static HTML + CSS.

## Getting started

### Prerequisites

Node.js 20+ and npm.

### Install & run

```bash
git clone https://github.com/bccuk/barber-site.git
cd barber-site
npm install
npm run dev
```

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server at http://localhost:4321 |
| `npm run build` | Build production site to `dist/` |
| `npm run preview` | Preview the production build locally |

### Environment variables

Currently none required. If/when secrets are added (booking API, analytics, etc.), copy `.env.example` to `.env`. Never commit `.env`.

## Project structure

```
barber-site/
├── public/                 # Static assets (favicon, future images)
├── src/
│   ├── components/         # Hero, Services, Gallery, About, Hours, Contact, Nav, Footer
│   ├── data/site.ts        # Single source of truth: name, hours, services, prices, contact
│   ├── layouts/Layout.astro
│   ├── pages/index.astro   # Single-page scroll site
│   └── styles/global.css   # Tailwind v4 import + design tokens (@theme)
├── astro.config.mjs
└── tsconfig.json
```

### Customising for a different shop

Almost everything is in **`src/data/site.ts`** — change the shop name, hours, prices, address, socials there and the whole site updates. No need to touch component files for content.

## Sections

1. **Hero** — full-bleed dark, headline, CTAs, stat strip
2. **Services & Prices** — two-column grid, "most popular" highlight
3. **Gallery** — 6-cell grid with placeholder tiles (swap to real photos in `src/data/site.ts` + `public/`)
4. **About** — copy + pull-quote sidecard
5. **Hours & Visit** — week schedule (today's row highlighted) + Google Maps embed
6. **Book** — three quick-action cards (Call · Instagram · Walk-in) + primary CTA

## Deploy

Static output in `dist/` works on:

- **Cloudflare Pages** (recommended — free, fast, custom domain) — connect the repo, set build command `npm run build`, output `dist`
- **GitHub Pages** — see https://docs.astro.build/en/guides/deploy/github/
- **Netlify**, **Vercel** — both auto-detect Astro

## Security

- Secrets live in `.env` (gitignored).
- Pre-commit hook scans for common secret patterns.
- See [`.github/SECURITY.md`](.github/SECURITY.md) for disclosure policy.

## License

MIT — see [LICENSE](LICENSE).

---

Prepared by **Bytecode Consulting Ltd** · AI • Cloud • Software Delivery • Training
[bytecodeconsulting.com](https://bytecodeconsulting.com) · admin@bytecodeconsulting.com

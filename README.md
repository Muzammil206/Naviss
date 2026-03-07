# Naviss Technologies — Website (v5 · 2026 Design)

Next.js 14 · TypeScript · Tailwind CSS

## Design System — 2026 Research-Based

**Color foundation: Pantone 2026 Cloud Dancer**
- Base: `#F0EEE9` — warm off-white (NOT pure white, NOT gray)
- Accent: `#1B5E3B` — Verdant Green (2026 trending for nature/tech/sustainability)
- Text: `#141210` — warm near-black with brownish undertone
- NO gradients. NO glow effects. NO glassmorphism. NO aurora blobs.

**Typography: Kinetic serif + minimal mono**
- `Playfair Display` — oversized editorial headlines (900 weight hero)
- `DM Sans` — clean body text (300–400 weight only)
- `DM Mono` — labels and data only

**Photography: 100% real Unsplash**
- Satellite/aerial views, African cities, field work, infrastructure
- Zero illustrations, zero emoji, zero stock-photo people

**Icons: Inline SVG (Lucide-style)**
- Hand-coded SVG paths — no icon fonts, no emoji

**Texture: Grain noise overlay** — 2.5% opacity, fixed position. Adds "printed" depth.

**Cursor: Custom Verdant Green dot + trailing ring**

## Pages / Sections
1. Nav (fixed, scroll-aware, mobile drawer)
2. Hero (full-bleed satellite bg, word-by-word serif reveal)
3. Marquee (continuous ticker)
4. Statement / Opportunity (photo + numbered points + stat callout)
5. Services (editorial list rows)
6. **Projects Showcase** (featured full-width + 5-card grid, real photos)
7. Process (4-column step cards)
8. Sectors (8 SVG icon cards)
9. Tech Stack (grouped tag grid)
10. About (mission · vision · team photo · values grid)
11. Contact (dark section, large serif CTA)
12. Footer (dark)

## Quick Start
```bash
unzip naviss-nextjs-v5.zip
cd naviss
npm install
npm run dev
# → http://localhost:3000
```

## Customise
| File | Purpose |
|------|---------|
| `lib/data.ts` | All content — projects, services, copy |
| `app/globals.css` | Color tokens, typography, animations |
| `tailwind.config.ts` | Design tokens |

## Deploy
```bash
npx vercel --prod
```

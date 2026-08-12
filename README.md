# Teja For TEDx

Scroll-driven candidacy portfolio of **Suvan Teja Pantina** for the position of
**Vice-Chairperson, TEDxJaiHindCollege**, with responsibility for the Logistics,
Hospitality, Public Relations and Security departments.

> Independent personal application. Not an official communication of
> TEDxJaiHindCollege, Jai Hind College, or TED. TED and TEDx are trademarks of
> TED Conferences, LLC.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- three.js via `@react-three/fiber`
- No backend, no database, no environment variables

## How it works

A single fixed WebGL canvas sits behind the page at `z-index: 0`. Document
scroll position is normalised to `0 -> 1` and published through a React **ref**
(`src/components/ScrollProgress.tsx`), so the scene reads it every frame without
re-rendering any page content.

Scroll drives:

| Element | Behaviour |
| --- | --- |
| Camera | Dollies forward and rises as the page advances; pointer adds parallax |
| Star field | Rotates continuously, tilts with scroll |
| Core icosahedron | Tightens and shifts from white to TED red as you descend |
| Four pillars | Scattered at the top, lock into formation at the departments section |

The four pillars are the four departments - scattered until someone takes
responsibility for all of them.

## Accessibility and resilience

- All content is real semantic HTML (`section`, `h1`-`h3`, `ol`, `ul`). The 3D
  layer is decorative and `aria-hidden`, so the page is fully screen-reader
  readable and search-indexable.
- `prefers-reduced-motion: reduce` -> WebGL never mounts, reveal transitions are
  disabled, smooth scroll is turned off. A static gradient renders instead.
- No WebGL support -> same static fallback, no error.
- Mobile -> fewer particles (420 vs 1100) and capped device pixel ratio.
- Native scrolling only; there is no scroll hijacking.
- Skip-to-content link and visible red focus rings throughout.

## Editing the content

Everything shown on the page lives in **`src/data/content.ts`**. Edit that one
file to update text - components never need touching.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

## Deploying to Vercel

1. Go to vercel.com -> **Add New... -> Project**.
2. Import `TJ-zip/Teja-For-TedX`.
3. Framework preset is detected as **Next.js**. Leave build command
   (`next build`) and output directory at their defaults.
4. Deploy. **No environment variables are required.**

## CI

- `.github/workflows/validate.yml` - install, lint, typecheck, build on every
  push and pull request. This is the gate.
- `.github/workflows/ci-report.yml` - runs on changes to `ci-request.txt`,
  captures full logs into `ci-reports/latest.md`, and commits it back to the
  branch. `ci-request.txt` can only select script names already declared in
  `package.json`; it cannot introduce shell commands.

# PROJECT STATUS

## Product objective

A scroll-driven three.js website that presents Suvan Teja Pantina's candidacy for
Vice-Chairperson of TEDxJaiHindCollege, covering the Logistics, Hospitality,
Public Relations and Security departments. It doubles as his resume.

## Current architecture

Single-page Next.js App Router site. One fixed WebGL canvas behind semantic HTML
content. Scroll progress (0-1) is published via a React ref and consumed by the
scene each frame. No API routes, no server state, no persistence.

## Technology stack

Next.js 16.3.0, React 19, TypeScript 5.6, Tailwind CSS 3.4,
three 0.169, @react-three/fiber 9. ESLint 9 flat config using
eslint-config-next's native flat entry points. Package manager: npm.

## Working features

- Hero, candidacy statement, four-department mandate, leadership rationale,
  experience, recognition, background, contact sections
- Scroll-driven camera, star field, core icosahedron, four department pillars
- Reduced-motion and no-WebGL static fallback (live-reactive via
  useSyncExternalStore-backed media queries)
- Mobile particle/DPR reduction
- Skip link, visible focus states, aria-hidden decorative canvas

## Current task

`fix/wwm-dates-and-linkedin`: WWM internship dates (06/2026 - 09/2026) and
corrected LinkedIn URL.

## Pending tasks

- Add `public/resume.pdf` plus a download button (binary asset cannot be
  committed through the available text-only file API). Owner said this is
  optional / probably not needed.
- Add a custom OG image (same binary constraint).
- Optional cleanup: drop the now-unused `@eslint/eslintrc` devDependency
  (requires lockfile regeneration via CI).

## Known issues

- No automated tests exist; `npm test` is intentionally absent and CI skips it.

## Required environment variables

None.

## Deployment information

Vercel via the GitHub integration (project `teja-for-ted-x`, team `code-lite`).
Production: https://teja-for-ted-x-ecru.vercel.app/ (confirmed live by owner).
Preview deployments build per branch push; `Vercel` commit status and
`Vercel Preview Comments` check report results. Next.js preset, default build
command and output directory.

## Important architectural decisions

- Scroll progress via ref, not state, to avoid per-frame React re-renders.
- `@react-three/drei` deliberately omitted; the scene uses raw fiber + three to
  keep the dependency surface and version-conflict risk small.
- Content centralised in `src/data/content.ts` so copy edits never touch JSX.
- All content is server-rendered HTML; WebGL is decorative and client-only.
- Star field uses a seeded mulberry32 PRNG (not Math.random) so render is
  idempotent, per react-hooks v7 purity rules.
- ESLint uses eslint-config-next's native flat configs directly; FlatCompat
  must NOT be reintroduced (it crashes ESLint's legacy validator with
  "Converting circular structure to JSON").

## Last completed change

PR #2 merged to main: fixed the ESLint FlatCompat crash and all 7 react-hooks
v7 errors in `src/components/Scene.tsx`. CI report run 31567538138: npm ci,
lint, typecheck, build all exit 0. Vercel deployment live.

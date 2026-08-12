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

Next.js 14.2.15, React 18.3.1, TypeScript 5.6, Tailwind CSS 3.4,
three 0.169.0, @react-three/fiber 8.17.10. Package manager: npm.

## Working features

- Hero, candidacy statement, four-department mandate, leadership rationale,
  experience, recognition, background, contact sections
- Scroll-driven camera, star field, core icosahedron, four department pillars
- Reduced-motion and no-WebGL static fallback
- Mobile particle/DPR reduction
- Skip link, visible focus states, aria-hidden decorative canvas

## Current task

Initial build on `feature/scroll-driven-candidacy-site`; validating via GitHub
Actions.

## Pending tasks

- Add `public/resume.pdf` plus a download button (binary asset could not be
  committed through the available text-only file API).
- Add a custom OG image.
- Confirm the WWM internship start date and add it to the experience entry.

## Known issues

- The Worldwide Media experience entry shows `Current` with no start date,
  because no start date was supplied.
- No automated tests exist; `npm test` is intentionally absent and CI skips it.

## Required environment variables

None.

## Deployment information

Vercel, Next.js preset, default build command and output directory. Not yet
imported into a Vercel project - no Vercel tooling was available in the session
that created this repository, so deployment has not been verified.

## Important architectural decisions

- Scroll progress via ref, not state, to avoid per-frame React re-renders.
- `@react-three/drei` deliberately omitted; the scene uses raw fiber + three to
  keep the dependency surface and version-conflict risk small.
- Content centralised in `src/data/content.ts` so copy edits never touch JSX.
- All content is server-rendered HTML; WebGL is decorative and client-only.

## Last completed change

Initial implementation committed to `feature/scroll-driven-candidacy-site`.

# CI report

- Branch: `feature/scroll-driven-candidacy-site`
- Commit: `e064007de2d58bdb6fdf022979b5f6902f233367`
- Run: 31562608576
- Generated: 2026-08-12T04:14:37Z

## `npm install` — exit 0

```
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
npm warn deprecated glob@7.2.3: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
npm warn deprecated glob@10.3.10: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
npm warn deprecated next@14.2.15: This version has a security vulnerability. Please upgrade to a patched version. See https://nextjs.org/blog/security-update-2025-12-11 for more details.

added 415 packages, and audited 416 packages in 33s

161 packages are looking for funding
  run `npm fund` for details

5 vulnerabilities (4 high, 1 critical)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

## `npm run lint` — exit 0

```

> teja-for-tedx@1.0.0 lint
> next lint

Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry

✔ No ESLint warnings or errors
```

## `npm run typecheck` — exit 0

```

> teja-for-tedx@1.0.0 typecheck
> tsc --noEmit

```

## `npm run build` — exit 0

```

> teja-for-tedx@1.0.0 build
> next build

  ▲ Next.js 14.2.15

   Creating an optimized production build ...
 ✓ Compiled successfully
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/4) ...
   Generating static pages (1/4) 
   Generating static pages (2/4) 
   Generating static pages (3/4) 
 ✓ Generating static pages (4/4)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                              Size     First Load JS
┌ ○ /                                    1.74 kB          89 kB
└ ○ /_not-found                          873 B          88.2 kB
+ First Load JS shared by all            87.3 kB
  ├ chunks/117-c1bbf79bcb0a4cce.js       31.6 kB
  ├ chunks/fd9d1056-09e73e8bd2d8627e.js  53.6 kB
  └ other shared chunks (total)          2.06 kB


○  (Static)  prerendered as static content

```


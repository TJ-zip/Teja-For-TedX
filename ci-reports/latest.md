# CI report

- Branch: `fix/eslint-flat-config`
- Commit: `6cf8821dc4f2a7a82dc1d1f9fea0395683f0562f`
- Run: 31567538138
- Generated: 2026-08-12T05:44:34Z

## `npm ci` — exit 0

```

added 412 packages, and audited 413 packages in 7s

158 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## `npm run lint` — exit 0

```

> teja-for-tedx@1.0.0 lint
> eslint .

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

▲ Next.js 16.3.0 (Turbopack)
✓ Running next.config.mjs took 20ms
⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry


  Creating an optimized production build ...
✓ Compiled successfully in 5.1s
  Running TypeScript ...

  We detected TypeScript in your project and reconfigured your tsconfig.json file for you.
  The following suggested values were added to your tsconfig.json. These values can be changed to fit your project's needs:

  	- include was updated to add '.next/dev/types/**/*.ts'

  The following mandatory changes were made to your tsconfig.json:

  	- jsx was set to react-jsx (next.js uses the React automatic runtime)

  Finished TypeScript in 3.2s ...
  Collecting page data using 3 workers ...
  Generating static pages using 3 workers (0/3) ...
✓ Generating static pages using 3 workers (3/3) in 167ms
  Finalizing page optimization ...

Route (app)
┌ ○ /
└ ○ /_not-found


○  (Static)  prerendered as static content

```


# CI report

- Branch: `main`
- Commit: `dd6a4838bee87caa4a2b40fc549d3a2f736c31f1`
- Run: 31566600416
- Generated: 2026-08-12T05:27:41Z

## `npm ci` — exit 0

```

added 412 packages, and audited 413 packages in 11s

158 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## `npm run lint` — exit 2

```

> teja-for-tedx@1.0.0 lint
> eslint .


Oops! Something went wrong! :(

ESLint: 9.39.5

TypeError: Converting circular structure to JSON
    --> starting at object with constructor 'Object'
    |     property 'configs' -> object with constructor 'Object'
    |     property 'flat' -> object with constructor 'Object'
    |     ...
    |     property 'plugins' -> object with constructor 'Object'
    --- property 'react' closes the circle
Referenced from: 
    at JSON.stringify (<anonymous>)
    at file:///home/runner/work/Teja-For-TedX/Teja-For-TedX/node_modules/@eslint/eslintrc/lib/shared/config-validator.js:308:45
    at Array.map (<anonymous>)
    at ConfigValidator.formatErrors (file:///home/runner/work/Teja-For-TedX/Teja-For-TedX/node_modules/@eslint/eslintrc/lib/shared/config-validator.js:299:23)
    at ConfigValidator.validateConfigSchema (file:///home/runner/work/Teja-For-TedX/Teja-For-TedX/node_modules/@eslint/eslintrc/lib/shared/config-validator.js:330:84)
    at ConfigArrayFactory._normalizeConfigData (file:///home/runner/work/Teja-For-TedX/Teja-For-TedX/node_modules/@eslint/eslintrc/lib/config-array-factory.js:676:19)
    at ConfigArrayFactory._loadConfigData (file:///home/runner/work/Teja-For-TedX/Teja-For-TedX/node_modules/@eslint/eslintrc/lib/config-array-factory.js:641:21)
    at ConfigArrayFactory._loadExtendedShareableConfig (file:///home/runner/work/Teja-For-TedX/Teja-For-TedX/node_modules/@eslint/eslintrc/lib/config-array-factory.js:946:21)
    at ConfigArrayFactory._loadExtends (file:///home/runner/work/Teja-For-TedX/Teja-For-TedX/node_modules/@eslint/eslintrc/lib/config-array-factory.js:814:25)
    at ConfigArrayFactory._normalizeObjectConfigDataBody (file:///home/runner/work/Teja-For-TedX/Teja-For-TedX/node_modules/@eslint/eslintrc/lib/config-array-factory.js:752:25)
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
✓ Running next.config.mjs took 22ms
⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry


  Creating an optimized production build ...
✓ Compiled successfully in 5.3s
  Running TypeScript ...

  We detected TypeScript in your project and reconfigured your tsconfig.json file for you.
  The following suggested values were added to your tsconfig.json. These values can be changed to fit your project's needs:

  	- include was updated to add '.next/dev/types/**/*.ts'

  The following mandatory changes were made to your tsconfig.json:

  	- jsx was set to react-jsx (next.js uses the React automatic runtime)

  Finished TypeScript in 3.1s ...
  Collecting page data using 3 workers ...
  Generating static pages using 3 workers (0/3) ...
✓ Generating static pages using 3 workers (3/3) in 171ms
  Finalizing page optimization ...

Route (app)
┌ ○ /
└ ○ /_not-found


○  (Static)  prerendered as static content

```


# CI report

- Branch: `fix/eslint-flat-config`
- Commit: `c60328fc68e3a89c68a06beb653fd62bb81ce040`
- Run: 31567291702
- Generated: 2026-08-12T05:40:07Z

## `npm ci` — exit 0

```

added 412 packages, and audited 413 packages in 11s

158 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## `npm run lint` — exit 1

```

> teja-for-tedx@1.0.0 lint
> eslint .


/home/runner/work/Teja-For-TedX/Teja-For-TedX/src/components/Scene.tsx
   24:26  error  Error: Cannot call impure function during render

`Math.random` is an impure function. Calling an impure function can produce unstable results that update unpredictably when the component happens to re-render. (https://react.dev/reference/rules/components-and-hooks-must-be-pure#components-and-hooks-must-be-idempotent).

/home/runner/work/Teja-For-TedX/Teja-For-TedX/src/components/Scene.tsx:24:26
  22 |     const colors = new Float32Array(count * 3);
  23 |     for (let i = 0; i < count; i += 1) {
> 24 |       const radius = 6 + Math.random() * 26;
     |                          ^^^^^^^^^^^^^ Cannot call impure function
  25 |       const theta = Math.random() * Math.PI * 2;
  26 |       const y = (Math.random() - 0.5) * 26;
  27 |       positions[i * 3] = Math.cos(theta) * radius;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     react-hooks/purity
   25:21  error  Error: Cannot call impure function during render

`Math.random` is an impure function. Calling an impure function can produce unstable results that update unpredictably when the component happens to re-render. (https://react.dev/reference/rules/components-and-hooks-must-be-pure#components-and-hooks-must-be-idempotent).

/home/runner/work/Teja-For-TedX/Teja-For-TedX/src/components/Scene.tsx:25:21
  23 |     for (let i = 0; i < count; i += 1) {
  24 |       const radius = 6 + Math.random() * 26;
> 25 |       const theta = Math.random() * Math.PI * 2;
     |                     ^^^^^^^^^^^^^ Cannot call impure function
  26 |       const y = (Math.random() - 0.5) * 26;
  27 |       positions[i * 3] = Math.cos(theta) * radius;
  28 |       positions[i * 3 + 1] = y;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          react-hooks/purity
   26:18  error  Error: Cannot call impure function during render

`Math.random` is an impure function. Calling an impure function can produce unstable results that update unpredictably when the component happens to re-render. (https://react.dev/reference/rules/components-and-hooks-must-be-pure#components-and-hooks-must-be-idempotent).

/home/runner/work/Teja-For-TedX/Teja-For-TedX/src/components/Scene.tsx:26:18
  24 |       const radius = 6 + Math.random() * 26;
  25 |       const theta = Math.random() * Math.PI * 2;
> 26 |       const y = (Math.random() - 0.5) * 26;
     |                  ^^^^^^^^^^^^^ Cannot call impure function
  27 |       positions[i * 3] = Math.cos(theta) * radius;
  28 |       positions[i * 3 + 1] = y;
  29 |       positions[i * 3 + 2] = Math.sin(theta) * radius - 20;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          react-hooks/purity
   31:20  error  Error: Cannot call impure function during render

`Math.random` is an impure function. Calling an impure function can produce unstable results that update unpredictably when the component happens to re-render. (https://react.dev/reference/rules/components-and-hooks-must-be-pure#components-and-hooks-must-be-idempotent).

/home/runner/work/Teja-For-TedX/Teja-For-TedX/src/components/Scene.tsx:31:20
  29 |       positions[i * 3 + 2] = Math.sin(theta) * radius - 20;
  30 |
> 31 |       const tint = Math.random() < 0.22 ? RED : WHITE;
     |                    ^^^^^^^^^^^^^ Cannot call impure function
  32 |       colors[i * 3] = tint.r;
  33 |       colors[i * 3 + 1] = tint.g;
  34 |       colors[i * 3 + 2] = tint.b;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            react-hooks/purity
  165:12  error  Error: Cannot modify local variables after render completes

This argument is a function which may reassign or mutate `camera` after render, which can cause inconsistent behavior on subsequent renders. Consider using state instead.

/home/runner/work/Teja-For-TedX/Teja-For-TedX/src/components/Scene.tsx:165:12
  163 |   }, []);
  164 |
> 165 |   useFrame((_, delta) => {
      |            ^^^^^^^^^^^^^^^
> 166 |     const dt = Math.min(delta, 0.1);
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 167 |     const p = progress.current;
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 168 |     camera.position.x = damp(camera.position.x, pointer.current.x * 0.6, 3, dt);
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 169 |     camera.position.y = damp(camera.position.y, p * 2.6 - pointer.current.y * 0.4, 3, dt);
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 170 |     camera.position.z = damp(camera.position.z, 7.5 - p * 4.2, 2.2, dt);
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 171 |     camera.lookAt(0, p * 1.4, -3);
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 172 |   });
      | ^^^^ This function may (indirectly) reassign or modify `camera` after render
  173 |
  174 |   return null;
  175 | }

/home/runner/work/Teja-For-TedX/Teja-For-TedX/src/components/Scene.tsx:168:5
  166 |     const dt = Math.min(delta, 0.1);
  167 |     const p = progress.current;
> 168 |     camera.position.x = damp(camera.position.x, pointer.current.x * 0.6, 3, dt);
      |     ^^^^^^^^^^^^^^^ This modifies `camera`
  169 |     camera.position.y = damp(camera.position.y, p * 2.6 - pointer.current.y * 0.4, 3, dt);
  170 |     camera.position.z = damp(camera.position.z, 7.5 - p * 4.2, 2.2, dt);
  171 |     camera.lookAt(0, p * 1.4, -3);  react-hooks/immutability
  168:5   error  Error: This value cannot be modified

Modifying a value returned from a hook is not allowed. Consider moving the modification into the hook where the value is constructed.

/home/runner/work/Teja-For-TedX/Teja-For-TedX/src/components/Scene.tsx:168:5
  166 |     const dt = Math.min(delta, 0.1);
  167 |     const p = progress.current;
> 168 |     camera.position.x = damp(camera.position.x, pointer.current.x * 0.6, 3, dt);
      |     ^^^^^^^^^^^^^^^ `camera` cannot be modified
  169 |     camera.position.y = damp(camera.position.y, p * 2.6 - pointer.current.y * 0.4, 3, dt);
  170 |     camera.position.z = damp(camera.position.z, 7.5 - p * 4.2, 2.2, dt);
  171 |     camera.lookAt(0, p * 1.4, -3);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               react-hooks/immutability
  196:5   error  Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:
* Update external systems with the latest state from React.
* Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

/home/runner/work/Teja-For-TedX/Teja-For-TedX/src/components/Scene.tsx:196:5
  194 |     const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  195 |     const small = window.matchMedia("(max-width: 768px)").matches;
> 196 |     setCount(small ? 420 : 1100);
      |     ^^^^^^^^ Avoid calling setState() directly within an effect
  197 |     // No WebGL, or the visitor has asked for reduced motion -> stay static.
  198 |     setEnabled(!reduced && supportsWebGL());
  199 |   }, []);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          react-hooks/set-state-in-effect

✖ 7 problems (7 errors, 0 warnings)

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
✓ Running next.config.mjs took 21ms
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
✓ Generating static pages using 3 workers (3/3) in 185ms
  Finalizing page optimization ...

Route (app)
┌ ○ /
└ ○ /_not-found


○  (Static)  prerendered as static content

```


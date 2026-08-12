// eslint-config-next 16 ships flat-config-native entry points, so they are
// imported directly. Do NOT bridge them through @eslint/eslintrc FlatCompat:
// that routes the already-flat config into ESLint's legacy eslintrc validator,
// which crashes on the circular plugin references inside the config objects
// ("Converting circular structure to JSON").
import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const config = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "node_modules/**",
      "next-env.d.ts",
      "ci-reports/**",
    ],
  },
  ...coreWebVitals,
  ...typescript,
];

export default config;

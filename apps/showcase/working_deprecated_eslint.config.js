// import { FlatCompat } from '@eslint/eslintrc';
// import js from '@eslint/js';
// import path from 'path';
// import { fileURLToPath } from 'url';
import baseConfig from '../../eslint.config.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
//   recommendedConfig: js.configs.recommended,
// });

export default [
  ...baseConfig,
  // ...compat.extends(
  //   'plugin:@nx/react-typescript',
  //   'next',
  //   'next/core-web-vitals'
  // ),
  // {
  //   files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
  //   rules: {
  //     '@next/next/no-html-link-for-pages': ['error', 'apps/showcase/pages'],
  //   },
  // },
  // {
  //   files: ['**/*.ts', '**/*.tsx'],
  //   rules: {},
  // },
  // {
  //   files: ['**/*.js', '**/*.jsx'],
  //   rules: {},
  // },
  // ...compat.config({ env: { jest: true } }).map((config) => ({
  //   ...config,
  //   files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.spec.js', '**/*.spec.jsx'],
  //   rules: {
  //     ...config.rules,
  //   },
  // })),
  { ignores: ['.next/**/*'] },
];

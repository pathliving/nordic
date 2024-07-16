import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nxEslintPlugin from '@nx/eslint-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  { plugins: { '@nx': nxEslintPlugin } },
  {
    // files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // '@nx/enforce-module-boundaries': [
      // 'error',
      // {
      // enforceBuildableLibDependency: true,
      // allow: [],
      //   depConstraints: [
      //     {
      //       sourceTag: '*',
      //       onlyDependOnLibsWithTags: ['*'],
      //     },
      //   ],
      // },
      // ],
    },
  },
  ...compat.config({ extends: ['plugin:@nx/typescript'] }).map((config) => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...config.rules,
    },
  })),
  // ...compat.config({ extends: ['plugin:@nx/javascript'] }).map((config) => ({
  //   ...config,
  //   files: ['**/*.js', '**/*.jsx'],
  //   rules: {
  //     ...config.rules,
  //   },
  // })),
];

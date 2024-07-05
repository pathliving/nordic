import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import nxEslintPlugin from '@nx/eslint-plugin';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import deprecatedPlugin from 'eslint-plugin-deprecation';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const appsConfigs = getProjectConfigs('apps');
const libsConfigs = getProjectConfigs('libs');

const config = [
  eslintConfigPrettier,
  {
    files: ['**/*{.,spec.,test.}{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.base.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
      deprecation: deprecatedPlugin,
      '@nx': nxEslintPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...tsPlugin.configs['recommended-requiring-type-checking'].rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-img-element': 'error',
      '@next/next/no-duplicate-head': 'off',
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          // Read more: https://nx.dev/getting-started/tutorials/react-monorepo-tutorial#imposing-constraints-with-module-boundary-rules
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
      'deprecation/deprecation': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-return': 'off',
      'no-console': 'error',
    },
  },
  ...compat
    .config({
      extends: [
        'plugin:@nx/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
    })
    .map((config) => ({
      ...config,
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        ...config.rules,
      },
    })),
  {
    ignores: [
      'eslint.config.js',
      'node_modules',
      '**/public',
      '**/build',
      '**/json-server',
      '**/.next',
      '**/.storybook',
    ],
  },
  ...appsConfigs,
  ...libsConfigs,
];

export default config;

function getProjectConfigs(dirPath) {
  const fullPath = path.join(__dirname, dirPath);
  return fs
    .readdirSync(fullPath)
    .filter((dir) => {
      return fs.statSync(path.join(fullPath, dir)).isDirectory();
    })
    .map((project) => ({
      files: [`${dirPath}/${project}/**/*.{ts,tsx}`],
      languageOptions: {
        parserOptions: {
          project: path.join(fullPath, project, 'tsconfig.json'),
        },
      },
      rules: {
        // Project-specific rules
      },
    }));
}

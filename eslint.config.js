import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import nxEslintPlugin from '@nx/eslint-plugin';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import deprecatedPlugin from 'eslint-plugin-deprecation';
import eslintPluginJest from 'eslint-plugin-jest';
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
      // parserOptions: {
      //   project: true,
      //   tsconfigRootDir: import.meta.dirname,
      // },
      // parserOptions: {
      //   project: ['./tsconfig.json'],
      //   tsconfigRootDir: __dirname,
      // },
      parserOptions: {
        // project: ['./tsconfig.base.json'],
        project: './tsconfig.base.json',
        // project: ['./tsconfig.json'],
        // project: ['./apps/dashboard/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      // '@typescript-eslint': tsPlugin.configs.recommended,
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
  {
    files: [
      'vitest.config.ts',
      'vitest.base.config.ts',
      'apps/**/vitest.config.ts',
      'libs/**/vitest.config.ts',
    ],
    rules: {
      '@nx/enforce-module-boundaries': 'off',
    },
  },
  {
    files: ['src/**/*.spec.ts'],
    plugins: { jest: eslintPluginJest },
    languageOptions: {
      globals: eslintPluginJest.environments.globals.globals,
    },
    rules: {
      'jest/valid-expect': [
        'error',
        {
          alwaysAwait: true,
        },
      ],
      'jest/prefer-to-be': 'error',
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

// import { FlatCompat } from '@eslint/eslintrc';
// import js from '@eslint/js';
// import nextPlugin from '@next/eslint-plugin-next';
// import nxEslintPlugin from '@nx/eslint-plugin';
// import tsPlugin from '@typescript-eslint/eslint-plugin';
// import tsParser from '@typescript-eslint/parser';
// import eslintConfigPrettier from 'eslint-config-prettier';
// import deprecatedPlugin from 'eslint-plugin-deprecation';
// import eslintPluginJest from 'eslint-plugin-jest';
// import reactPlugin from 'eslint-plugin-react';
// import reactHooksPlugin from 'eslint-plugin-react-hooks';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const config = tsEslint.config(
//   eslintConfigPrettier,
//   ...tsEslint.configs.recommendedTypeChecked,
//   {
//     languageOptions: {
//       parserOptions: {
//         project: ['./tsconfig.json'],
//         tsconfigRootDir: import.meta.dirname,
//       },
//     },
//   },
//   { plugins: { '@nx': nxEslintPlugin } },
//   {
//     files: ['**/*.{ts,tsx}'],
//     plugins: {
//       react: reactPlugin,
//       'react-hooks': reactHooksPlugin,
//       '@next/next': nextPlugin,
//       // deprecation: deprecatedPlugin,
//     },
//     rules: {
//       ...reactPlugin.configs['jsx-runtime'].rules,
//       ...reactHooksPlugin.configs.recommended.rules,
//       // ...deprecatedPlugin.configs.recommended.rules,
//       ...nextPlugin.configs.recommended.rules,
//       ...nextPlugin.configs['core-web-vitals'].rules,
//       '@next/next/no-img-element': 'error',
//       '@next/next/no-duplicate-head': 'off',
//       '@nx/enforce-module-boundaries': [
//         'error',
//         {
//           enforceBuildableLibDependency: true,
//           allow: [],
//           depConstraints: [
//             {
//               sourceTag: '*',
//               onlyDependOnLibsWithTags: ['*'],
//             },
//           ],
//         },
//       ],
//       // 'deprecation/deprecation': 'error',
//     },
//   },
//   {
//     files: ['src/**/*.spec.ts'],
//     plugins: { jest: eslintPluginJest },
//     languageOptions: {
//       globals: eslintPluginJest.environments.globals.globals,
//     },
//     rules: {
//       'jest/valid-expect': [
//         'error',
//         {
//           alwaysAwait: true,
//         },
//       ],
//       'jest/prefer-to-be': 'error',
//     },
//   },
//   {
//     rules: {
//       '@typescript-eslint/no-explicit-any': 'warn',
//       '@typescript-eslint/no-unsafe-assignment': 'warn',
//       '@typescript-eslint/no-unsafe-argument': 'warn',
//       '@typescript-eslint/no-unsafe-return': 'off',
//       'no-console': 'error',
//     },
//   },
//   {
//     files: ['**/*.js'],
//     extends: [tsEslint.configs.disableTypeChecked],
//   },
//   ...compat.config({ extends: ['plugin:@nx/typescript'] }).map((config) => ({
//     ...config,
//     files: ['**/*.ts', '**/*.tsx'],
//     rules: {
//       ...config.rules,
//     },
//   })),
//   {
//     ignores: [
//       'eslint.config.js',
//       'design-template',
//       'node_modules',
//       'json-server',
//       'public',
//       'build',
//     ],
//   }
// );

/// ---------------------------

// const config = [
//   eslintConfigPrettier,
//   ...tsEslint.configs.recommendedTypeChecked,
//   {
//     languageOptions: {
//       parser: tsParser,
//       parserOptions: {
//         // parser: '@typescript-eslint/parser',
//         project: ['./tsconfig.json'],
//         // project: '@typescript-eslint/parser',
//         tsconfigRootDir: import.meta.dirname,
//       },
//     },
//   },
//   {
//     plugins: {
//       '@nx': nxEslintPlugin,
//       '@typescript-eslint': tsPlugin,
//       tsPlugin,
//     },
//   },
//   {
//     files: ['**/*.{ts,tsx}'],
//     plugins: {
//       react: reactPlugin,
//       'react-hooks': reactHooksPlugin,
//       '@next/next': nextPlugin,
//       // deprecation: deprecatedPlugin,
//     },
//     rules: {
//       ...reactPlugin.configs['jsx-runtime'].rules,
//       ...reactHooksPlugin.configs.recommended.rules,
//       // ...deprecatedPlugin.configs.recommended.rules,
//       ...nextPlugin.configs.recommended.rules,
//       ...nextPlugin.configs['core-web-vitals'].rules,
//       '@next/next/no-img-element': 'error',
//       '@next/next/no-duplicate-head': 'off',
//       '@nx/enforce-module-boundaries': [
//         'error',
//         {
//           enforceBuildableLibDependency: true,
//           allow: [],
//           depConstraints: [
//             {
//               sourceTag: '*',
//               onlyDependOnLibsWithTags: ['*'],
//             },
//           ],
//         },
//       ],
//       // 'deprecation/deprecation': 'error',
//     },
//   },
//   {
//     files: ['src/**/*.spec.ts'],
//     plugins: { jest: eslintPluginJest },
//     languageOptions: {
//       globals: eslintPluginJest.environments.globals.globals,
//     },
//     rules: {
//       'jest/valid-expect': [
//         'error',
//         {
//           alwaysAwait: true,
//         },
//       ],
//       'jest/prefer-to-be': 'error',
//     },
//   },
//   {
//     rules: {
//       '@typescript-eslint/no-explicit-any': 'warn',
//       '@typescript-eslint/no-unsafe-assignment': 'warn',
//       '@typescript-eslint/no-unsafe-argument': 'warn',
//       '@typescript-eslint/no-unsafe-return': 'off',
//       'no-console': 'error',
//     },
//   },
//   ...compat
//     .config({
//       extends: [
//         'plugin:@nx/typescript',
//         'plugin:@typescript-eslint/recommended',
//       ],
//       // parser: '@typescript-eslint/parser',
//     })
//     .map((config) => ({
//       ...config,
//       files: ['**/*.ts', '**/*.tsx'],
//       rules: {
//         ...config.rules,
//       },
//     })),
//   // {
//   //   files: ['**/*.js'],
//   //   extends: [tsEslint.configs.disableTypeChecked],
//   // },
//   // ...compat
//   //   .config({ extends: ['plugin:@typescript-eslint/recommended'] })
//   //   .map((config) => ({
//   //     ...config,
//   //     files: ['**/*.js'],
//   //     // files: ['**/*.ts', '**/*.tsx'],
//   //     rules: {
//   //       ...config.rules,
//   //     },
//   //   })),
//   {
//     ignores: [
//       'eslint.config.js',
//       'design-template',
//       'node_modules',
//       'json-server',
//       'public',
//       'build',
//     ],
//   },
// ];

// export default config;

/// ----------------------

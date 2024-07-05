import jsEslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginJest from 'eslint-plugin-jest';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
// import deprecatedPlugin from 'eslint-plugin-deprecation';
import tsEslint from 'typescript-eslint';

const config = tsEslint.config(
  jsEslint.configs.recommended,
  eslintConfigPrettier,
  ...tsEslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
      // deprecation: deprecatedPlugin,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      // ...deprecatedPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-img-element': 'error',
      '@next/next/no-duplicate-head': 'off',
      // 'deprecation/deprecation': 'error',
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
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-return': 'off',
      'no-console': 'error',
    },
  },
  {
    files: ['**/*.js'],
    extends: [tsEslint.configs.disableTypeChecked],
  },
  {
    ignores: [
      'eslint.config.js',
      'design-template',
      'node_modules',
      'json-server',
      'public',
    ],
  }
);

export default config;

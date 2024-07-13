/* // import alias from '@rollup/plugin-alias';
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';
// import testConfig from './tools/vitest.config';
// import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
// import tsconfigPaths from 'vite-tsconfig-paths';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  // ...testConfig,
  // plugins: [nxViteTsPaths()],
  // plugins: [tsconfigPaths()],
  // plugins: [
  //   alias({
  //     entries: [
  //       {
  //         find: '@',
  //         replacement: resolve(__dirname, 'src'),
  //       },
  //     ],
  //   }),
  // ],
  plugins: [react()],
  test: {
    globals: true,
    // executor: '@nx/vite:vite',
    environment: 'jsdom',
    // moduleNameMapper: {
    //   '^.+\\.(css|less|sass)$': 'identity-obj-proxy', // Optional for handling CSS/SCSS
    // },
    setupFiles: ['./vitest.setup.ts'],
    // server: {
    //   deps: {
    //     inline: ['@testing-library/react'],
    //   },
    // },
    reporters: ['default'],
    // coverage: {
    //   reportsDirectory: 'coverage/libs/dashboard',
    //   provider: 'v8',
    // },
    workspace: './vitest.workspace.ts',
    // tsconfig: resolve(__dirname, 'tsconfig.spec.json'),
    // options: {
    //   plugins: [react()],
    // },
    // alias: {
    //   // '@': resolve(__dirname, 'src'), // Replace with path to project root
    //   '@': resolve(dirname(fileURLToPath(import.meta.url)), './src'),
    // },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      // '@': resolve(dirname(fileURLToPath(import.meta.url)), './src'),
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
 */

/// -----------

// let includePatterns = ['src/**/*.test.{ts,tsx}', 'src/**/*.spec.{ts,tsx}'];

// if (project) {
//   includePatterns = [
//     `libs/${project}/src/**/*.test.{ts,tsx}`,
//     `libs/${project}/src/**/*.spec.{ts,tsx}`,
//     `apps/${project}/src/**/*.test.{ts,tsx}`,
//     `apps/${project}/src/**/*.spec.{ts,tsx}`,
//   ];
// }

// const coverage = {
//   reporter: ['text', 'lcov'],
//   include: ['src/**/*.{ts,tsx,js,jsx}'],
//   exclude: ['node_modules', 'dist'],
// }

/*// import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
// import alias from '@rollup/plugin-alias';
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const project = process.env.NX_PROJECT_NAME;

export default defineConfig({
  // plugins: [react(), nxViteTsPaths()],
  plugins: [
    react(),
    // nxViteTsPaths(),
    // alias({
    //   entries: [
    //     { find: '@/', replacement: `${process.cwd()}/src/` }, // Adjust path if necessary
    //     // Add more aliases as needed (e.g., { find: '@styles', replacement: '@/styles' })
    //   ],
    // }),
  ],
  test: {
    include: includePatterns,
    globals: true,
    // globals: {
    //   'ts-jest': {
    //     tsconfig: process.env.TS_CONFIG || './tsconfig.json', // Adjust path if necessary
    //   },
    // },
    environment: 'jsdom',
    // setupFiles: ['./vitest.setup.ts'],
    setupFiles: [resolve(__dirname, 'vitest.setup.ts')],
    reporters: ['default'],
    coverage: coverage,
    // css: false,
    // workspace: './vitest.workspace.ts',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/'),
      //     '@': resolve(dirname(fileURLToPath(import.meta.url)), './src/'),
    },
  },
});*/

/// -----------

import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const project = process.env.NX_PROJECT_NAME;
let includePatterns;

if (project) {
  includePatterns = [
    `libs/${project}/src/**/*.test.{ts,tsx}`,
    `libs/${project}/src/**/*.spec.{ts,tsx}`,
    // `libs/${project}/src/components/Button/Button.spec.tsx`,
    `apps/${project}/src/**/*.test.{ts,tsx}`,
    `apps/${project}/src/**/*.spec.{ts,tsx}`,
  ];
} else {
  includePatterns = ['src/**/*.test.{ts,tsx}', 'src/**/*.spec.{ts,tsx}'];
}

export default defineConfig({
  plugins: [react()],
  test: {
    // include: includePatterns,
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'vitest.setup.ts')],
    reporters: ['default'],
    coverage: {
      reporter: ['text', 'lcov'],
      exclude: ['node_modules', 'dist'],
      reportsDirectory: '../../coverage/<project-root>',
      provider: 'v8',
    },
    // logLevel: 'debug',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/'),
    },
  },
});

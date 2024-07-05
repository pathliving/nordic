/// <reference types='vitest' />
import { defineConfig } from 'vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { resolve } from 'path';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/dashboard',

  plugins: [nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reporter: ['text', 'lcov'],
      exclude: ['node_modules', 'dist'],
      reportsDirectory: '../../coverage/apps/dashboard',
      provider: 'v8',
    },

    setupFiles: './vitest.setup.ts',
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/'),
    },
  },
});

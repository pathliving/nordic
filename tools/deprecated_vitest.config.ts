/// <reference types="vitest" />
// import { dirname, resolve } from 'path';
// import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';
// import vitestSetup from './vitest.setup';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    // setupFiles: [vitestSetup.default],
    reporters: ['default'],
    coverage: {
      reportsDirectory: 'coverage/libs/dashboard',
      provider: 'v8',
    },
  },
  // resolve: {
  //   alias: {
  //     '@': resolve(dirname(fileURLToPath(import.meta.url)), './src'),
  //   },
  // },
});

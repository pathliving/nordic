/// <reference types="vitest" />
// import alias from '@rollup/plugin-alias';
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    reporters: ['default'],
    // coverage: {
    //   reportsDirectory: 'coverage/libs/dashboard',
    //   provider: 'v8',
    // },
    workspace: './vitest.workspace.ts',
    // alias: {
    //   // '@': resolve(__dirname, 'src'), // Replace with path to project root
    //   '@': resolve(dirname(fileURLToPath(import.meta.url)), './src'),
    // },
  },
  resolve: {
    alias: {
      '@': resolve(dirname(fileURLToPath(import.meta.url)), './src'),
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

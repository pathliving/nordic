/// <reference types="vitest" />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import { dirname, extname, relative, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
// import testConfig from '../../tools/vitest.config';
// import testConfig from '@nordic/tools/vitest.config';
// import testConfig from '@nordic/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    outDir: '../../dist/libs/ui',
    emptyOutDir: true,
    reportCompressedSize: true,
    lib: {
      entry: resolve(dirname(fileURLToPath(import.meta.url)), 'src/index.ts'),
      name: 'ui',
      fileName: 'index',
      formats: ['es'],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'clsx'],
      input: splitCssFiles(),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
  // ...testConfig,
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: ['./test-setup.ts'],
  //   reporters: ['default'],
  //   coverage: {
  //     reportsDirectory: '../../coverage/libs/ui',
  //     provider: 'v8',
  //   },
  // },
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      // tsconfigPath: join(__dirname, 'tsconfig.lib.json'),
      tsconfigPath: resolve(
        dirname(fileURLToPath(import.meta.url)),
        'tsconfig.lib.json'
      ),
    }),
    libInjectCss(),
    nxViteTsPaths(),
  ],
  resolve: {
    alias: {
      '@': resolve(dirname(fileURLToPath(import.meta.url)), './src'),
    },
  },
});

function splitCssFiles() {
  return Object.fromEntries(
    glob
      .sync('src/**/*.{ts,tsx}', {
        ignore: [
          'src/**/*.d.ts',
          'src/**/*.{spec,test}.{ts,tsx}',
          'src/**/*.stories.{ts,tsx}',
        ],
      })
      .map((file) => [
        relative('src', file.slice(0, file.length - extname(file).length)),
        fileURLToPath(new URL(file, import.meta.url)),
      ])
  );
}

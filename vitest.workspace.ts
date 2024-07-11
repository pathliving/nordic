import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineWorkspace } from 'vitest/config';

const workspaces = [
  {
    test: {
      globals: true,
      environment: 'jsdom',
      include: [
        'libs/**/*.{test,spec}.{ts,tsx,js,jsx}',
        'apps/**/*.{test,spec}.{ts,tsx,js,jsx}',
      ],
      exclude: [
        '**/node_modules/**/*',
        '**/.next/**/*',
        // 'libs/ui/**'
        // 'packages/embeds/**/*',
        // 'packages/lib/hooks/**/*',
        // 'packages/platform/**/*',
        // 'apps/api/v2/**/*',
      ],
      // name: 'ui',
      //   setupFiles: ['./vitest.setup.ts'],
    },
    resolve: {
      alias: {
        '@': resolve(dirname(fileURLToPath(import.meta.url)), './src'),
        // '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
];

export default defineWorkspace(workspaces);

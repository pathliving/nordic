// export default ['libs/*'];

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  //   'node/**',
  //   'tools/**',
  'libs',
  {
    plugins: [nxViteTsPaths()],
    test: {
      globals: true,
    },
  },
  //   'library/**',
  //   {
  //     plugins: [nxViteTsPaths()],
  //     test: {
  //       globals: true,
  //     },
  //   },
]);

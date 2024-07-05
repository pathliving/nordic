import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const config: StorybookConfig = {
  stories: [
    '../src/components/**/*.mdx',
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve?.alias,
        // External module
        // lodash: require.resolve('./lodash.mock'),

        // Internal modules
        '@/*': resolve(dirname(fileURLToPath(import.meta.url)), '../src/'),
      };
    }

    return config;
  },
};
export default config;

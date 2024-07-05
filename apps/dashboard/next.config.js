import { composePlugins, withNx } from '@nx/next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import createNextIntlPlugin from 'next-intl/plugin';
import nextPwaPlugin from 'next-pwa';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withPwa = nextPwaPlugin({
  dest: 'public', // Destination directory for the PWA files
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
});

const withNextIntl = createNextIntlPlugin('./src/shared/i18n/config.ts');

const withVanillaExtract = createVanillaExtractPlugin();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack(config, { isServer }) {
    if (isServer) {
      // ...
    }

    config.resolve.alias['@'] = path.join(__dirname, 'src');
    config.resolve.alias['@nordic/ui'] = path.join(
      __dirname,
      '..',
      '..',
      'libs',
      'ui',
      'src'
    );
    return config;
  },
};

const plugins = [
  withNx,
];

export default composePlugins(...plugins)(
  withVanillaExtract(withNextIntl(withPwa(nextConfig)))
);

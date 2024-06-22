import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import createNextIntlPlugin from 'next-intl/plugin';
import nextPwaPlugin from 'next-pwa';

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
const nextConfig = {};

export default withVanillaExtract(withNextIntl(withPwa(nextConfig)));

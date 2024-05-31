import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./locales/lib/i18n.ts');

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  transpilePackages: ['next-international', 'international-types'],
};

export default withVanillaExtract(withNextIntl(nextConfig));

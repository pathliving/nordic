import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  transpilePackages: ['next-international', 'international-types'],
};

export default withVanillaExtract(nextConfig);

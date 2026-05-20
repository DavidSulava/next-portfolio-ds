/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/index.ts');

const isProd = process.env.NODE_ENV === 'production';
const publicPath = isProd ? '/next-portfolio-ds' : ''

const nextConfig = {
  output: 'export',
  basePath: publicPath,
  env: {
    publicPath: publicPath,
  },
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);

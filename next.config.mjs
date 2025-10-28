/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export', // Enables static HTML export
  basePath: isProd ? '/next-portfolio-ds' : '',
  assetPrefix: isProd ? '/next-portfolio-ds' : '',
};

export default nextConfig;

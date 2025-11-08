/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const publicPath = isProd ? '/next-portfolio-ds' : ''

const nextConfig = {
  env: {
    publicPath: publicPath,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', // Enables static HTML export
};

export default nextConfig;

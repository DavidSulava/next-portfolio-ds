/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production';
// const path = isProd ? '/next-portfolio-ds' : ''

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export', // Enables static HTML export
};

export default nextConfig;

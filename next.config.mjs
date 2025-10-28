/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        basePath: isProd ?'/next-portfolio-ds' : '',
        assetPrefix: isProd ?'/next-portfolio-ds' : '',
      },
    ],
  },
};

export default nextConfig;

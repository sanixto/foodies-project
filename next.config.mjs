/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.AWS_IMAGES_HOSTNAME,
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

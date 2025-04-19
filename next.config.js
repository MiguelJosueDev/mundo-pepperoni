/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  env: {
    APP_URL: process.env.APP_URL || 'http://localhost:3001',
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `http://localhost:3001/:path*`,
      },
    ];
  },
}

module.exports = nextConfig
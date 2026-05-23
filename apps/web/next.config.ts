import type { NextConfig } from 'next';

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const nextConfig: NextConfig = {
  experimental: { typedRoutes: true },
  async rewrites() {
    if (!apiBaseUrl) {
      return [];
    }

    return [
      {
        source: '/api/:path*',
        destination: `${apiBaseUrl}/api/:path*`
      }
    ];
  }
};

export default nextConfig;

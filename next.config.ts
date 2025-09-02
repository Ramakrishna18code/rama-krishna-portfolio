import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // This can help with hydration issues
    optimizePackageImports: ['react-icons'],
  },
  // Suppress hydration warnings during development
  compiler: {
    removeConsole: false,
  },
  // Add headers to help with browser extension compatibility
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

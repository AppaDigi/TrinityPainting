import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'trinitypaintingmn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.trinitypaintingmn.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'trinitypaintingmn.com',
          },
        ],
        destination: 'https://www.trinitypaintingmn.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
    ignoreDuringBuilds: true,
  }, 
  typescript: {
    ignoreBuildErrors: true, // ignore TS errors during dev
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS domains (not recommended for security)
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["postfiles.pstatic.net", "i.pravatar.cc"],
  },
  experimental: {
    turbo: {
      loaders: {
        ".svg": ["@svgr/webpack"],
      },
    },
  },
  /* config options here */
};

export default nextConfig;

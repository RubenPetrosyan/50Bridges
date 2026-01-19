import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // REQUIRED for Cloudflare Pages static deployment
  output: "export",

  images: {
    // Cloudflare Pages does NOT support Next Image optimization
    unoptimized: true,
  },

  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;

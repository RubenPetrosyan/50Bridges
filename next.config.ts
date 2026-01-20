import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /**
   * Cloudflare Pages static export
   */
  output: "export",

  /**
   * ✅ Canonical URL consistency
   * /page → /page/
   */
  trailingSlash: true,

  /**
   * Cloudflare Pages does not support Next Image Optimization
   */
  images: {
    unoptimized: true,
  },

  /**
   * Remove console logs in production builds
   */
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;

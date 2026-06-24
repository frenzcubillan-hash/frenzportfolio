import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  basePath: "/frenzportfolio",
  assetPrefix: "/frenzportfolio/",
  trailingSlash: true,
};

export default nextConfig;
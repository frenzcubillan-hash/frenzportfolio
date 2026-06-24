import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/frenzportfolio",
  assetPrefix: "/frenzportfolio/",
};

export default nextConfig;
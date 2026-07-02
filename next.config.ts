import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/paws-for-change-india",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  images: {
    qualities: [25, 50, 75, 90, 100],
    unoptimized: true,
  },
};

export default nextConfig;

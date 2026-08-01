import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.verzional.com",
          },
        ],
        destination: "https://verzional.com/:path*",
        permanent: true,
      },
    ];
  },
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [25, 50, 75, 90, 100],
  },
};

export default nextConfig;

import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());

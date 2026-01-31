import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allows any domain
        pathname: "/**", // allows any path
      },
    ],
  },
};

export default nextConfig;

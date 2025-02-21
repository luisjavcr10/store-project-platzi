import type { NextConfig } from "next";
const path = require('path')

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/sass')],
    prependData: `@import "main.sass"`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
  },
};

export default nextConfig;

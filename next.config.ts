import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin workspace root to this project (multiple lockfiles exist upstream).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;

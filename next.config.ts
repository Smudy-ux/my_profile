import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export", // Enables static HTML export
  basePath: "/my_profile", // Must match your GitHub repository name
  assetPrefix: "/my_profile/", // Ensures static assets load correctly
  images: {
    unoptimized: true, // Required for next/image when doing a static export
  },
};

export default nextConfig;
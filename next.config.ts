import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/decoraciones-cocos" : "",
  assetPrefix: isGithubPages ? "/decoraciones-cocos/" : "",
  trailingSlash: true,
};

export default nextConfig;

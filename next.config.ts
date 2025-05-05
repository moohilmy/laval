import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['animejs', 'zod'], 
    
  },
};

export default nextConfig;

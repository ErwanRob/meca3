import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  experimental: {
    //Needed to use "UseCache" article on next doc from 24th october
    useCache: true,
  },
};

export default nextConfig;

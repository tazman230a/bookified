import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { remotePatterns:[
    { protocol: 'https', hostname: 'covers.openlibrary.org'},
     { protocol: 'https', hostname: 'ssvacnexfulrmjm3.public.blob.vercel-storage.com' }
  ]},
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

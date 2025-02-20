/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"], // ✅ Optimize Chakra UI package imports
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

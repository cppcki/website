/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.discordapp.com", "drive.google.com"]
  }
};

module.exports = nextConfig;
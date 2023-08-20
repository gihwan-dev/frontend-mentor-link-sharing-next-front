/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "localhost",
      "127.0.0.1",
      "frontend-mentor-link-sharing-nest-server.vercel.app",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "frontend-mentor-link-sharing-nest-server.vercel.app",
        pathname: "user/image/**",
      },
    ],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;

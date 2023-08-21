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
      "fonrtend-mentor-link-sharing-gihwan-dev.azurewebsites.net",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fonrtend-mentor-link-sharing-gihwan-dev.azurewebsites.net",
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

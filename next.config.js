/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["fonrtend-mentor-link-sharing-gihwan-dev.azurewebsites.net", "link-sharing-gihwan-dev.s3.ap-northeast-2.amazonaws.com"],
    // domains: ["localhost"],
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

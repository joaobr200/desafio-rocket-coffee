/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 640, 768, 1024, 1200],
    formats: ["image/avif", "image/webp"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async rewrites() {
    return {
      destination: "http://api.suwiki.kr/lecture/all",
      sources: "lecture/all",
    };
  },
};

module.exports = nextConfig;

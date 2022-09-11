module.exports = {
  reactStrickMode: false,
  swcMinify: true,
  async rewrites() {
    return [
      {
        destination: "https://api.suwiki.kr/:path*",
        source: "/:path*",
      },
    ];
  },
};

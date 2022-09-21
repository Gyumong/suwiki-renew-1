module.exports = {
  reactStrickMode: false,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://api.suwiki.kr/:path*",
      },
    ];
  },
};

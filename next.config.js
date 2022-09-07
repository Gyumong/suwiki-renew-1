module.exports = {
  reactStrickMode: false,
  swcMinify: true,
  async rewrites() {
    return [
      {
        destination: "https://api.suwiki.kr/lecture/:path*",
        source: "/lecture/:path*",
      },
    ];
  },
};

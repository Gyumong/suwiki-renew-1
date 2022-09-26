module.exports = {
  reactStrickMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://api.suwiki.kr/:path*",
      },
    ];
  },
};

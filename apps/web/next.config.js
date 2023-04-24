module.exports = {
  reactStrictMode: false,
  transpilePackages: [
    'ui',
    'mainlib',
    'tsconfig',
    'eslint-config-custom',
  ],

  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'http://localhost:3002/:path*',
  //     },
  //   ];
  // },
};

// eslint-disable-next-line import/no-extraneous-dependencies,@typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/v1/datalab', {
      target: 'https://openapi.naver.com',
      changeOrigin: true,
    }),
  );
};

/* eslint-disable import/no-extraneous-dependencies,@typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware');

const target =
  process.env.NODE_ENV === 'production'
    ? 'https://api-shopping-insight.romantech.net'
    : 'http://localhost:4000';

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target,
      changeOrigin: true,
    }),
  );
};

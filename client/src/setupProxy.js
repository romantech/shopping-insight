/* eslint-disable import/no-extraneous-dependencies,@typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware');

const isProd = process.env.NODE_ENV === 'production';

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: process.env.REACT_APP_BASE_URL,
      changeOrigin: !isProd,
    }),
  );
};

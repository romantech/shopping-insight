/* eslint-disable import/no-extraneous-dependencies,@typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware');

// 개발 모드에서만 적용됨
// *.ts 파일은 지원안함
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/shopping/category/keyword/age', {
      target: process.env.REACT_APP_NAVER_BASE_URL,
      changeOrigin: true,
    }),
  );
};

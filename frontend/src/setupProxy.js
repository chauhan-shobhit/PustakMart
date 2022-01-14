const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    console.log("asdadad")
    app.use(createProxyMiddleware('/api/users/', { target: 'http://localhost:3001' , changeOrigin: true})    );
    app.use(createProxyMiddleware('/api/products/', { target: 'http://localhost:3002' , changeOrigin: true})    );
  };
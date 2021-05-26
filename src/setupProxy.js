const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/api', {
          target: 'http://localhost:80/',
          changeOrigin: true
      })
  )
  app.use(
    createProxyMiddleware('/users', {
        target: 'http://localhost:80/',
        changeOrigin: true
    })
)
};
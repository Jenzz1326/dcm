const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/static': {
        target: 'http://localhost:5139',
        changeOrigin: true,
        ws: true,
        secure: false
      },
    },

  }
})

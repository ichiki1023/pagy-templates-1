require('dotenv').config()
const local = process.env.NODE_ENV === 'local'
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  distDir: local ? '../.next' : '../build',
  env: {
    WEB_HOST: process.env.WEB_HOST,
    API_HOST: process.env.API_HOST,
    PROXY_PATH: process.env.PROXY_PATH || ''
  },
  assetPrefix: process.env.PROXY_PATH || '',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    return config
  }
})

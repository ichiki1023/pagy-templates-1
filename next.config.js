require('dotenv').config()

const path = require('path')
const withCSS = require('@zeit/next-css')
const Dotenv = require('dotenv-webpack')

const dev = process.env.NODE_ENV !== 'production'

const publicRuntimeConfig = {
  host: process.env.HOST,
  apiHost: process.env.API_HOST,
  proxyPath: process.env.PROXY_PATH || ''
}

module.exports = withCSS({
  distDir: dev ? '../.next' : '../build',
  publicRuntimeConfig: publicRuntimeConfig,
  assetPrefix: publicRuntimeConfig.proxyPath,
  webpack: function (config) {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]
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

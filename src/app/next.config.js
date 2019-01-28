require('dotenv').config()

const path = require('path')
const withCSS = require('@zeit/next-css')
const Dotenv = require('dotenv-webpack')

module.exports = withCSS({
  distDir: '../../dist/functions/next',
  assetPrefix: process.env.PROXY_PATH ? `${process.env.PROXY_PATH}` : '',
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

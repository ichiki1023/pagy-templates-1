const functions = require('firebase-functions')
const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const requestIp = require('request-ip')
const ipRangeCheck = require('ip-range-check')
const is = require('is_js')

process.env.HOST = functions.config().app.host
process.env.API_HOST = functions.config().app.apihost
process.env.PROXY_PATH = functions.config().app.proxypath
process.env.ALLOWED_IP = functions.config().app.allowedip

const publicRuntimeConfig = {
  host: process.env.HOST,
  apiHost: process.env.API_HOST,
  proxyPath: process.env.PROXY_PATH || ''
}

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  conf: {
    distDir: 'next',
    publicRuntimeConfig: publicRuntimeConfig,
    assetPrefix: publicRuntimeConfig.proxyPath
  },
  dev
})
const handle = app.getRequestHandler()

exports.next = functions.https.onRequest((request, response) => {
  console.log('File: ' + request.originalUrl)
  return app.prepare().then(() => {
    const server = express()

    // IP Auth
    server.all('*', (req, res, next) => {
      if (process.env.ALLOWED_IP) {
        const allowedIp = process.env.ALLOWED_IP.split(',')
        const clientIp = is.ip(req.headers['fastly-client-ip'])
          ? req.headers['fastly-client-ip']
          : requestIp.getClientIp(req)
        console.log('ip', clientIp)
        const isAllowed = ipRangeCheck(clientIp, allowedIp)
        if (!isAllowed) {
          res.status(400).send('Not Allowed')
          return
        }
      }
      next()
    })

    // prefix middleware
    server.use((req, res, next) => {
      // prefixの指定がある場合はreplaceする
      if (process.env.PROXY_PATH) {
        req.url = req.url.replace(`${process.env.PROXY_PATH}`, '')
      }
      // ルートか判定
      if (!req.url) {
        req.url = '/'
      }
      next()
    })

    server.use(bodyParser.json()) // for parsing application/json
    server.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

    server.post('*', (req, res) => {
      if (req.body && req.body.formData) {
        req.body = JSON.parse(req.body.formData)
      }
      app.render(req, res, req.url)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })
    server(request, response)
  })
})

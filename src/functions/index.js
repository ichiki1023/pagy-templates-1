const functions = require('firebase-functions')
const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

process.env.HOST = functions.config().app.host
process.env.API_HOST = functions.config().app.apihost
process.env.PROXY_PATH = functions.config().app.proxypath

const dev = process.env.NODE_ENV !== 'production'
const app = next({ conf: { distDir: 'next' }, dev })
const handle = app.getRequestHandler()

exports.next = functions.https.onRequest((request, response) => {
  console.log('File: ' + request.originalUrl)
  return app.prepare().then(() => {
    const server = express()

    server.use(bodyParser.json()) // for parsing application/json
    server.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

    server.post('*', (req, res) => {
      if (req.body && req.body.formData) {
        req.body = JSON.parse(req.body.formData)
      }
      if (process.env.PROXY_PATH) {
        req.url = req.url.replace(`${process.env.PROXY_PATH}`, '')
      }
      // ルートか判定
      if (!req.url) {
        req.url = '/'
      }
      app.render(req, res, req.url)
    })

    server.get('*', (req, res) => {
      if (process.env.PROXY_PATH) {
        req.url = req.url.replace(`${process.env.PROXY_PATH}`, '')
      }
      // ルートか判定
      if (!req.url) {
        req.url = '/'
      }
      return handle(req, res)
    })
    server(request, response)
  })
})

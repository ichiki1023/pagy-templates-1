const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ config: { distDir: 'build' }, dev })
const handle = app.getRequestHandler()

const nextApp = (request, response) => {
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
}

exports.nextApp = nextApp

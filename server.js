require('dotenv').config()

const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const proxyPath = process.env.PROXY_PATH || ''
const PORT = process.env.PORT || 5000
const app = next({ dir: dev ? './app' : './build', dev })
const handle = app.getRequestHandler()

// ローカルのPOST TEST用にserver.jsを用意
// nextApp.jsとほぼ同じ
app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json()) // for parsing application/json
  server.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

  server.use(`${proxyPath}/static`, express.static(`${__dirname}/static`))

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

  server.post('*', (req, res) => {
    if (req.body && req.body.formData) {
      req.body = JSON.parse(req.body.formData)
    }
    app.render(req, res, req.url)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})

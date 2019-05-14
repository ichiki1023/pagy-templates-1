if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const local = process.env.NODE_ENV === 'local'
const proxyPath = process.env.PROXY_PATH || ''
const PORT = process.env.SERVER_PORT || 5001

const opts = {
  dir: local ? './app' : './',
  dev: local
}
if (!local) {
  opts.conf = {
    distDir: 'build'
  }
}

const app = next(opts)
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json()) // for parsing application/json
  server.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

  server.use(`${proxyPath}/static`, express.static(`${__dirname}/static`))

  server.get('/health_check', (req, res) => {
    return res.json({ status: 'running' })
  })

  // prefix middleware
  server.use((req, res, next) => {
    // prefixの指定がある場合はreplaceする
    if (proxyPath) {
      app.setAssetPrefix(proxyPath)
      req.url = req.url.replace(proxyPath, '')
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

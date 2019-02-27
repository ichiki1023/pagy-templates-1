if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const proxyPath = process.env.PROXY_PATH || ''
const PORT = process.env.PORT || 5000

const devNextOpts = {
  dir: './app',
  dev: true
}
const nextOps = {
  conf: {
    distDir: './build',
    publicRuntimeConfig: {
      webHost: process.env.WEB_HOST,
      apiHost: process.env.API_HOST,
      proxyPath: process.env.PROXY_PATH || ''
    },
    assetPrefix: process.env.PROXY_PATH || ''
  },
  dev: false
}

const opts = dev ? devNextOpts : nextOps
const app = next(opts)
const handle = app.getRequestHandler()

// ローカルのPOST TEST用にserver.jsを用意
// nextApp.jsとほぼ同じ
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

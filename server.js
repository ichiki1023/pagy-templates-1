const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = true
const PORT = process.env.PORT || 5000
const app = next({ dir: './src', dev })
const handle = app.getRequestHandler()

// FIXME: cloud functionsへ移行する

app.prepare().then(() => {
  const server = express()

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

  server.listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})

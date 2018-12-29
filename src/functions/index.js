const functions = require('firebase-functions')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf: { distDir: 'next' } })
const handle = app.getRequestHandler()

exports.next = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl) // log the page.js file that is being requested
  return app.prepare().then(() => {
    // POSTを受けつける
    if (req.method !== 'POST') {
      if (req.body && req.body.formData) {
        req.body = JSON.parse(req.body.formData)
      }
      return app.render(req, res, req.url)
    }
    return handle(req, res)
  })
})

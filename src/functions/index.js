const functions = require('firebase-functions')
const nextApp = require('./nextApp')

process.env.HOST = functions.config().app.host
process.env.API_HOST = functions.config().app.apihost
process.env.PROXY_PATH = functions.config().app.proxypath

exports.next = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl)
  return nextApp(req, res)
})

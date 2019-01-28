const functions = require('firebase-functions')
const nextApp = require('./nextApp')

exports.next = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl)
  return nextApp(req, res)
})

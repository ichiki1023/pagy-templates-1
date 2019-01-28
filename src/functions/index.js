const functions = require('firebase-functions')
const nextApp = require('./nextApp')

exports.next = functions.https.onRequest((req, res) => nextApp(req, res))

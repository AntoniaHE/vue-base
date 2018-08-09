
var express = require('express')
var indexRouter = require('./routes')
const utils = require('./utils')

var app = express()

app.get('/api/*', utils.csrf, function (req, res, next) {
  utils.cors(req, res)
  next()
})

app.use('/', indexRouter)
module.exports = app

const express = require('express')
const app = express()
// const render = require('../service/renderService')
const homeData = require('../service/json/get-home-data')
const errorHtml = require('../service/renderService')

app.get('/api/home/$', function (req, res, next) {
  const data = homeData()
  res.send({
    success: true,
    data: data
  })
})

app.get('/error/$', function (req, res, next) {
  res.send(errorHtml())
})
module.exports = app

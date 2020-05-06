var express = require('express')
var app = express()

app.get(['/', '/index.html'], function (req, res) {
  res.send('hello docker')
})

app.listen(3000)

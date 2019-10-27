const express = require('express');
const https = require('https')
const fs = require('fs')
const bodyParser = require('body-parser');
let app = express();
var colors = require('colors')
const routes = require('./api/routes/routes')

const port = 4002

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization")

  next()
})

app.use('/', routes)

let server = app.listen(process.env.PORT || 4002, function() {
    let port = server.address().port;

    console.log('Server running in port 4002'.red)    
});

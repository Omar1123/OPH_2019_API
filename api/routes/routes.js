const routes = require('express').Router();

//EXTRAS

const flagJs = require('../core/flag.js');

routes.post('/api/openhacking', flagJs);

module.exports = routes;

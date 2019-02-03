'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

/* models */

const models = require('../models');


/* rotas */
app.use('/', require('../routes/index'));

module.exports = app;
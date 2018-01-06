const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const trades = require('./routes/trades');

const app = express();
app.use('/trades', trades);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// path not found, return 404
app.use(function(req, res, next) {
  res.status(404).json({error: `URI ${req.path} not found`});
});

module.exports = app;

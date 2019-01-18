import path from 'path';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import sectorsRouter from './routes/sectors';
import companiesRouter from './routes/companies';

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('client/public'));

app.use('/api/sectors', sectorsRouter);
app.use('/api/companies', companiesRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve('client/public/index.html'));
});

module.exports = app;

import express from 'express';
import axios from 'axios';

import Config from '../config';

const companiesRouter = express.Router();

companiesRouter.get('/:symbol/perf', function(req, res) {
  axios.get(Config.avBatchTimeSeriesUrl(req.params.symbol))
    .then(function (avRes) {
      let avRespData = avRes.data;
      console.log(`Got response data: ${avRespData}`);
      res.json(avRespData);
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = companiesRouter;

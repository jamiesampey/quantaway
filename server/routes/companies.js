import express from 'express';
import path from 'path';
import fs from 'fs';
import csv from 'fast-csv';
import axios from 'axios';

import Config from '../config';
import { AVSectorPerfRanks } from '../../common/Constants';

const companiesRouter = express.Router();

companiesRouter.get('/:symbol/perf', function(req, res) {
  axios.get(Config.timeSeriesDailyUrl(req.params.symbol))
    .then(function (avRes) {
      let avRespData = avRes.data;
      console.log(`Got response data: ${avRespData}`);
      res.json(avRespData);
    })
    .catch(function (error) {
      console.error(error);
    });
});

companiesRouter.get('/sectors', function(req, res) {
  axios.get(`${Config.sectorUrl}`)
    .then(function (avRes) {
      let responseObj = {};
      let avRespData = avRes.data;

      AVSectorPerfRanks.forEach((rankPrefix, i) => {
        var foundRankProp = Object.keys(avRespData).find((prop) => { return prop.startsWith(rankPrefix) });
        if (foundRankProp) {
          responseObj[rankPrefix] = avRespData[foundRankProp];
        }
      });

      res.json(responseObj);
    })
    .catch(function (error) {
      console.error(error);
    });
});

companiesRouter.get('/:sectorName', function(req, res) {
  companyCsvToJson(req.params.sectorName, res);
});

const companyCsvToJson = (sectorName, res) => {
  let ret = [];
  let stream = fs.createReadStream(path.resolve("server/resources/sectors", `${sectorName.replace('-','')}.csv`))
    .pipe(csv.parse({headers: true}))
    .transform(function(row) {
      return {
        symbol: row['Symbol'],
        company: row['Company'],
        industry: row['Industry'],
      };
    }).on("readable", function () {
      var row;
      while (null !== (row = stream.read())) {
        ret.push(row);
      }
    })
    .on("end", function() {
      res.json(ret);
    });
};

module.exports = companiesRouter;

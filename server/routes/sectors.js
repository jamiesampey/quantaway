import express from 'express';
import path from 'path';
import fs from 'fs';
import csv from 'fast-csv';
import axios from 'axios';

import Config from '../config';
import { AVSectorPerfRanks } from '../../common/Constants';

const sectorsRouter = express.Router();

sectorsRouter.get('/', function(req, res) {
  axios.get(`${Config.sectorUrl}`)
    .then((avResponse) => {
      let responseObj = {};
      let avRespData = avResponse.data;

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

sectorsRouter.get('/:sectorName', function(req, res) {
  const BatchSize = 100;
  let batchIndex = 0;

  let companies = sectorCsvToJson(req.params.sectorName, res);
  while (batchIndex < companies.length) {
    let symbolsBatch = companies.slice(batchIndex, BatchSize).map((row) => { return row['Symbol'] });

    axios.get(`${Config.avBatchTimeSeriesUrl(symbolsBatch)}`)
      .then((avResponse) => {

      })
      .catch(function (error) {
        console.error(error);
      });

    batchIndex += BatchSize;
  }
});

const sectorCsvToJson = (sectorName, res) => {
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

module.exports = sectorsRouter;

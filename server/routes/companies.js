import express from 'express';
import path from 'path';
import fs from 'fs';
import csv from 'fast-csv';
import axios from 'axios';

import Config from '../resources/config';
import { AVSectorPerfRanks } from '../../common/Constants';

const companiesRouter = express.Router();

companiesRouter.get('/sectors', function(req, res) {
  console.info(`using AV config key ${Config.AlphaVantageKey}`);
  axios.get(`https://www.alphavantage.co/query?function=SECTOR&apikey=${Config.AlphaVantageKey}`)
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
        symbol: row['symbol'],
        name: row['name']
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

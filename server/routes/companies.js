import express from 'express';
import path from 'path';
import fs from 'fs';
import csv from 'fast-csv';

const companiesRouter = express.Router();

companiesRouter.get('/energy', function(req, res) {
  companyCsvToJson('energy.csv', res);
});

companiesRouter.get('/financial', function(req, res) {
  companyCsvToJson('financial.csv', res);
});

companiesRouter.get('/healthcare', function(req, res) {
  companyCsvToJson('healthcare.csv', res);
});

const companyCsvToJson = (fileName, res) => {
  let ret = [];
  let stream = fs.createReadStream(path.resolve("server/resources", fileName))
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

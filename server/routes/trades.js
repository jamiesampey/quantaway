var express = require('express');
var router = express.Router();

/* data source for stock trades */
router.get('/', function(req, res, next) {
  let today = Date.now();
  res.json([
    {type: 'BUY', date: today, symbol: "IYE", volume: 125, price: 37.50},
    {type: 'SELL', date: today, symbol: "APL", volume: 40, price: 170.34},
    {type: 'BUY', date: today, symbol: "BMRN", volume: 50, price: 81.99}
  ]);
});

module.exports = router;

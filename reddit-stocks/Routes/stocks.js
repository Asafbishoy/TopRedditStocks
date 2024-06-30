const express = require('express');
const Stock = require('../models/Stock');
const router = express.Router();

router.get('/stocks', async (req, res) => {
  const stocks = await Stock.findAll();
  res.json(stocks);
});

router.get('/stocks/:symbol', async (req, res) => {
  const stock = await Stock.findAll({
    where: { symbol: req.params.symbol }
  });
  res.json(stock);
});

module.exports = router;
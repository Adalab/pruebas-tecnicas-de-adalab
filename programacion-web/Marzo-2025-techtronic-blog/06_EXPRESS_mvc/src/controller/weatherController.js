const express = require('express');
const router = express.Router();
const weatherModel = require('../model/weatherModel');

router.get('/:country/:city', async (req, res) => {
  const city = req.params.city.toLowerCase();
  const country = req.params.country.toLowerCase();

  const weatherRecord = await weatherModel.get(country, city);

  return res.json(weatherRecord);
});

module.exports = router;

const express = require('express');
const { getAllData, getDataByDateAndCountry } = require('../api/dataCases');

module.exports = (server) => {
    const router = express.Router();
    server.use('/api/cases', router);

    router.get('/all', async (req, res) => {
      res.json(await getAllData());
    });

    router.get('/last-days/:country', async (req, res) => {
      const country = req.params.country;
      const days = Number( req.query.days) || 15

      res.json(await getDataByDateAndCountry(country, days, '2020-08-16'));
    });
}
const express = require('express');
const { getAllData, getDataFromTheLastDays } = require('../api/dataCases');

module.exports = (server) => {
    const router = express.Router();
    server.use('/api/cases', router);

    router.get('/all', async (req, res) => {
      res.send(await getAllData());
    });

    router.get('/last-days', async (req, res) => {
      res.send(await getDataFromTheLastDays('Brazil', '2020-08-16'));
    });
}
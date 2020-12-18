const express = require('express');
const { fetchData } = require('../api/data');

module.exports = (server) => {
    const router = express.Router();
    server.use('/api', router);

    router.get('/', async (req, res) => {
      res.send(await fetchData());
    });
};
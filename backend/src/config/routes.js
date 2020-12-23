const express = require('express');
const { insertAllData } = require('../api/dataCases');

module.exports = (server) => {
    const router = express.Router();
    server.use('/api/cases', router);

    router.get('/all', async (req, res) => {
      res.send(await insertAllData());
    });
}
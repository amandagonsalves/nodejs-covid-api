const express = require('express');
const { insertData } = require('../api/dataCases');

module.exports = (server) => {
    const router = express.Router();
    server.use('/api/cases', router);

    router.get('/all', async (req, res) => {
      res.send(await insertData());
    });
}
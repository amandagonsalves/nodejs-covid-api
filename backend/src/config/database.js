const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/cases', { useNewUrlParser: true, useUnifiedTopology: true });
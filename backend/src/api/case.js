const mongoose = require('mongoose');

const casesSchema = new mongoose.Schema({
  body: { type: Object, required: true }
});

module.exports = mongoose.model('Case', casesSchema);
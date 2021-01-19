const mongoose = require('mongoose');

const collectedDataSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  HTML: {
      type: Number,
      required: true
  }
});

const collectedData = mongoose.model('collectedData', collectedDataSchema);

module.exports = collectedData;

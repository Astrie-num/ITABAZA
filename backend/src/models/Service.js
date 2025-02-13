// models/Service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Store the image URL or path
    required: false, // If the image is optional, set to false
  },
});

module.exports = mongoose.model('Service', serviceSchema);

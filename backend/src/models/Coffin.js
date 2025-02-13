// models/Coffin.js
const mongoose = require('mongoose');

const coffinSchema = new mongoose.Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service', // Link to the service (e.g., "Coffin")
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Coffin', coffinSchema);

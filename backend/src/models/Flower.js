// models/Flower.js
const mongoose = require('mongoose');

const flowerSchema = new mongoose.Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service', 
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
  vendor: {
    type: String,
    required: true,
  },
  kind: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Flower', flowerSchema);

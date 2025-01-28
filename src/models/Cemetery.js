// models/Cemetery.js
const mongoose = require('mongoose');

// Create a schema for the Cemetery service model
const cemeterySchema = new mongoose.Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',  // Reference to the Service model to associate it with a specific service
    required: true,
  },
  picture: {
    type: String,  // URL or file path for the image of the cemetery service
    required: true,  // Ensure the picture is provided
  },
  name: {
    type: String,  // Name of the cemetery service
    required: true,  // Make sure it's not empty
  },
  address: {
    type: String,  // Location/address of the cemetery
    required: true,  // Make sure an address is provided
  },
  vendor: {
    type: String,  // Name of the vendor offering the service
    required: true,  // Ensure a vendor is specified
  },
  availableSlots: {
    type: Number,  // Number of available slots in the cemetery
    required: true,  // Make sure the number of available slots is specified
  },
  priceVIP: {
    type: Number,  // VIP pricing for the cemetery service
    required: true,  // Ensure pricing for VIP is provided
  },
  priceRegular: {
    type: Number,  // Regular pricing for the cemetery service
    required: true,  // Ensure pricing for regular services is provided
  },
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields

// Create and export the Cemetery model
const Cemetery = mongoose.model('Cemetery', cemeterySchema);

module.exports = Cemetery;

// controllers/cemeteryController.js
const Cemetery = require('../models/Cemetery');
const Service = require('../models/Service');  // Ensure you import Service model for the association

// Get all cemeteries under a specific service
const getCemeteries = async (req, res) => {
  try {
    const { serviceId } = req.params;  // We use serviceId to find cemeteries under a specific service

    const cemeteries = await Cemetery.find({ serviceId });

    if (!cemeteries.length) {
      return res.status(404).json({ message: 'No cemeteries found.' });
    }

    res.status(200).json(cemeteries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new cemetery associated with a service
const createCemetery = async (req, res) => {
  try {
    const { serviceId, picture, name, address, vendor, availableSlots, priceVIP, priceRegular } = req.body;

    // Check if the service exists by serviceId
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    // Create the new cemetery and associate it with the service
    const newCemetery = new Cemetery({
      serviceId,
      picture,
      name,
      address,
      vendor,
      availableSlots,
      priceVIP,
      priceRegular,
    });

    await newCemetery.save();
    res.status(201).json({ message: 'Cemetery created successfully!', cemetery: newCemetery });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating cemetery.', error });
  }
};

module.exports = { getCemeteries, createCemetery };

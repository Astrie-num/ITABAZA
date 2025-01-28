// controllers/flowerController.js
const Flower = require('../models/Flower');

// Get all flowers under a specific service
const getFlowers = async (req, res) => {
  try {
    const { serviceId } = req.params;

    const flowers = await Flower.find({ serviceId });

    if (!flowers) {
      return res.status(404).json({ message: 'No flowers found.' });
    }

    res.status(200).json(flowers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
const createFlower = async (req, res) => {
    try {
      const { serviceId, name, price, vendor, kind } = req.body;
  
      const newFlower = new Flower({
        serviceId,
        name,
        price,
        vendor,
        kind,
      });
  
      await newFlower.save();
      res.status(201).json({ message: 'Flower created successfully', flower: newFlower });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };

module.exports = { getFlowers,createFlower };

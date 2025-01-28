const Coffin = require('../models/Coffin');

// Get all coffins under a specific service
const getCoffins = async (req, res) => {
  try {
    const { serviceId } = req.params;

    const coffins = await Coffin.find({ serviceId });

    if (!coffins.length) {
      return res.status(404).json({ message: 'No coffins found under this service.' });
    }

    res.status(200).json(coffins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new coffin under a specific service
const createCoffin = async (req, res) => {
  try {
    const { serviceId, name, price, material } = req.body;

    // Create the new coffin and associate it with the service
    const newCoffin = new Coffin({
      serviceId,
      name,
      price,
      material,
    });

    await newCoffin.save();
    res.status(201).json({ message: 'Coffin created successfully!', coffin: newCoffin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating coffin.' });
  }
};

module.exports = { getCoffins, createCoffin };

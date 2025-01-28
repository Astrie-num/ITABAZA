const mongoose = require('mongoose'); // Add this import

const Service = require('../models/Service');

// Create a service
const Event = require('../models/Event');

const getServicesByEvent = async (req, res) => {
    try {
      const { eventId } = req.params;
  
      // Ensure eventId is a valid ObjectId
      const objectId = new mongoose.Types.ObjectId(eventId);
  
      // Query all services that match the eventId
      const services = await Service.find({ eventId: objectId });
  
      if (!services.length) {
        return res.status(404).json({ message: 'No services found for this event.' });
      }
  
      res.status(200).json(services);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  // Create a new service under an event
const createService = async (req, res) => {
    try {
      const { eventId, name, description, image } = req.body;
  
      const newService = new Service({
        eventId,
        name,
        description,
        image,
      });
  
      await newService.save();
      res.status(201).json({ message: 'Service created successfully', service: newService });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
module.exports = { createService, getServicesByEvent };

// controllers/eventController.js
const Event = require('../models/Event');
const Service = require('../models/Service');

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get services by eventId
const getServicesByEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

    const services = await Service.find({ eventId });

    if (!services) {
      return res.status(404).json({ message: 'No services found for this event.' });
    }

    res.status(200).json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
const createEvent = async (req, res) => {
    try {
      const { name, description, image } = req.body;
  
      const newEvent = new Event({
        name,
        description,
        image,
      });
  
      await newEvent.save();
      res.status(201).json({ message: 'Event created successfully', event: newEvent });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
module.exports = {
  getAllEvents,
  getServicesByEvent,
  createEvent,
};

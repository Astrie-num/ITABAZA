// routes/eventRoutes.js
const express = require('express');
const { getAllEvents, getServicesByEvent,createEvent } = require('../controllers/eventController');
const router = express.Router();

// Get all events
router.get('/', getAllEvents);

// Get services under a specific event
router.get('/:eventId/services', getServicesByEvent);
router.post('/', createEvent);  // Add this route

module.exports = router;

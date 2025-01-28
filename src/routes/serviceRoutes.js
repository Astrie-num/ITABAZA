const express = require('express');
const router = express.Router();
const { createService, getServicesByEvent } = require('../controllers/serviceController');

// Create a service for an event
router.post('/', createService);

// Get services for a specific event
router.get('/:eventId', getServicesByEvent);
router.post('/', createService);  // Add this route

module.exports = router;

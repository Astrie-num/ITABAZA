const express = require('express');
const router = express.Router();
const { getCoffins, createCoffin } = require('../controllers/coffinController');

// Get all coffins for a specific service
router.get('/:serviceId', getCoffins);

// Create a new coffin for a specific service
router.post('/', createCoffin);

module.exports = router;

// routes/cemeteryRoutes.js
const express = require('express');
const { getCemeteries,createCemetery } = require('../controllers/cemeteryController');
const router = express.Router();

// Get all cemeteries under a specific service
router.get('/:serviceId', getCemeteries);
router.post('/', createCemetery);  // Add this route

module.exports = router;

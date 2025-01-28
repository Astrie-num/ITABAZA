// routes/flowerRoutes.js
const express = require('express');
const { getFlowers,createFlower } = require('../controllers/flowerController');
const router = express.Router();

// Get all flowers under a specific service
router.get('/:serviceId', getFlowers);
router.post('/', createFlower);  // Add this route

module.exports = router;

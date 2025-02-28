const express = require('express');
const router = express.Router();
const trackController = require('../controllers/trackController');

// Track donations
router.get('/', trackController.trackDonations);

module.exports = router;
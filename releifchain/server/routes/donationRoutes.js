const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

// Create a donation
router.post('/', donationController.createDonation);

module.exports = router;
const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaignController');
const upload = require('../middleware/upload');
const { isLoggedIn } = require('../middleware/auth');

// Render form to create a new campaign
router.get('/new', isLoggedIn, campaignController.renderCreateForm);

// Handle campaign creation
router.post('/', isLoggedIn, upload.single('image'), campaignController.createCampaign);

// List all campaigns
router.get('/', campaignController.listCampaigns);

// Show a specific campaign
router.get('/:id', campaignController.showCampaign);

// Render form to edit a campaign
router.get('/:id/edit', isLoggedIn, campaignController.renderEditForm);

// Handle campaign update
router.post('/:id/edit', isLoggedIn, campaignController.updateCampaign);

module.exports = router;
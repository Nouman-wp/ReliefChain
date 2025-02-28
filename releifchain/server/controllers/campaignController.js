const Campaign = require('../models/Campaign');
const { formatCurrency } = require('../utils/helpers');

module.exports.listCampaigns = async (req, res) => {
  const campaigns = await Campaign.find({});
  res.render('pages/campaigns', { title: 'Campaigns', campaigns });
};

module.exports.showCampaign = async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);
  res.render('pages/campaign-details', { title: 'Campaign Details', campaign });
};

module.exports.renderCreateForm = (req, res) => {
    res.render('pages/campaign-create', { title: 'Create Campaign' });
  };

  module.exports.createCampaign = async (req, res) => {
    const { title, description, goal } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Save image path
  
    console.log('User creating campaign:', req.user); // Debugging: Check if req.user is set
  
    try {
      const newCampaign = new Campaign({
        title,
        description,
        goal,
        image,
        createdBy: req.user._id, // Associate the campaign with the logged-in user
      });
      await newCampaign.save();
      req.flash('success', 'Campaign created successfully!');
      res.redirect('/campaigns');
    } catch (err) {
      console.log(err);
      req.flash('error', 'Failed to create campaign. Please try again.');
      res.redirect('/campaigns/new');
    }
  };

module.exports.renderEditForm = async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);
  res.render('pages/campaign-edit', { title: 'Edit Campaign', campaign });
};

module.exports.updateCampaign = async (req, res) => {
  const { title, description, goal } = req.body;
  const campaign = await Campaign.findById(req.params.id);

  // Update fields
  campaign.title = title;
  campaign.description = description;
  campaign.goal = goal;

  // Update image if a new one is uploaded
  if (req.file) {
    campaign.image = `/uploads/${req.file.filename}`;
  }

  await campaign.save();
  req.flash('success', 'Campaign updated successfully!');
  res.redirect(`/campaigns/${campaign._id}`);
};
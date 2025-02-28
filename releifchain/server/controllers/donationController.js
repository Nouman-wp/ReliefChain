const Donation = require('../models/Donation');
const Campaign = require('../models/Campaign');

module.exports.createDonation = async (req, res) => {
  const { amount, campaignId } = req.body;
  const donation = new Donation({ amount, donor: req.user._id, campaign: campaignId });
  await donation.save();

  // Update campaign raised amount
  const campaign = await Campaign.findById(campaignId);
  campaign.raised += amount;
  await campaign.save();

  res.redirect(`/campaigns/${campaignId}`);
};
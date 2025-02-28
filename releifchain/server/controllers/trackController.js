const Donation = require('../models/Donation');

module.exports.trackDonations = async (req, res) => {
  const donations = await Donation.find({ donor: req.user._id }).populate('campaign');
  res.render('pages/track', { title: 'Track Donations', donations });
};
const Joi = require('joi');

module.exports.validateCampaign = (campaign) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    goal: Joi.number().required(),
  });
  return schema.validate(campaign);
};
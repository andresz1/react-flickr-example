const Joi = require('joi');

module.exports = {
  list: {
    query: {
      page: Joi.number().min(1).default(0),
      limit: Joi.number().min(1).max(100).default(20),
      extras: Joi.string().default('tags, url_n, owner_name'),
    },
  },
};

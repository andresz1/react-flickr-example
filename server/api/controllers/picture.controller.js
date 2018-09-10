const flickrService = require('../services/flickr.service');

exports.list = (req, res, next) => {
  const { query } = req;

  flickrService.getRecentPhotos(query.page, query.limit, query.extras)
    .then(response => res.json(response.photos))
    .catch(error => next(error));
};

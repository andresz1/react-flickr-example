const axios = require('axios').create();

const SERVICE_URL = 'https://api.flickr.com/services/rest';

axios.interceptors.request.use((config) => {
  config.params = Object.assign(config.params, { // eslint-disable-line no-param-reassign
    api_key: process.env.FLICKR_API_KEY,
    format: 'json',
    nojsoncallback: 1,
  });

  return config;
}, error => Promise.reject(error));

exports.getRecentPhotos = (page, limit, extras) => {
  const params = {
    page,
    extras,
    per_page: limit,
    method: 'flickr.photos.getRecent',
  };

  return axios.get(SERVICE_URL, { params })
    .then(({ data }) => data)
    .catch(error => error);
};

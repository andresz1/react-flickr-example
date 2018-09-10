import axios from 'axios';

import {
  FETCH_PICTURES_REQUEST,
  FETCH_PICTURES_SUCCESS,
  FETCH_PICTURES_FAILURE,
  SELECT_PICTURE,
} from '../actions/types';

function parse(data) {
  data.photo = data.photo.map(picture => {
    const src = `https://farm2.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`;
    const href = `https://www.flickr.com/photos/${picture.owner}/${picture.id}/`;

    return {
      ...picture,
      src,
      href
    };
  });

  return data;
}

export const fetchPictures = (page) => (dispatch) => {
  const params = { page };

  dispatch({ type: FETCH_PICTURES_REQUEST });

  return axios.get('/api/v1/pictures', { params })
    .then(({ data }) => {
      dispatch({
        type: FETCH_PICTURES_SUCCESS,
        payload: parse(data),
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_PICTURES_FAILURE,
        payload: error,
        error: true
      });
    });
}

export const selectPicture = (picture) => ({
  type: SELECT_PICTURE,
  payload: picture,
});

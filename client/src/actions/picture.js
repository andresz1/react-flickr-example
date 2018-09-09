import axios from 'axios';

import {
  FETCH_PICTURES_REQUEST,
  FETCH_PICTURES_SUCCESS,
  FETCH_PICTURES_FAILURE,
} from '../actions/types';

export const fetchPictures = (page) => (dispatch) => {
  const params = { page };

  dispatch({ type: FETCH_PICTURES_REQUEST });

  return axios.get('/api/v1/pictures', { params })
    .then(({ data }) => {
      dispatch({
        type: FETCH_PICTURES_SUCCESS,
        payload: data,
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

// @flow

import axios from 'axios';

import {
  FETCH_PICTURES_REQUEST,
  FETCH_PICTURES_SUCCESS,
  FETCH_PICTURES_FAILURE,
  SELECT_PICTURE,
} from '../actions/types';

export type IPicturesAction = {
  type: string,
  payload: any,
};

type PromiseAction = Promise<IPicturesAction>;
type ThunkAction = (dispatch: Dispatch) => any; // eslint-disable-line no-use-before-define
type Dispatch = (action: IPicturesAction | ThunkAction | PromiseAction | Array<IPicturesAction>) => any;

function parse(data: any): any {
  const photo: Array<IPicture> = data.photo.map(picture => {
    const src = `https://farm2.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`;
    const href = `https://www.flickr.com/photos/${picture.owner}/${picture.id}/`;

    return {
      ...picture,
      src,
      href
    };
  });

  return {
    ...data,
    photo
  };
}

export const fetchPictures = (page: number): ThunkAction => (dispatch) => {
  const params: any = { page };

  dispatch({
    type: FETCH_PICTURES_REQUEST,
    payload: {}
  });

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
      });
    });
}

export const selectPicture = (picture?: IPicture) => ({
  type: SELECT_PICTURE,
  payload: picture,
});

// @flow

import {
  FETCH_PICTURES_REQUEST,
  FETCH_PICTURES_SUCCESS,
  FETCH_PICTURES_FAILURE,
  SELECT_PICTURE,
} from '../actions/types';
import type { IPicturesAction } from '../actions/picturesActions';

export type IPicturesState = {
  page: number,
  photo: Array<IPicture>,
  pages?: number,
  perpage?: number,
  total?: number,
  selected?: IPicture,
  isFetching?: boolean,
  error?: any,
};

const initial: IPicturesState = {
  page: 0,
  photo: [],
};

const pictures = (state: IPicturesState = initial , { type, payload }: IPicturesAction): IPicturesState => {
  switch(type) {
    case FETCH_PICTURES_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_PICTURES_SUCCESS:
      const photo: Array<IPicture> = state.photo;

      return {
        ...state,
        ...payload,
        photo: photo.concat(payload.photo),
        isFetching: false,
        error: null,
      }
    case FETCH_PICTURES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload.message,
      }
    case SELECT_PICTURE:
      return {
        ...state,
        selected: payload,
      }
    default:
      return state;
  }
};

export default pictures;

import picturesReducer from './picturesReducer';
import {
  FETCH_PICTURES_REQUEST,
  FETCH_PICTURES_SUCCESS,
  FETCH_PICTURES_FAILURE,
  SELECT_PICTURE,
} from '../actions/types';
import { picture } from '../fixtures';

describe('pictures reducer', () => {
  it('should handle initial state', () => {
    expect(picturesReducer(undefined, {})).toEqual({
      page: 0,
      photo: [],
    });
  });

  it('should handle picture fetching request', () => {
    const action = {
      type: FETCH_PICTURES_REQUEST,
    };

    expect(picturesReducer(undefined, action)).toEqual({
      page: 0,
      photo: [],
      isFetching: true,
    });
  });

  it('should handle picture fetching success', () => {
    const action = {
      type: FETCH_PICTURES_SUCCESS,
      payload: {
        page: 0,
        photo: [],
        perpage: 1,
        total: 1,
        error: null,
      },
    };

    expect(picturesReducer(undefined, action)).toEqual({
      ...action.payload,
      isFetching: false,
    });
  });

  it('should handle picture fetching failure', () => {
    const action = {
      type: FETCH_PICTURES_FAILURE,
      payload: {
        page: 0,
        photo: [],
        error: undefined,
      },
    };

    expect(picturesReducer(undefined, action)).toEqual({
      ...action.payload,
      isFetching: false,
    });
  });

  it('should handle picture selection', () => {
    const action = {
      type: SELECT_PICTURE,
      payload: picture,
    };

    expect(picturesReducer(undefined, action)).toEqual({
      page: 0,
      photo: [],
      selected: picture,
    });
  });
});

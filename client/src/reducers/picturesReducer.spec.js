import {
  FETCH_PICTURES_REQUEST,
  FETCH_PICTURES_SUCCESS,
  FETCH_PICTURES_FAILURE,
  SELECT_PICTURE,
} from '../actions/types';
import picturesReducer from './picturesReducer';

const picture = {
  id: '44592167171',
  owner: '166588675@N05',
  secret: '144e4f8561',
  server: '1848',
  farm: 2,
  title: 'Olden 3',
  ispublic: 1,
  isfriend: 0,
  isfamily: 0,
  ownername: 'OldenCam3',
  tags: '',
  src: 'https://farm2.staticflickr.com/1848/44592167171_144e4f8561.jpg',
  href: 'https://www.flickr.com/photos/166588675@N05/44592167171/'
};

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

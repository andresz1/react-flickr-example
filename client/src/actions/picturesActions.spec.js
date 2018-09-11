import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { fetchPictures, selectPicture } from './picturesActions';
import {
  FETCH_PICTURES_REQUEST,
  FETCH_PICTURES_SUCCESS,
  SELECT_PICTURE,
} from './types';
import { picture } from '../fixtures';

const mockStore = configureStore([thunk]);

describe('pictures reducer', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('should handle picture fetching', () => {
    const response = {
      page: 1,
      pages: 1000,
      perpage: 1,
      total: 1000,
      photo: [picture],
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response,
      });
    });

    const store = mockStore({});

    return store.dispatch(fetchPictures(0))
      .then(() => {
        expect(store.getActions()).toEqual([{
          type: FETCH_PICTURES_REQUEST,
          payload: {},
        }, {
          type: FETCH_PICTURES_SUCCESS,
          payload: response,
        }]);
      });
  });

  it('should handle picture selection', () => {
    const store = mockStore({});

    store.dispatch(selectPicture());

    expect(store.getActions()).toEqual([{
      type: SELECT_PICTURE,
    }]);
  });
});

// @flow

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import type { Store } from 'redux';

import reducers from '../reducers';

export default function configureStore(): Store {
  return createStore(
    reducers,
    applyMiddleware(thunk, logger)
  );
};

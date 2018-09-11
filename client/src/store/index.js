// @flow

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import type { Store } from 'redux';

import reducers from '../reducers';

export default function configureStore(): Store {
  let middlewares;

  if (process.env.NODE_ENV !== 'production')  {
    middlewares = applyMiddleware(thunk, logger);
  } else {
    middlewares = applyMiddleware(thunk);
  }

  return createStore(reducers, middlewares);
};

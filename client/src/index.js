// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import type { Store } from 'redux';

import configureStore from './store'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store: Store = configureStore();
const root: HTMLElement | null = document.getElementById('root');

if (!root) {
  throw new Error('Could not find root');
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
registerServiceWorker();



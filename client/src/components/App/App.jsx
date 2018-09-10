// @flow

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Gallery from '../../containers/Gallery';
import styles from './App.css';

type Props = {};

const App = (props: Props) => (
  <Router>
    <div>
      <h1 className={styles.title}>
        Flickr's latest photos
      </h1>

      <Route exact path="/" component={Gallery} />
    </div>
  </Router>
);

export default App;

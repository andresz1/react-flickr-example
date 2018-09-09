// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Gallery from '../../containers/Gallery';
import './App.css';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Flickr's latest photos</h1>

          <Route exact path="/" component={Gallery} />
        </div>
      </Router>
    );
  }
}

export default App;

// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Gallery from '../../containers/Gallery';
import './styles.css';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Hello world!</h1>

          <Route exact path="/" component={Gallery} />
        </div>
      </Router>
    );
  }
}

export default App;

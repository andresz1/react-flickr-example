// @flow

import React, { Component } from 'react';

import PictureGrid from '../../components/PictureGrid';
import './styles.css';

type Props = {};

class Gallery extends Component<Props> {
  render() {
    return (
      <div>
        Gallery
        <PictureGrid />
      </div>
    );
  }
}

export default Gallery;

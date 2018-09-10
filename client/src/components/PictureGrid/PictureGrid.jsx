// @flow

import React from 'react';

import PictureItem from '../PictureItem';
import styles from './PictureGrid.css';

type Props = {
  pictures: Array<Picture>,
  onSelect: Function
};

const PictureGrid = (props: Props) => (
  <div className={styles.container}>
    {props.pictures.map((picture, index) =>
      <PictureItem
        key={index}
        picture={picture}
        onSelect={props.onSelect}
      />
    )}
  </div>
);

export default PictureGrid;

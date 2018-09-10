// @flow

import React from 'react';

import PictureItem from '../PictureItem';
import styles from './PictureGrid.css';

type IProps = {
  pictures: Array<IPicture>,
  onSelect: Function
};

const PictureGrid = (props: IProps) => (
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

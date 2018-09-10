// @flow

import React from 'react';
import ImageLoader from 'react-load-image';
import { BubbleLoader } from 'react-css-loaders';

import PictureImage from '../PictureImage';
import styles from './PictureItem.css';

type Props = {
  picture: Picture,
  onSelect: Function
};

const PictureItem = (props: Props) => {
  const { picture } = props;

  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          {props.picture.title || '-'}
        </div>

        <div className={styles.description}>by&nbsp;
          <a
            href={picture.href}
            target="_blank">
            {picture.ownername}
          </a>
        </div>
      </div>

      <ImageLoader src={picture.src}>
        <PictureImage onClick={() => props.onSelect(props.picture)}/>

        <PictureImage>
          Error
        </PictureImage>

        <PictureImage>
          <BubbleLoader
            color="#fff"
            size="4"
          />
        </PictureImage>
      </ImageLoader>
    </div>
  );
};

export default PictureItem;

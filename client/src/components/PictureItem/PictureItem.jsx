// @flow

import React from 'react';
import ImageLoader from 'react-load-image';
import { BubbleLoader } from 'react-css-loaders';

import PictureItemImage from '../PictureItemImage';
import styles from './PictureItem.css';

type IProps = {
  picture: IPicture,
  onSelect: Function
};

const PictureItem = (props: IProps) => {
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
        <PictureItemImage onClick={() => props.onSelect(props.picture)}/>

        <PictureItemImage>
          Error
        </PictureItemImage>

        <PictureItemImage>
          <BubbleLoader
            color="#fff"
            size="4"
          />
        </PictureItemImage>
      </ImageLoader>
    </div>
  );
};

export default PictureItem;

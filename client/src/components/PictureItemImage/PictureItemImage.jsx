// @flow

import * as React from 'react';
import styles from './PictureItemImage.css';

type IProps = {
  children?: React.Node,
  src?: string,
  onClick: Function,
};

const PictureItemImage = (props: IProps) => (
  <div
    className={styles.container}
    style={{backgroundImage: (props.src)? `url(${props.src})`: ''}}
    onClick={props.onClick}
  >
    {props.children}
  </div>
);

export default PictureItemImage;

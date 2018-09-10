// @flow

import * as React from 'react';
import styles from './PictureImage.css';

type Props = {
  children?: React.Node,
  src?: string,
  onClick: Function,
};

const PictureImage = (props: Props) => (
  <div
    className={styles.container}
    style={{backgroundImage: (props.src)? `url(${props.src})`: ''}}
    onClick={props.onClick}
  >
    {props.children}
  </div>
);

export default PictureImage;

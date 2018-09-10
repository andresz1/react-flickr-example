// @flow

import * as React from 'react';

import styles from './PictureModal.css';

type Props = {
  picture: Picture,
  onNext: Function,
  onPrevious: Function,
  onClose: Function,
};

const PictureModal = (props: Props) => {
  const { picture } = props;

  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        onClick={props.onPrevious}
      >
        <i className="material-icons">
          chevron_left
        </i>
      </button>

      <div className={styles.modal}>
        <img
          className={styles.image}
          src={picture.src}
          alt=""
        />
      </div>

      <div className={styles.content}>
        Title: {picture.title}
        <br/>
        Tags: {picture.tags}
      </div>

      <button
        className={styles.btn}
        onClick={props.onNext}>
        <i className="material-icons">
          chevron_right
        </i>
      </button>

      <button
        className={styles.close}
        onClick={props.onClose}>
        <i className="material-icons">
          close
        </i>
      </button>
    </div>
  );
};

export default PictureModal;

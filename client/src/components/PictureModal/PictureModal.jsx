// @flow

import React, { Component }  from 'react';

import styles from './PictureModal.css';

type IProps = {
  picture: IPicture,
  onNext: Function,
  onPrevious: Function,
  onClose: Function,
};

class PictureModal extends Component<IProps> {
  constructor(props: IProps){
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  toggleScroll(active: boolean) {
    if (document.documentElement) {
      document.documentElement.style.overflow = (active) ? 'scroll' : 'hidden';
    }
  }

  /*:: handleKeyDown: () => void */
  handleKeyDown(e: KeyboardEvent) {
    const code: number = e.keyCode || e.which;

    if (code === 37) {
      this.props.onPrevious();
    } else if (code === 39) {
      this.props.onNext();
    } else if (code === 27) {
      this.props.onClose();
    }
  }

  componentDidMount() {
    this.toggleScroll(false);

    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount() {
    this.toggleScroll(true);

    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  render() {
    const { picture } = this.props;

    return (
      <div className={styles.container}>
        <button
          className={styles.btn}
          onClick={this.props.onPrevious}
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
          onClick={this.props.onNext}>
          <i className="material-icons">
            chevron_right
          </i>
        </button>

        <button
          className={styles.close}
          onClick={this.props.onClose}>
          <i className="material-icons">
            close
          </i>
        </button>
      </div>
    );
  }
}

export default PictureModal;

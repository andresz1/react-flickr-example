// @flow

import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { RotateSpinLoader } from 'react-css-loaders';

import PictureGrid from '../../components/PictureGrid';
import PictureModal from '../../components/PictureModal';
import { fetchPictures, selectPicture } from '../../actions/picturesActions.js';
import type { IPicturesState } from '../../reducers/picturesReducer.js';

type IProps = {
  dispatch: Function,
  pictures: IPicturesState,
};

class Gallery extends Component<IProps> {
  handleMore() {
    const { dispatch, pictures } = this.props;

    if (!pictures.isFetching) {
      dispatch(fetchPictures(pictures.page + 1));
    }
  }

  handleSelect(picture: IPicture) {
    const { dispatch } = this.props;

    dispatch(selectPicture(picture));
  }

  handleNext() {
    const { dispatch, pictures } = this.props;

    let index: number = pictures.photo.indexOf(pictures.selected) + 1;
    index = index % pictures.photo.length;

    dispatch(selectPicture(pictures.photo[index]));
  }

  handlePrevious() {
    const { dispatch, pictures } = this.props;

    let index: number = pictures.photo.indexOf(pictures.selected) - 1;
    index = (index < 0) ? pictures.photo.length - 1 : index;

    dispatch(selectPicture(pictures.photo[index]));
  }

  handleClose() {
    const { dispatch } = this.props;

    dispatch(selectPicture());
  }

  renderModal() {
    const { pictures } = this.props;

    if (pictures.selected) {
      return (
        <PictureModal
          picture={pictures.selected}
          onNext={this.handleNext.bind(this)}
          onPrevious={this.handlePrevious.bind(this)}
          onClose={this.handleClose.bind(this)}
        />
      );
    }
  }

  render() {
    const { pictures } = this.props;

    const hasMore : boolean = pictures.pages === undefined || pictures.page < pictures.pages;

    return (
      <InfiniteScroll
        loadMore={this.handleMore.bind(this)}
        hasMore={hasMore}
        loader={
          <RotateSpinLoader
            color="#FF0084"
            size="3"
          />
        }
      >
        <PictureGrid
          pictures={pictures.photo}
          onSelect={this.handleSelect.bind(this)}
        />

        {this.renderModal()}
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = (state) => ({
  pictures: state.pictures,
});

export default connect(mapStateToProps)(Gallery);

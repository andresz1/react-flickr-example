// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import PictureGrid from '../../components/PictureGrid';
import { fetchPictures } from '../../actions/picture.js';
import './Gallery.css';

type Props = {
  dispatch: Function,
  pictures: any,
};
type State = {};

class Gallery extends Component<Props, State> {
  handleMore() {
    const { dispatch, pictures } = this.props;

    if (!pictures.isFetching) {
      dispatch(fetchPictures(pictures.page + 1));
    }
  }

  render() {
    const { pictures } = this.props;

    const hasMore = pictures.pages === undefined || pictures.page < pictures.pages;

    return (
      <InfiniteScroll
        loadMore={this.handleMore.bind(this)}
        hasMore={hasMore}
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        <PictureGrid pictures={pictures.photo} />
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = (state) => ({ pictures: state.pictures });

export default connect(mapStateToProps)(Gallery);

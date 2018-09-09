// @flow

import React from 'react';

import PictureItem from '../PictureItem';

type Props = {
  name: string,
  pictures: Array<Picture>,
};

const PictureGrid = (props: Props) => (
  <div>
    Picture Grid {props.name}
    {props.pictures.map((picture, index) =>
      <PictureItem
        key={index}
        picture={picture}
      />
    )}
  </div>
);

export default PictureGrid;

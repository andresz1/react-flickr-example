// @flow

import React from 'react';

type Props = {
  picture: Picture,
};

const PictureItem = (props: Props) => (
  <div>{props.picture.title}</div>
);

export default PictureItem;

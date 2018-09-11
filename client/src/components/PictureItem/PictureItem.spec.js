import React from 'react';
import { shallow } from 'enzyme';

import PictureItem from './PictureItem';
import PictureItemImage from '../PictureItemImage';
import { picture } from '../../fixtures';

const setup = (setupProps = {}) => {
  const defaultProps = {
    picture,
    handleSelect: jest.fn()
  };
  const props = { ...defaultProps, ...setupProps };
  const wrapper = shallow(
    <PictureItem
      picture={props.picture}
      onSelect={props.handleSelect}
    />
  );

  return {
    props,
    wrapper
  };
};

describe('<PictureItem />', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('puts a dash when there is no title', () => {
    const { wrapper } = setup({ picture: {
      ...picture,
      title: undefined,
    }});
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onSelect when image clicked', () => {
    const { props, wrapper } = setup();

    wrapper.find(PictureItemImage).first().simulate('click');
    expect(props.handleSelect).toHaveBeenCalled();
  });
});

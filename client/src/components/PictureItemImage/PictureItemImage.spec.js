import React from 'react';
import { shallow } from 'enzyme';

import PictureItemImage from './PictureItemImage';
import { picture } from '../../fixtures';

const setup = (setupProps = {}) => {
  const defaultProps = {
    src: picture.src,
    handleClick: jest.fn()
  };
  const props = { ...defaultProps, ...setupProps };
  const wrapper = shallow(
    <PictureItemImage
      src={props.src}
      onClick={props.handleClick}
    />
  );

  return {
    props,
    wrapper
  };
};

describe('<PictureItemImage />', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('puts empty background when image is not provided', () => {
    const { wrapper } = setup({
      src: undefined,
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('calls onClick when clicked', () => {
    const { props, wrapper } = setup();

    wrapper.simulate('click');
    expect(props.handleClick).toHaveBeenCalled();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import PictureItemImage from './PictureItemImage';

const setup = (setupProps = {}) => {
  const defaultProps = {
    src: 'https://farm2.staticflickr.com/1848/44592167171_144e4f8561.jpg',
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

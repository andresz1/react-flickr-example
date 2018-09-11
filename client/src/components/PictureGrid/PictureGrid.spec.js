import React from 'react';
import { shallow } from 'enzyme';
import PictureGrid from './PictureGrid';

const setup = (setupProps = {}) => {
  const defaultProps = {
    pictures: [],
    handleSelect: jest.fn()
  };
  const props = { ...defaultProps, ...setupProps };
  const wrapper = shallow(
    <PictureGrid
      pictures={props.pictures}
      onSelect={props.handleSelect}
    />
  );

  return {
    props,
    wrapper
  };
};

describe('<PictureGrid />', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

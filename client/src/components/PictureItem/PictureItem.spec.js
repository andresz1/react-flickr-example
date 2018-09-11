import React from 'react';
import { shallow } from 'enzyme';
import PictureItem from './PictureItem';
import PictureItemImage from '../PictureItemImage';

const picture = {
  id: '44592167171',
  owner: '166588675@N05',
  secret: '144e4f8561',
  server: '1848',
  farm: 2,
  title: 'Olden 3',
  ispublic: 1,
  isfriend: 0,
  isfamily: 0,
  ownername: 'OldenCam3',
  tags: '',
  src: 'https://farm2.staticflickr.com/1848/44592167171_144e4f8561.jpg',
  href: 'https://www.flickr.com/photos/166588675@N05/44592167171/'
};

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

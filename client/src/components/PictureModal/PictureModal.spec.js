import React from 'react';
import { shallow } from 'enzyme';
import PictureModal from './PictureModal';

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
    handleNext: jest.fn(),
    handlePrevious: jest.fn(),
    handleClose: jest.fn(),
  };
  const props = { ...defaultProps, ...setupProps };
  const wrapper = shallow(
    <PictureModal
      picture={props.picture}
      onNext={props.handleNext}
      onPrevious={props.handlePrevious}
      onClose={props.handleClose}
    />
  );

  return {
    props,
    wrapper
  };
};

describe('<PictureModal />', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onPrevious when clicked', () => {
    const { props, wrapper } = setup();

    wrapper.find('button').first().simulate('click');
    expect(props.handlePrevious).toHaveBeenCalled();
  });

  it('calls onNext when clicked', () => {
    const { props, wrapper } = setup();

    wrapper.find('button').at(1).simulate('click');
    expect(props.handleNext).toHaveBeenCalled();
  });

  it('calls onClose when clicked', () => {
    const { props, wrapper } = setup();

    wrapper.find('button').last().simulate('click');
    expect(props.handleClose).toHaveBeenCalled();
  });

  it('calls onPrevious when left key is pressed', () => {
    const KEYBOARD_LEFT_CODE = 37;
    const events = {
      keydown: null,
    };

    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });

    const { props } = setup();

    events.keydown({ keyCode: KEYBOARD_LEFT_CODE });

    expect(props.handlePrevious).toHaveBeenCalled();
  });

  it('calls onNext when right key is pressed', () => {
    const KEYBOARD_RIGHT_CODE = 39;
    const events = {
      keydown: null,
    };

    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });

    const { props } = setup();

    events.keydown({ keyCode: KEYBOARD_RIGHT_CODE });

    expect(props.handleNext).toHaveBeenCalled();
  });

  it('calls onClose when esc key is pressed', () => {
    const KEYBOARD_ESCAPE_CODE = 27;
    const events = {
      keydown: null,
    };

    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });

    const { props } = setup();

    events.keydown({ keyCode: KEYBOARD_ESCAPE_CODE });

    expect(props.handleClose).toHaveBeenCalled();
  });
});

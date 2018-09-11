import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { shallow } from 'enzyme';

import Gallery from './Gallery';

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
  const middlewares = [ thunk ];
  const store = configureStore(middlewares)({
    pictures: {
      photo: [picture],
      page: 0,
      pages: 5
    }
  });
  const wrapper = shallow(<Gallery store={store} />);

  return {
    store,
    wrapper
  };
};

describe('<Gallery />', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('handles pictures fetching', () => {
    const { store, wrapper } = setup();

    wrapper.dive().instance().handleMore();
    expect(store.getActions()).toEqual([{
      type: 'FETCH_PICTURES_REQUEST',
      payload: {},
    }]);
  });

  it('handles picture selection', () => {
    const { store, wrapper } = setup();

    wrapper.dive().instance().handleSelect(picture);
    expect(store.getActions()).toEqual([{
      type: 'SELECT_PICTURE',
      payload: picture,
    }]);
  });

  it('handles previous picture', () => {
    const { store, wrapper } = setup();

    wrapper.dive().instance().handlePrevious();
    expect(store.getActions()).toEqual([{
      type: 'SELECT_PICTURE',
      payload: picture,
    }]);
  });

  it('handles next picture', () => {
    const { store, wrapper } = setup();

    wrapper.dive().instance().handleNext();
    expect(store.getActions()).toEqual([{
      type: 'SELECT_PICTURE',
      payload: picture,
    }]);
  });
});

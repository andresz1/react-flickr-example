import {
  FETCH_PICTURES_REQUEST,
  FETCH_PICTURES_SUCCESS,
  FETCH_PICTURES_FAILURE,
} from '../actions/types';

const initialState = {
  photo: [],
  page: 0,
};

const pictures = (state = initialState , { type, payload}) => {
  switch(type) {
    case FETCH_PICTURES_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_PICTURES_SUCCESS:
      return {
        ...state,
        page: payload.page,
        pages: payload.pages,
        perpage: payload.perpage,
        total: payload.total,
        photo: state.photo.concat(payload.photo),
        isFetching: false,
      }
    case FETCH_PICTURES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload.message,
      }
    default:
      return state;
  }
};

export default pictures;

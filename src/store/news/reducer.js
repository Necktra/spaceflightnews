import {
  FETCH_STATUSES
} from '../../constants/constants';
import {
  GET_NEWS_FAILURE,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  DELETE_NEWS,
  LIKE_NEWS,
  SET_OFFSET,
} from './actions';

const initialState = {
  news: [],
  request: FETCH_STATUSES.IDLE,
  error: null,
  offset: 0,
};

function news(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return {
        ...state,
        error: null,
        request: FETCH_STATUSES.REQUEST
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state, 
        news: [...state.news, ...action.payload.data],
        request: FETCH_STATUSES.SUCCESS
      };
    case GET_NEWS_FAILURE:
      return {
        ...state, 
        error: action.payload.message,
        request: FETCH_STATUSES.FAILURE
      };
    case SET_OFFSET:
      return {
        ...state, 
        offset: action.payload.offset,
      };
    case LIKE_NEWS:
      const newNews = state.news.map(el => {
        if(el.id !== action.payload.id) {
          return el
        } else {
          return {...el, like: !el.like}
        }
      })
      return {
        ...state, 
        news: newNews
      };
    case DELETE_NEWS:
      return {
        ...state, 
        news: state.news.filter(el => el.id !== action.payload.id), 
      };
    default:
      return state;
  }
}

export default news;
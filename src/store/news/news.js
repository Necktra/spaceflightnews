
import {
    FETCH_STATUSES
  } from '../../utils/constants';
  import {
    GET_NEWS_FAILURE,
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS,
  } from './actions';
  
  const initialState = {
    news: [],
    request: FETCH_STATUSES.IDLE,
    error: null,
  };
  
  function news(state = initialState, action) {
    switch (action.type) {
      case GET_NEWS_REQUEST:
        return {
          ...state, error: null,
          request: FETCH_STATUSES.REQUEST
        };
      case GET_NEWS_SUCCESS:
        return {
            ...state, news: [...state.news, ...action.payload.data],
          request: FETCH_STATUSES.SUCCESS
        };
      case GET_NEWS_FAILURE:
        return {
          ...state, error: action.payload.message,
          request: FETCH_STATUSES.FAILURE
        };
      default:
        return state;
    }
  }
  
  export default news;
import { postAPI } from "../api/api";

const SET_ASIDE_MAIN_NEWS_ITEMS = 'SET_ASIDE_MAIN_NEWS_ITEMS';
const SET_ASIDE_MAIN_NEWS_TIMES = 'SET_ASIDE_MAIN_NEWS_TIMES';
const SET_ASIDE_MAIN_NEWS_LOADING = 'SET_ASIDE_MAIN_NEWS_LOADING';


let initialState = {
  asideMainNewsItems: [],
  asideMainNewsTimes: 'week',
  asideMainNewsLoading: true,  
}

const asideMainNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ASIDE_MAIN_NEWS_ITEMS:
      return {
        ...state,
        asideMainNewsItems: action.mainNewsItems
      }      
    case SET_ASIDE_MAIN_NEWS_TIMES:
      return {
        ...state,
        asideMainNewsTimes: action.mainNewsTimes
      }      
    case SET_ASIDE_MAIN_NEWS_LOADING:
      return {
        ...state,
        asideMainNewsLoading: action.mainNewsLoading
      }       
    default:
      return state;
  }
}

export const setAsideMainNewsItems = (mainNewsItems) => {
  return {
    type: SET_ASIDE_MAIN_NEWS_ITEMS,
    mainNewsItems
  }
}

export const setAsideMainNewsTimes = (mainNewsTimes) => {
  return {
    type: SET_ASIDE_MAIN_NEWS_TIMES,
    mainNewsTimes
  }
}

export const setAsideMainNewsLoading = (mainNewsLoading) => {
  return {
    type: SET_ASIDE_MAIN_NEWS_LOADING,
    mainNewsLoading
  }
}

export const getAsideMainNewsThunk = (times) => {
  return (dispatch) => {
    dispatch(setAsideMainNewsLoading(true));
    postAPI.getPopularPostForTimes(times).then(response => {
      dispatch(setAsideMainNewsItems(response));
      dispatch(setAsideMainNewsTimes(times));
      dispatch(setAsideMainNewsLoading(false));
    })
  }
}

export default asideMainNewsReducer;
import { postAPI } from "../api/api";

const SET_LOADING = 'SET_LOADING';
const SET_FRESH_POSTS = 'SET_FRESH_POSTS';
const SET_NUMBER = 'SET_NUMBER';

let initialState = {
  number: 9,
  freshPosts: [],
  loadingFreshPosts: true,  
}

const freshPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER:
      return {
        ...state,
        number: action.number
      }
    case SET_FRESH_POSTS:
      return {
        ...state,
        freshPosts: action.freshPosts
      }      
    case SET_LOADING:
      return {
        ...state,
        loadingFreshPosts: action.loading
      }       
    default:
      return state;
  }
}

export const setNumber = (number) => {
  return {
    type: SET_NUMBER,
    number
  }
}

export const setFreshPosts = (freshPosts) => {
  return {
    type: SET_FRESH_POSTS,
    freshPosts
  }
}

export const setLoadingFreshPost = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const getFreshPostThunk = (number) => {
  return (dispatch) => {
    dispatch(setLoadingFreshPost(true));
    postAPI.getPostNumberOrder(number).then(response => {
      dispatch(setFreshPosts(response));
      dispatch(setLoadingFreshPost(false));      
    }) 
  }
}

export default freshPostReducer;
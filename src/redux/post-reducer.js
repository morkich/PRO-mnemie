import { postAPI } from "../api/api";

const SET_POST_DATA = 'SET_POST_DATA';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const SET_VIEW = 'SET_VIEW';

let initialState = {
  postData: {
    title: {
      rendered: 'Загрузка...'
    },
    content: {
      rendered: 'Загрузка...'
    },
  },
  loading: true,
  views: 0
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST_DATA:
      return {
        ...state,
        postData: action.postData
      };
    case TOGGLE_PRELOADER:
      return {
        ...state,
        loading: action.loading
      };
    case SET_VIEW:
      return {
        ...state,
        views: state.views += 1 
      };      
    default:
      return state;
  }
}

export const setPostData = (postData) => {
  return {
    type: SET_POST_DATA,
    postData
  }
}

export const setLoading = (loading) => {
  return {
    type: TOGGLE_PRELOADER,
    loading
  }
}

export const setView = (view) => {
  return {
    type: SET_VIEW,
    view
  }
}

export const getPostDataThunk = (postId) => {
  return (dispatch) => { 
    dispatch(setLoading(true)); 
    postAPI.getPostDataById(postId).then(response => {      
      dispatch(setPostData(response));
      dispatch(setLoading(false));
    })    
  }
}

export default postReducer;
import { postAPI } from "../api/api";

const SET_POSTS = 'SET_POSTS';
const SET_LOADING = 'SET_LOADING';

let initialState = {
  posts: [],
  pageSize: 9,
  totalPageCount: 1,
  currentPage: 1,
  loading: true,
}

const postLoopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
}

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts
  }
}

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const getPostsThunk = (idCat) => {
  return (dispatch) => {
    dispatch(setLoading(true));    
    postAPI.getPostByIdCat(idCat).then(response => {
      dispatch(setPosts(response));            
      dispatch(setLoading(false));
    })        
  }
} 

export default postLoopReducer;
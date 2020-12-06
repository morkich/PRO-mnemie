import { postAPI } from "../api/api";

const SET_POSTS = 'SET_POSTS';
const SET_LOADING = 'SET_LOADING';
const SET_PARENT_CAT = 'SET_PARENT_CAT';
const SET_PARENT_CAT_NAME = 'SET_PARENT_CAT_NAME';

let initialState = {
  posts: [],
  parentCatPostLoop: 0,
  parentCatNamePostLoop: '',
  pageSizePostLoop: 9,
  totalPageCount: 1,
  currentPage: 1,
  loadingPostLoop: true,
}

const postLoopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case SET_PARENT_CAT:
      return {
        ...state,
        parentCatPostLoop: action.catId !== undefined ? action.catId : state.parentCat
      };      
    case SET_PARENT_CAT_NAME:
      return {
        ...state,
        parentCatNamePostLoop: action.catName !== undefined ? action.catName : state.parentCatName
      };      
    case SET_LOADING:
      return {
        ...state,
        loadingPostLoop: action.loading
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

export const setParentCat = (catId) => {
  return {
    type: SET_PARENT_CAT,
    catId
  }
}

export const setParentCatName = (catName) => {
  return {
    type: SET_PARENT_CAT_NAME,
    catName
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

export const getParentCatThunk = (catId, catName) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setParentCat(catId));     
    dispatch(setParentCatName(catName));     
    dispatch(setLoading(false));     
  }
}

export default postLoopReducer;
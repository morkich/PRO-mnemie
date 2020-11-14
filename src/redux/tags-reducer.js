import { tagAPI } from "../api/api";

const SET_TAGS = 'SET_TAGS';
const SET_LOADING = 'SET_LOADING';

let initialState = {
  tags: {},
  loading: true
}

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAGS:
      return {
        ...state,
        tags: action.tags
      };
    case SET_LOADING:
      return {
        ...state,
        likeLoading: action.loading
      };      
    default:
      return state;
  }
}

export const setTags = (tags) => {
  return {
    type: SET_TAGS,
    tags
  }
}

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const getTagsDataThunk = (ids) => { 
  return (dispatch) => {    
    dispatch(setLoading(true));
    tagAPI.getTags(ids).then(response => {
      dispatch(setTags(response))
      dispatch(setLoading(false));
    })
  }
}

export default tagsReducer;
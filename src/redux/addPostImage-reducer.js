import { authAPI, itemAPI } from "../api/api";
import { setAddPostImage, setAddPostImageId } from "./addNewPost-reducer";
import { setAddVideoImage, setAddVideoImageId } from "./addNewVideo-reducer";

const SET_POST_IMAGE_URL = 'SET_POST_IMAGE_URL';
const SET_POST_IMAGE_TYPE = 'SET_POST_IMAGE_TYPE';
const SET_POST_IMAGE_LOADING = 'SET_POST_IMAGE_LOADING';

let initialState = {
  postImageUrl: '',
  postImageType: '',
  postImageLoading: false
}

const postImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST_IMAGE_URL:
      return {
        ...state,
        postImageUrl: action.postImageUrl
      }      
    case SET_POST_IMAGE_TYPE:
      return {
        ...state,
        postImageType: action.postImageType
      }       
    case SET_POST_IMAGE_LOADING:
      return {
        ...state,
        postImageLoading: action.postImageLoading
      }       
    default:
      return state;
  }
}

export const setPostImageUrl = (postImageUrl) => {
  return {
    type: SET_POST_IMAGE_URL,
    postImageUrl
  }
}

export const setPostImageType = (postImageType) => {
  return {
    type: SET_POST_IMAGE_TYPE,
    postImageType
  }
}

export const setPostImageLoading = (postImageLoading) => {
  return {
    type: SET_POST_IMAGE_LOADING,
    postImageLoading
  }
}

export const postImagePostThunk = (image, filename, postType = 'posts') => {
  return (dispatch) => {
    dispatch(setPostImageLoading(true));
    authAPI.getAuthToken().then(response => {
      return response;
    }).then(authToken => {
      itemAPI.postNewImage(authToken, image, filename).then(response => {
        if(postType === 'posts') {
          dispatch(setAddPostImage(response.data.source_url));
          dispatch(setAddPostImageId(response.data.id));                          
        }
        if(postType === 'tv_video') {
          dispatch(setAddVideoImage(response.data.source_url));
          dispatch(setAddVideoImageId(response.data.id));  
          dispatch(setPostImageUrl(response.data.source_url));  
        }        
        dispatch(setPostImageLoading(false));
      })
    })    
  }
}

export default postImageReducer;
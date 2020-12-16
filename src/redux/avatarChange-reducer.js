import { authAPI, itemAPI, usersAPI } from "../api/api";
import { setAuthAvatar } from "./auth-reducer";

const SET_AVATAR_URL = 'SET_AVATAR_URL';
const SET_NEW_AVATAR_TYPE = 'SET_NEW_AVATAR_TYPE';
const SET_NEW_AVATAR_NAME = 'SET_NEW_AVATAR_NAME';
const SET_AVATAR_LOADING = 'SET_AVATAR_LOADING';

let initialState = {
  avatarUrl: '',
  newAvatarType: '',
  newAvatarName: '',  
  avatarLoading: false
}

const avatarChangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AVATAR_URL:
      return {
        ...state,
        avatarUrl: action.avatarUrl
      }      
    case SET_NEW_AVATAR_TYPE:
      return {
        ...state,
        newAvatarType: action.newAvatarType
      }       
    case SET_NEW_AVATAR_NAME:
      return {
        ...state,
        newAvatarName: action.newAvatarName
      }       
    case SET_AVATAR_LOADING:
      return {
        ...state,
        avatarLoading: action.avatarLoading
      }       
    default:
      return state;
  }
}

export const setAvatarUrl = (avatarUrl) => {
  return {
    type: SET_AVATAR_URL,
    avatarUrl
  }
}

export const setNewAvatarType = (newAvatarName) => {
  return {
    type: SET_NEW_AVATAR_TYPE,
    newAvatarName
  }
}

export const setNewAvatarName = (newAvatarName) => {
  return {
    type: SET_NEW_AVATAR_NAME,
    newAvatarName
  }
}

export const setAvatarLoading = (avatarLoading) => {
  return {
    type: SET_AVATAR_LOADING,
    avatarLoading
  }
}

export const postNewAvatarThunk = (token, image, filename, filetype, userId) => {
  return (dispatch) => {
    dispatch(setAvatarLoading(true));
    authAPI.getAuthToken().then(response => {
      return response;
    })
    .then(authToken => {
      itemAPI.postNewImage(authToken, image, filename, filetype).then(response => {
        return response.data.id;      
      })
      .then(id => {
        usersAPI.changeAvatar(userId, id).then(response => {   
          dispatch(setAuthAvatar(response.data));
          dispatch(setAvatarLoading(false));
        })  
      })        
    })
  }
}

export default avatarChangeReducer;
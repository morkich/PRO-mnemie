import { usersAPI } from "../api/api";

const LOADING_ACCAUNT = 'LOADING_ACCAUNT';
const SET_USER_DATA = 'SET_USER_DATA';
const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
const GET_ERROR = 'GET_ERROR';
const ADD_FAVORITE_EXPERT = 'ADD_FAVORITE_EXPERT';
const REMOVE_FAVORITE_EXPERT = 'REMOVE_FAVORITE_EXPERT';

let initialState = {
  username: '',
  password: '',
  userNiceName: '',
  userEmail: '',
  loggetIn: false,
  loadingAcc: false,
  token: '',
  error: '',
  firstname: '',
  lastname: '',
  avatar: '',
  userId: '',
  favoritesExperts: [],
  favoritesVideo: [],
  favoritesEvents: [],
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case LOADING_ACCAUNT:
      return {
        ...state,
        loadingAcc: action.loadingAcc
      };
    case GET_ERROR:
      return {
        ...state,
        error: action.errors
      };
    case ADD_FAVORITE_EXPERT:
      return {
        ...state,
        favoritesExperts: Array.from(new Set([...state.favoritesExperts, action.expertId]))
      };
    case REMOVE_FAVORITE_EXPERT:
      return {
        ...state,
        favoritesExperts: state.favoritesExperts.filter(id => id != action.expertId)
      };
    default:
      return state;
  }
}

export const setUserData = (data) => {
  return {
    type: SET_USER_DATA,
    data
  }
}

export const updateUserData = (data) => {
  return {
    type: UPDATE_USER_DATA,
    data
  }
}

export const toggleLoadingAcc = (loadingAcc) => {
  return {
    type: LOADING_ACCAUNT,
    loadingAcc
  }
}

export const getError = (errors) => {
  return {
    type: GET_ERROR,
    errors
  }
}

export const addFavoriteExpert = (expertId) => {
  return {
    type: ADD_FAVORITE_EXPERT,
    expertId
  }
}

export const removeFavoriteExpert = (expertId) => {
  return {
    type: REMOVE_FAVORITE_EXPERT,
    expertId
  }
}

export const authThunk = (token) => {
  return (dispatch) => {
    if (token) {
      dispatch(toggleLoadingAcc(true));
      usersAPI.getMe().then(
        data => {
          dispatch(setUserData({
            loggetIn: true,
            userId: data.id,
            firstname: data.pro_firstname,
            lastname: data.pro_lastname,
            avatar: data.avatar,
            loadingAcc: false,
            favoritesExperts: (data.pro_favorites_experts.length > 0)? JSON.parse(data.pro_favorites_experts): [],
            favoritesVideos: (data.pro_favorites_video.length > 0)? JSON.parse(data.pro_favorites_video): [],
            favoritesEvents: (data.pro_favorites_events.length > 0)? JSON.parse(data.pro_favorites_events): [],
            token: token
          }));
          dispatch(toggleLoadingAcc(false));
        }        
      )
    }    
  }
}




export default authReducer;
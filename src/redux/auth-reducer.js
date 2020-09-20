import { stopSubmit } from "redux-form";
import { authAPI, usersAPI } from "../api/api";

const LOADING_ACCAUNT = 'LOADING_ACCAUNT';
const SET_USER_DATA = 'SET_USER_DATA';
const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
const ADD_FAVORITE_EXPERT = 'ADD_FAVORITE_EXPERT';
const REMOVE_FAVORITE_EXPERT = 'REMOVE_FAVORITE_EXPERT';
const SET_ERROR = 'SET_ERROR';

let initialState = {
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
  pro_discription: '',
  pro_expirience: '',
  pro_position: '',
  pro_workplace: '',
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
    case SET_ERROR:
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

export const toggleLoadingAcc = (loadingAcc) => {
  return {
    type: LOADING_ACCAUNT,
    loadingAcc
  }
}

export const setError = (errors) => {
  return {
    type: SET_ERROR,
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
            secondname: data.pro_secondname,
            avatar: data.avatar,
            favoritesExperts: (data.pro_favorites_experts.length > 0) ? JSON.parse(data.pro_favorites_experts) : [],
            favoritesVideos: (data.pro_favorites_video.length > 0) ? JSON.parse(data.pro_favorites_video) : [],
            favoritesEvents: (data.pro_favorites_events.length > 0) ? JSON.parse(data.pro_favorites_events) : [],
            pro_discription: data.pro_discription,
            pro_expirience: data.pro_expirience,
            pro_position: data.pro_position,
            pro_workplace: data.pro_workplace,
            pro_city: data.pro_city,
            loadingAcc: false,
          }));
        }        
      )    
    }
  }
}

export const setAccauntData = (data) => {
  return (dispatch) => {
    dispatch(toggleLoadingAcc(true));
    let newData = {
      pro_discription: data.discription,
      pro_expirience: data.expirience,
      pro_position: data.position,
      pro_workplace: data.workplace,
      pro_city: data.city,
    }
    usersAPI.setUserData(newData)
      .then(response => {
        dispatch(setUserData({
          pro_discription: response.data.pro_discription,
          pro_expirience: response.data.pro_expirience,
          pro_position: response.data.pro_position,
          pro_workplace: response.data.pro_workplace,
          pro_city: data.city,
        }))
        dispatch(toggleLoadingAcc(false));
      })
  }
}

export const loginThunk = (username, password) => {
  return (dispatch) => {
    dispatch(toggleLoadingAcc(true));
    authAPI.getToken(username, password)
      .then(data => {
        if(data.token) {
          localStorage.setItem('token', data.token);
          dispatch(setUserData({
            userNiceName: data.user_nicename,
            userEmail: data.user_email,
            token: data.token
          }));
          authAPI.getAccount(data.token)
            .then(data => {
              dispatch(setUserData({
                loggetIn: true,
                userId: data.id,
                firstname: data.pro_firstname,
                lastname: data.pro_lastname,
                secondname: data.pro_secondname,
                avatar: data.avatar,
                favoritesExperts: (data.pro_favorites_experts.length > 0) ? JSON.parse(data.pro_favorites_experts) : [],
                favoritesVideos: (data.pro_favorites_video.length > 0) ? JSON.parse(data.pro_favorites_video) : [],
                favoritesEvents: (data.pro_favorites_events.length > 0) ? JSON.parse(data.pro_favorites_events) : [],
                pro_discription: data.pro_discription,
                pro_expirience: data.pro_expirience,
                pro_position: data.pro_position,
                pro_workplace: data.pro_workplace,
                pro_city: data.pro_city,       
              }));
              dispatch(toggleLoadingAcc(false));     
          });            
        }
      })
      .catch(err => {        
        let action = stopSubmit('login', {
          _error: '!Неверные данные для входа',
        });
        dispatch(action);
        dispatch(toggleLoadingAcc(false));
      })
  }
}

export default authReducer;
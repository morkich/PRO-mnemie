import { authAPI, usersAPI } from "../api/api";
import { setUserData } from "./auth-reducer";

const SET_REGISTER_DATA = 'SET_REGISTER_DATA';
const SET_NAME = 'SET_NAME';
const SET_REGISTER_ERROR = 'SET_REGISTER_ERROR';
const SET_LOADING = 'SET_LOADING';

let initialState = {
  registerData: {},
  registerName: '', 
  requestError: null,
  registerLoading: true,
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER_DATA:
      return {
        ...state,
        registerData: action.registerData
      }
    case SET_NAME:
      return {
        ...state,
        registerName: action.name
      }      
    case SET_REGISTER_ERROR:
      return {
        ...state,
        requestError: action.requestError
      }      
    case SET_LOADING:
      return {
        ...state,
        registerLoading: action.loading
      }       
    default:
      return state;
  }
}

export const setRegisterData = (registerData) => {
  return {
    type: SET_REGISTER_DATA,
    registerData
  }
}

export const setName = (name) => {
  return {
    type: SET_NAME,
    name
  }
}
export const setRegisterError = (requestError) => {
  return {
    type: SET_REGISTER_ERROR,
    requestError
  }
}

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const postRegisterNewUserThunk = (userData) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    usersAPI.postNewUser(userData)
    .then(response => {
      if(response.status === 200){
        return {
          id: response.data.id,
          userName: userData.username,
          password: userData.password,
        }
      // }else if (response) {
      }else{        
        dispatch(setLoading(false));
        return false;
      }
    }).catch(error => {
      console.log(error);
      if (error.message.match(/400/gi)) {
        dispatch(setRegisterError('!Имя или электронная почта уже зарегестрированы')); 
      }      
      dispatch(setLoading(false));
    })
    .then(data => {
      authAPI.getToken(data.userName, data.password).then(response => {
        if(response) {
          localStorage.setItem('token', response.token);
          return {
            userData: data,
            token: response.token
          }
        }else{
          return false;
        }
    })
    .then(data => {
      authAPI.getAccount(data.token).then( response => {
        console.log(response);
        dispatch(setUserData({
          loggetIn: true,
          userId: response.id,
          firstname: response.pro_firstname ? data.pro_firstname : data.userData.userName,
          loadingAcc: false,
        }));
      }) 
    })
  })
}}

export default registerReducer; 
  




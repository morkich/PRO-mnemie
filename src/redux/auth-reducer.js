const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const SET_USER_DATA = 'SET_USER_DATA';
const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
const GET_ERROR = 'GET_ERROR';

let initialState = {
  username: '',
  password: '',
  userNiceName: '',
  userEmail: '',
  loggetIn: false,
  isLoading: false,
  token: '',
  error: '', 
  firstname: '',
  lastname: '',
  avatar: '',
  userId: ''
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
    case TOGGLE_PRELOADER:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case GET_ERROR:
      return {
        ...state,
        error: action.errors
      }
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

export const toggleisLoading = (isLoading) => {
  return {
    type: TOGGLE_PRELOADER,
    isLoading
  }
}

export const getError = (errors) => {
  return {
    type: GET_ERROR,
    errors
  }
}

export default authReducer;
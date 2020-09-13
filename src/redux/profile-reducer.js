import { usersAPI } from "../api/api";

const SET_PROFILE = 'SET_PROFILE';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';

let initialState = {
  profile: {},
  favorites: false,
  isLoading: true
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case TOGGLE_PRELOADER:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
}

export const setUserProfile = (profile) => {
  return {
    type: SET_PROFILE,
    profile
  }
}

export const toggleisLoading = (isLoading) => {
  return {
    type: TOGGLE_PRELOADER,
    isLoading
  }
}

export const getProfile = (userId) => {
  return (dispatch) => {
    if (userId == 'me') {
      dispatch(toggleisLoading(true));
      usersAPI.getMe().then(data => {        
        dispatch(setUserProfile(data));
        dispatch(toggleisLoading(false));
      });
    } else {    
    dispatch(toggleisLoading(true));
      usersAPI.getExpert(userId).then(data => {
        dispatch(setUserProfile(data[0]));
        dispatch(toggleisLoading(false));
      });
    }
  }
}


export default profileReducer;
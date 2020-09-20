import { optionsAPI } from "../api/api";

const SET_LOGO = 'SET_LOGO';

let initialState = {
  logo: '',
}

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGO:
      return {
        ...state,
        logo: action.logo
      }
    default:
      return state;
  }
}

export const setLogo = (logo) => {
  return {
    type: SET_LOGO,
    logo
  }
}

export const getLogo = () => {
  return (dispatch) => {
    optionsAPI.getLogo().then(logo => {
      dispatch(setLogo(logo));
    })
  } 
}

export default optionsReducer;
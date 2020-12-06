import { optionsAPI } from "../api/api";

const SET_MENU = 'SET_MENU';
const SET_LOADING = 'SET_LOADING';

let initialState = {
  menu: [],
  loadingMenu: true
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return {
        ...state,
        menu: action.menu
      }      
    case SET_LOADING:
      return {
        ...state,
        loadingMenu: action.loading
      };
    default:
      return state;
  }
}


export const setMenu = (menu) => {
  return {
    type: SET_MENU,
    menu
  }
}

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const setMenuThunk = (menuId = 15) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    optionsAPI.getMenu(menuId).then(response => {
      dispatch(setMenu(response));
      dispatch(setLoading(false));
    })    
  }
}

export default menuReducer;
import { postAPI } from "../api/api";

const SET_LOADING = 'SET_LOADING';
const SET_ITEMS = 'SET_ITEMS';
const SET_ASIDE_TYPE = 'SET_ASIDE_TYPE';

let initialState = {
  asideItems: [],
  asideLoading: true,  
}

const asideReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        asideItems: action.asideItems
      }      
    case SET_LOADING:
      return {
        ...state,
        asideLoading: action.loading
      }       
    default:
      return state;
  }
}

export const setAsideType = (typeAside) => {
  return {
    type: SET_ASIDE_TYPE,
    typeAside
  }
}

export const setAsideItems = (asideItems) => {
  return {
    type: SET_ITEMS,
    asideItems
  }
}

export const setAsideLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const getAsideItemsThunk = (type) => {
  return (dispatch) => {
    dispatch(setAsideLoading(true));
    postAPI.getPosts(type).then( response => {
      dispatch(setAsideItems(response));
      dispatch(setAsideLoading(false));      
    })
  }
}

export default asideReducer;
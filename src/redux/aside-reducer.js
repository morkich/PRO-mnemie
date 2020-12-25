import { postAPI } from "../api/api";

const SET_ASIDE_LOADING = 'SET_ASIDE_LOADING';
const SET_ASIDE_ITEMS = 'SET_ASIDE_ITEMS';
const SET_ASIDE_TYPE = 'SET_ASIDE_TYPE';

let initialState = {
  asideItems: [],
  asideLoading: true,  
}

const asideReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ASIDE_ITEMS:
      return {
        ...state,
        asideItems: action.asideItems
      }      
    case SET_ASIDE_LOADING:
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
    type: SET_ASIDE_ITEMS,
    asideItems
  }
}

export const setAsideLoading = (loading) => {
  return {
    type: SET_ASIDE_LOADING,
    loading
  }
}

export const getAsideItemsThunk = (type) => {
  return (dispatch) => {
    dispatch(setAsideLoading(true));
    postAPI.getPosts(type).then( response => {
      if(type === 'asidebanners'){
      }else{
        dispatch(setAsideItems(response));
      }      
      dispatch(setAsideLoading(false));      
    })
  }
}

export default asideReducer;
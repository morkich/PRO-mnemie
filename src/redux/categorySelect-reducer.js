import { catAPI } from "../api/api";

const SET_ALL_CATEGORY_SELECT = 'SET_ALL_CATEGORY_SELECT';
const SET_SELECT_CATEGORY_SELECT = 'SET_SELECT_CATEGORY_SELECT';
const SET_LOADING_CATEGORY_SELECT = 'SET_LOADING_CATEGORY_SELECT';

let initialState = {
  allCategorySelect: [],
  selectCategorySelect: 0,
  loadingCategorySelect: false 
}

const categorySelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_CATEGORY_SELECT:
      return {
        ...state,
        allCategorySelect: action.allCategorySelect
      }      
    case SET_SELECT_CATEGORY_SELECT:
      return {
        ...state,
        selectCategorySelect: action.selectCategorySelect
      }       
    case SET_LOADING_CATEGORY_SELECT:
      return {
        ...state,
        loadingCategorySelect: action.loadingCategorySelect
      }       
    default:
      return state;
  }
}

export const setAllCategorySelect = (allCategorySelect) => {
  return {
    type: SET_ALL_CATEGORY_SELECT,
    allCategorySelect
  }
}

export const setSelectCategorySelect = (selectCategorySelect) => {
  return {
    type: SET_SELECT_CATEGORY_SELECT,
    selectCategorySelect
  }
}

export const setLoadingCategorySelect = (loadingCategorySelect) => {
  return {
    type: SET_LOADING_CATEGORY_SELECT,
    loadingCategorySelect
  }
}

export const getAllCategorySelectThunk = () => {
  return (dispatch) => {
    dispatch(setLoadingCategorySelect(true));
    catAPI.getAllCat().then(response => {      
      dispatch(setAllCategorySelect(response));
      dispatch(setLoadingCategorySelect(false));
    })
  }
}


export default categorySelectReducer;
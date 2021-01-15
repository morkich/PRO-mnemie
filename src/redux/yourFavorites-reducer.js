import { itemAPI } from "../api/api";

const SET_YOUR_FAVORITES_ITEMS = 'SET_YOUR_FAVORITES_ITEMS';
const SET_YOUR_FAVORITES_TYPE = 'SET_YOUR_FAVORITES_TYPE';
const SET_YOUR_FAVORITES_LOADING = 'SET_YOUR_FAVORITES_LOADING';

let initialState = {
  yourFavoritesItems: [],
  yourFavoriteType: '',
  yourFavoriteLoading: true,  
}

const yourFavoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_YOUR_FAVORITES_ITEMS:
      return {
        ...state,
        yourFavoritesItems: action.yourFavoritesItems
      }      
    case SET_YOUR_FAVORITES_TYPE:
      return {
        ...state,
        yourFavoriteType: action.yourFavoriteType
      }       
    case SET_YOUR_FAVORITES_LOADING:
      return {
        ...state,
        yourFavoriteLoading: action.yourFavoriteLoading
      }       
    default:
      return state;
  }
}

export const setYourFavoritesItems = (yourFavoritesItems) => {
  return {
    type: SET_YOUR_FAVORITES_ITEMS,
    yourFavoritesItems
  }
}

export const setYourFavoritesType = (yourFavoriteType) => {
  return {
    type: SET_YOUR_FAVORITES_TYPE,
    yourFavoriteType
  }
}

export const setYourFavoritesLoading = (yourFavoriteLoading) => {
  return {
    type: SET_YOUR_FAVORITES_LOADING,
    yourFavoriteLoading
  }
}

export const getYourFavoritesThunk = (favorites, postType) => {
  return (dispatch) => {
    dispatch(setYourFavoritesLoading(true));
    itemAPI.getItemById(postType, favorites).then(response => {
      console.log(response);
      dispatch(setYourFavoritesItems(response))
      dispatch(setYourFavoritesType(postType))
      dispatch(setYourFavoritesLoading(false));
    })
  }
}

export default yourFavoritesReducer;
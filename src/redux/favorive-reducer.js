import { usersAPI } from "../api/api";
import { addFavoriteExpert, removeFavoriteExpert } from '../redux/auth-reducer';

const TOGGLE_FAVOFITE_BUTTON = 'TOGGLE_FAVOFITE_BUTTON';
const FAVORITE = 'FAVORITE';
const UNFAVORITE = 'UNFAVORITE';

let initialState = {
  favoriteExpertsButtonProgress: [], 
  favoriteExpertsState: [],    
}

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOFITE_BUTTON:
      return {
        ...state,
        favoriteExpertsButtonProgress: action.isFetching 
          ? Array.from(new Set([...state.favoriteExpertsButtonProgress, action.id]))
          : state.favoriteExpertsButtonProgress.filter(id => id != action.id)
      };
    case FAVORITE:
      return {
        ...state,
        favoriteExpertsState: Array.from(new Set([...state.favoriteExpertsState, action.id]))
      };
    case UNFAVORITE:
      return {
        ...state,
        favoriteExpertsState: state.favoriteExpertsState.filter(id => id != action.id)
      };      
    default:
      return state;
  }
}

export const toggleFavoriteProgress = (isFetching, id) => {
  return {
    type: TOGGLE_FAVOFITE_BUTTON,
    isFetching,
    id
  }
}

export const addExpertFavorite = (id) => {
  return {
    type: FAVORITE,
    id
  }
}

export const removeExpertFavorite = (id) => {
  return {
    type: UNFAVORITE,
    id
  }
}

export const favoriteThunkCreator = (itemId, arrayFav) => {
  return (dispatch) => {
    dispatch(toggleFavoriteProgress(true, itemId));
    let favorites = Array.from(new Set([...arrayFav, +itemId]))
    let data = { pro_favorites_experts: JSON.stringify(favorites) }
    usersAPI.setUserData(data).then(response => {
      if (response) {
        dispatch(addFavoriteExpert(itemId));
      }
      dispatch(toggleFavoriteProgress(false, itemId));
    });
  }  
}

export const unfavoriteThunkCreator = (itemId, arrayFav) => {
  return (dispatch) => {
    dispatch(toggleFavoriteProgress(true, itemId));
    let favorites = arrayFav.filter(favId => favId != itemId);    
    let data = { pro_favorites_experts: JSON.stringify(favorites) }
    usersAPI.setUserData(data).then(response => {
      if (response) {
        dispatch(removeFavoriteExpert(itemId));
      }
      dispatch(toggleFavoriteProgress(false, itemId));
    });
  }  
}

export default commonReducer;
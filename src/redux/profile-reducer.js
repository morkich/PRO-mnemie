const SET_PROFILE = 'SET_PROFILE';
const FAVORITE = 'FAVORITE';
const UNFAVORITE = 'UNFAVORITE';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';

let initialState = {
  profile: {},
  isLoading: true
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    case FAVORITE:
      return {
        ...state,
        profile: {
          ...state.profile,
          pro_favorites: true
        }
      };
    case UNFAVORITE:
      return {
        ...state,
        profile: {
          ...state.profile,
          pro_favorites: false
        }
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

export const addFavorives = (favorite) => {
  return {
    type: FAVORITE,
    favorite
  }
}

export const removeFavorites = (unfavorite) => {
  return {
    type: UNFAVORITE,
    unfavorite
  }
}

export const toggleisLoading = (isLoading) => {
  return {
    type: TOGGLE_PRELOADER,
    isLoading
  }
}


export default profileReducer;
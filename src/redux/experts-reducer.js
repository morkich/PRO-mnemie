const FAVORITE = 'FAVORITE';
const UNFAVORITE = 'UNFAVORITE';
const SET_EXPERTS = 'SET_EXPERTS';

let initialState = {
  experts: [
    
  ]
}

const expertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE:
      return {
        ...state,
        experts: state.experts.map(expert => {
          if (expert.id == action.expertId) {
            return {
              ...expert,
              pro_favorites: true
            }
          }
          return expert;
        })
      };
    case UNFAVORITE:
      return {
        ...state,
        experts: state.experts.map(expert => {
          if (expert.id === action.expertId) {
            return {
              ...expert,
              pro_favorites: false
            }
          }
          return expert;
        })
      };
    case SET_EXPERTS:
      return {
        ...state,
        experts: [...state.experts, ...action.experts]
      }
    default:
      return state;
  }
}

export const favoritesAC = (expertId) => {
  return {
    type: FAVORITE,
    expertId
  }
}

export const unfavoritesAC = (expertId) => {
  return {
    type: UNFAVORITE,
    expertId
  }
}

export const setExpertsAC = (experts) => {
  return {
    type: SET_EXPERTS,
    experts
  }
}

export default expertsReducer;
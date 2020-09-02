const FAVORITE = 'FAVORITE';
const UNFAVORITE = 'UNFAVORITE';
const SET_EXPERTS = 'SET_EXPERTS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const TOTAL_PAGES = 'TOTAL_PAGES';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';

let initialState = {
  experts: [],
  pageSize: 9,
  totalPageCount: 1,
  currentPage: 1,
  isLoading: true
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
        experts: action.experts
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case TOTAL_PAGES:
      return {
        ...state,
        totalPageCount: action.totalPages
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

export const addFavorives = (expertId) => {
  return {
    type: FAVORITE,
    expertId
  }
}

export const removeFavorites = (expertId) => {
  return {
    type: UNFAVORITE,
    expertId
  }
}

export const setExperts = (experts) => {
  return {
    type: SET_EXPERTS,
    experts
  }
}

export const setCurrentPage = (currentPage) => {
  return {
    type: CURRENT_PAGE,
    currentPage
  }
}

export const setTotalPageCount = (totalPages) => {
  return {
    type: TOTAL_PAGES,
    totalPages
  }
}

export const toggleisLoading = (isLoading) => {
  return {
    type: TOGGLE_PRELOADER,
    isLoading
  }
}

export default expertsReducer;
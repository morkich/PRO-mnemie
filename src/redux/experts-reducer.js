import { usersAPI } from "../api/api";

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

export const getExpertsThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleisLoading(true));
    usersAPI.getExperts(currentPage, pageSize).then(response => {
      dispatch(toggleisLoading(false))
      dispatch(setExperts(response.data))
      dispatch(setTotalPageCount(response.headers['x-wp-totalpages']))
    });
  }
}

export default expertsReducer;
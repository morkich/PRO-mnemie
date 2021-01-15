import { usersAPI, filterExpertAPI } from "../api/api";

const SET_EXPERTS = 'SET_EXPERTS';
const SET_NEW_PAGE = 'SET_NEW_PAGE';
const TOTAL_PAGES = 'TOTAL_PAGES';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const SET_CITIES = 'SET_CITIES';

let initialState = {
  experts: [],
  pageSize: 9,
  loadingExperts: true,
  uniqCities : ['Москва', 'Санкт-Петербург'],
}

const expertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPERTS:
      return {
        ...state,
        experts: action.experts
      };
    case SET_NEW_PAGE:
      return {
        ...state,
        experts: [...state.experts, ...action.experts]
      };
    case TOTAL_PAGES:
      return {
        ...state,
        totalPageCount: action.totalPages
      };
    case TOGGLE_PRELOADER:
      return {
        ...state,
        loadingExperts: action.loading
      };
    case SET_CITIES:
      return {
        ...state,
        uniqCities: action.uniqCities
      }
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

export const setNewPage = (experts) => {
  return {
    type: SET_NEW_PAGE,
    experts
  }
}

export const setTotalPageCount = (totalPages) => {
  return {
    type: TOTAL_PAGES,
    totalPages
  }
}

export const toggleisLoading = (loading) => {
  return {
    type: TOGGLE_PRELOADER,
    loading
  }
}

export const setCities = (uniqCities) => {
  return {
    type: SET_CITIES,
    uniqCities
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

export const infinityPostLoadThunk = (currentPage, pageSize) => {
  return (dispatch) => {   
    dispatch(toggleisLoading(true));
    usersAPI.getExperts(currentPage, pageSize).then(response => {
      console.log(response);
      if(+response.headers['x-wp-totalpages'] >= currentPage) {      
        dispatch(setNewPage(response.data))
      }     
      dispatch(toggleisLoading(false))
    });
  }
}

export const getFilterExpertThunk = (filter, query) => {
  return (dispatch) => {
    dispatch(toggleisLoading(true));
    filterExpertAPI.getfilterExpert(filter, query).then(response => {      
      usersAPI.getExpert(response).then(response => {
        dispatch(setExperts(response))
        dispatch(toggleisLoading(false))
      })            
    })
  }
}

export const getUniqUserCities = (fieldName) => {
  return (dispatch) => {
    dispatch(toggleisLoading(true));    
    usersAPI.getAllUniqCities()
      .then(data => {
        dispatch(setCities(Object.values(data)));
        dispatch(toggleisLoading(false));    
      })
  }
}
export default expertsReducer;
import { searchAPI } from "../api/api";

const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';
const SET_SEARCH_LOADING = 'SET_SEARCH_LOADING';

let initialState = {
  searchQuery: '',
  searchResult: {'posts':[], 'tv_video':[], 'events':[]},  
  sarchLoading: true,  
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.searchQuery
      }      
    case SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.searchResult
      }     
    case SET_SEARCH_LOADING:
      return {
        ...state,
        sarchLoading: action.sarchLoading
      }     

    default:
      return state;
  }
}


export const setSearchQuery = (searchQuery) => {
  return {
    type: SET_SEARCH_QUERY,
    searchQuery
  }
}

export const setSearchResult = (searchResult) => {
  return {
    type: SET_SEARCH_RESULT,
    searchResult
  }
}

export const setSearchLoading = (sarchLoading) => {
  return {
    type: SET_SEARCH_LOADING,
    sarchLoading
  }
}

export const getSearchRequestThunk = (query) => {
  return (dispatch) => {
    dispatch(setSearchLoading(true));
    searchAPI.getSearchRequest(query).then(response => {
      dispatch(setSearchQuery(query));
      dispatch(setSearchResult(response));
      dispatch(setSearchLoading(false));
    })
  }
}

export default searchReducer;
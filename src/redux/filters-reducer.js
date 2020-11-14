import { catAPI } from "../api/api";
import { getPostsThunk } from "./postLoop-reducer";

const FILTER_TAB_QUERY = 'FILTER_TAB_QUERY';
const SET_FILTER_ITEMS = 'SET_FILTER_ITEMS';
const SET_LOADING = 'SET_LOADING';



let initialState = {
  filterTabQuery: 'all',
  filterItems: [], 
  loading: true
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_ITEMS:
      return {
        ...state,
        filterItems: action.filterItems
      }
    case FILTER_TAB_QUERY:
      return {
        ...state,
        filterTabQuery: action.filterQuery
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
}

export const setFilterItems = (filterItems) => {
  return {
    type: SET_FILTER_ITEMS,
    filterItems    
  }
}

export const setFilterQuery = (filterQuery) => {
  return {
    type: FILTER_TAB_QUERY,
    filterQuery
  }
}

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading    
  }
}

export const setFilterItemsThunk = (catId) => {
  return (dispatch) => {
    catAPI.getCat(catId, true).then(response => {
      dispatch(setFilterItems(response));      
      dispatch(setLoading(false));            
    })
  }  
}

export const setFilterQueryThunk = (query) => {
  return (dispatch) => {
    dispatch(setFilterQuery(query));    
    dispatch(getPostsThunk(query));
  }
}

export default filtersReducer;
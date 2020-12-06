import { catAPI } from "../api/api";
import { getEventsDataFilterThunk} from "./eventLoop-reducer";
import { getPostsThunk } from "./postLoop-reducer";

const FILTER_TAB_QUERY = 'FILTER_TAB_QUERY';
const SET_FILTER_ITEMS = 'SET_FILTER_ITEMS';
const SET_LOADING = 'SET_LOADING';

let initialState = {
  filterType: 'default',
  filterTabQuery: 'all',
  filterItems: [], 
  loadingFilter: true
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
        loadingFilter: action.loading
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

export const setFilterItemsThunk = (catId, catName = 'categories') => {
  return (dispatch) => {
    catAPI.getCat(catId, true, catName).then(response => {
      dispatch(setFilterItems(response));      
      dispatch(setLoading(false));            
    })
  }  
}

export const setFilterQueryThunk = (query, cats) => {
  return (dispatch) => {    
    dispatch(setFilterQuery(query));    
    if(cats === 'categories'){
      dispatch(getPostsThunk(query));  
    }
    if(cats === 'events_cat'){
      console.log(cats);
      dispatch(getEventsDataFilterThunk(query, cats, 'events'));
    }
  }
}

export default filtersReducer;
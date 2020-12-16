import { catAPI } from "../api/api";
import { getEventsDataFilterThunk} from "./eventLoop-reducer";
import { getPostsThunk } from "./postLoop-reducer";
import { getTVLoopItemsByCatIdThunk } from "./tvLoop-reducer";

const FILTER_TAB_QUERY = 'FILTER_TAB_QUERY';
const SET_FILTER_ITEMS = 'SET_FILTER_ITEMS';
const SET_FILTER_LOADING = 'SET_FILTER_LOADING';

let initialState = {
  filterType: 'default',
  filterTabQuery: 'all',
  filterItems: [], 
  filterLoading: true
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
    case SET_FILTER_LOADING:
      return {
        ...state,
        filterLoading: action.filterLoading
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

export const setFilterLoading = (filterLoading) => {
  return {
    type: SET_FILTER_LOADING,
    filterLoading    
  }
}

export const setFilterItemsThunk = (catId, catName = 'categories') => {
  return (dispatch) => {
    dispatch(setFilterLoading(true));  
    catAPI.getCat(catId, true, catName).then(response => {
      dispatch(setFilterItems(response));      
      dispatch(setFilterLoading(false));            
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
      dispatch(getEventsDataFilterThunk(query, cats, 'events'));
    }
    if(cats === 'tv_video_cat'){
      dispatch(getTVLoopItemsByCatIdThunk(query, cats, 'tv_video'));
    }
  }
}

export default filtersReducer;
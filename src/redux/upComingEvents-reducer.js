import { postAPI } from "../api/api";

const SET_LOADING_UP_EVENT = 'SET_LOADING_UP_EVENT';
const SET_ITEMS_UP_EVENT = 'SET_ITEMS_UP_EVENT';

let initialState = {  
  itemsUpEvents: [],
  loadingUpEvents: true,  
}

const upComingEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS_UP_EVENT:
      return {
        ...state,
        itemsUpEvents: action.asideItems
      }      
    case SET_LOADING_UP_EVENT:
      return {
        ...state,
        loadingUpEvents: action.loading
      }       
    default:
      return state;
  }
}

export const setItemsUpEvents = (asideItems) => {
  return {
    type: SET_ITEMS_UP_EVENT,
    asideItems
  }
}

export const setLoadingUpEvent = (loading) => {
  return {
    type: SET_LOADING_UP_EVENT,
    loading
  }
}

export const getUpComingEventsThunk = (number, postType) => {
  return (dispatch) => {
    dispatch(setLoadingUpEvent(true));
    postAPI.getPostNumberOrder(number, postType).then(response => {
      dispatch(setItemsUpEvents(response));
      dispatch(setLoadingUpEvent(false));      
    }
    ) 
  }
}

export default upComingEventsReducer;
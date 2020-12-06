import { postAPI } from "../api/api";

const SET_LOADING = 'SET_LOADING';
const SET_ITEMS = 'SET_ITEMS';
const SET_NUMBER = 'SET_NUMBER';

let initialState = {  
  itemsUpEvents: [],
  loadingUpEvents: true,  
}

const upComingEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER:
      return {
        ...state,
        numberUpEvents: action.number
      }
    case SET_ITEMS:
      return {
        ...state,
        itemsUpEvents: action.asideItems
      }      
    case SET_LOADING:
      return {
        ...state,
        loadingUpEvents: action.loading
      }       
    default:
      return state;
  }
}

export const setNumber = (number) => {
  return {
    type: SET_NUMBER,
    number
  }
}

export const setItemsUpEvents = (asideItems) => {
  return {
    type: SET_ITEMS,
    asideItems
  }
}

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const getUpComingEventsThunk = (number, postType) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    console.log(number);
    postAPI.getPostNumberOrder(number, postType).then(response => {
      
      dispatch(setItemsUpEvents(response));
      dispatch(setLoading(false));      
    }
    ) 
  }
}

export default upComingEventsReducer;
import { postAPI } from "../api/api";

const SET_LOADING = 'SET_LOADING';
const SET_EVENT_DATA = 'SET_EVENT_DATA';

let initialState = {
  eventData: [],
  loadingEvent: true
}

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENT_DATA:
      return {
        ...state,
        eventData: action.eventData
      }       
    case SET_LOADING:
      return {
        ...state,
        loadingEvent: action.loading
      }       
    default:
      return state;
  }
}

export const setEventData = (eventData) => {
  return {
    type: SET_EVENT_DATA,
    eventData
  }
}

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const getEventDataThunk = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    postAPI.getPostDataById(id, 'events').then(response => {
      dispatch(setEventData(response));
      dispatch(setLoading(false));      
    })
  }
}

export default eventReducer;
import { eventsAPI, postAPI } from "../api/api";

const SET_LOADING = 'SET_LOADING';
const SET_EVENTS = 'SET_EVENTS';

let initialState = {
  events: [],
  loadingEventLoop: true
}

const eventLoopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        events: action.events
      }       
    case SET_LOADING:
      return {
        ...state,
        loadingEventLoop: action.loading
      }       
    default:
      return state;
  }
}

export const setEvents = (events) => {
  return {
    type: SET_EVENTS,
    events
  }
}

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const getEventsDataThunk = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    eventsAPI.getEvents().then(response => {
      dispatch(setEvents(response));
      dispatch(setLoading(false));
    })
  }
}

export const getEventsDataFilterThunk = (catId, catName, postName) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    postAPI.getPostByIdCat(catId, catName, postName).then(response => {
      console.log(response);
      dispatch(setEvents(response));
      dispatch(setLoading(false));
    })
  }
}



export default eventLoopReducer;
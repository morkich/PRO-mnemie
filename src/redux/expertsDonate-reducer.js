import { itemAPI } from "../api/api";

const SET_EXPERTS_DONATE_ITEMS = 'SET_EXPERTS_DONATE_ITEMS';
const SET_EXPERTS_DONATE_SPAN = 'SET_EXPERTS_DONATE_SPAN';
const SET_EXPERTS_DONATE_LOADING = 'SET_EXPERTS_DONATE_LOADING';

let initialState = {
  expertsDonateSpan: '',
  expertsDonateItems: [],
  expertsDonateLoading: true,  
}

const expertsDonateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPERTS_DONATE_ITEMS:
      return {
        ...state,
        expertsDonateItems: action.expertsDonateItems
      }      
    case SET_EXPERTS_DONATE_SPAN:
      return {
        ...state,
        expertsDonateSpan: action.expertsDonateSpan
      }          
    case SET_EXPERTS_DONATE_LOADING:
      return {
        ...state,
        expertsDonateLoading: action.loading
      }       
    default:
      return state;
  }
}

export const setExpertsDonateItems = (expertsDonateItems) => {
  return {
    type: SET_EXPERTS_DONATE_ITEMS,
    expertsDonateItems
  }
}

export const setExpertsDonateSpan = (expertsDonateSpan) => {
  return {
    type: SET_EXPERTS_DONATE_SPAN,
    expertsDonateSpan
  }
}

export const setExpertsDonateLoading = (loading) => {
  return {
    type: SET_EXPERTS_DONATE_LOADING,
    loading
  }
}

export const getExpertsDonateSpanThunk = () => {
  return (dispatch) => {    
    itemAPI.getItem('expertsdonate').then(response => {
      dispatch(setExpertsDonateSpan(response.span))      
    })
  }
}

export const getExpertsDonateItemsThunk = (number) => {
  return (dispatch) => {
    dispatch(setExpertsDonateLoading(true));
    itemAPI.getItemCount('users', 3).then(response => {
      dispatch(setExpertsDonateItems(response));
      dispatch(setExpertsDonateLoading(false));
    })
  }
}

export default expertsDonateReducer;
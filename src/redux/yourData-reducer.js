import { itemAPI } from "../api/api";

const SET_YOUR_DATA_LOADING = 'SET_YOUR_DATA_LOADING';
const SET_YOUR_DATA_ITEMS = 'SET_YOUR_DATA_ITEMS';

let initialState = {
  yourDataItems: [],
  yourDataLoading: true,  
}

const yourDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_YOUR_DATA_ITEMS:
      return {
        ...state,
        yourDataItems: action.dataItems
      }      
    case SET_YOUR_DATA_LOADING:
      return {
        ...state,
        yourDataLoading: action.dataLoading
      }       
    default:
      return state;
  }
}


export const setYourDataItems = (dataItems) => {
  return {
    type: SET_YOUR_DATA_ITEMS,
    dataItems
  }
}

export const setYourDataLoading = (dataLoading) => {
  return {
    type: SET_YOUR_DATA_LOADING,
    dataLoading
  }
}

export const getYourDataThunk = (type, userId, itemType) => {
  return (dispatch) => {
    dispatch(setYourDataLoading(true));
    console.log(userId);
    itemAPI.getItemByAuthor(type, userId).then(response => {
      dispatch(setYourDataItems(response));
      dispatch(setYourDataLoading(false));      
    })
  }
}

export default yourDataReducer;
import { itemAPI } from "../api/api";


const SET_TV_ITEM = 'SET_TV_ITEM';
const SET_TV_ITEM_LOADING = 'SET_TV_ITEM_LOADING';

let initialState = {
  tvItem: [],
  loadingTVItem: true
}

const TVItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TV_ITEM:
      return {
        ...state,
        tvItem: action.tvItem
      }       
    case SET_TV_ITEM_LOADING:
      return {
        ...state,
        loadingTVItem: action.loadingTVItem
      }       
    default:
      return state;
  }
}

export const setTVItem = (tvItem) => {
  return {
    type: SET_TV_ITEM,
    tvItem
  }
}

export const setTVItemLoading = (loadingTVItem) => {
  return {
    type: SET_TV_ITEM_LOADING,
    loadingTVItem
  }
}

export const getTVItemDataThunk = (tvItemId) => {
  return (dispatch) => {
    dispatch(setTVItemLoading(true));
    itemAPI.getItemById('tv_video', tvItemId).then(response => {
      dispatch(setTVItem(response[0]));
      dispatch(setTVItemLoading(false));
    })
  }
}


export default TVItemReducer;
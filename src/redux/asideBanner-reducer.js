import { optionsAPI } from "../api/api";

const SET_ASIDE_BANNERS_LOADING = 'SET_ASIDE_BANNERS_LOADING';
const SET_ASIDE_BANNERS_ITEMS = 'SET_ASIDE_BANNERS_ITEMS';

let initialState = {
  asideBannersItems: [],
  asideBannersLoading: true,  
}

const asideBannersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ASIDE_BANNERS_ITEMS:
      return {
        ...state,
        asideBannersItems: action.asideBannersItems
      }      
    case SET_ASIDE_BANNERS_LOADING:
      return {
        ...state,
        asideBannersLoading: action.loading
      }       
    default:
      return state;
  }
}

export const setAsideBannersItems = (asideBannersItems) => {
  return {
    type: SET_ASIDE_BANNERS_ITEMS,
    asideBannersItems
  }
}

export const setAsideBannersLoading = (loading) => {
  return {
    type: SET_ASIDE_BANNERS_LOADING,
    loading
  }
}

export const getAsideBannersLoading = () => {
  return (dispatch) => {
    dispatch(setAsideBannersLoading(true));
    optionsAPI.getAsideBanners().then(response => {
      console.log(response);
      dispatch(setAsideBannersItems(response));
      dispatch(setAsideBannersLoading(false));
    })
  }
}

export default asideBannersReducer;
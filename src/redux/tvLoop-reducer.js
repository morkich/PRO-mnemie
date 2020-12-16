import { itemAPI, postAPI } from "../api/api";

const SET_TV_LOOP_ITEMS = 'SET_TV_LOOP_ITEMS';
const SET_TV_LOOP_PARENT_CAT = 'SET_TV_LOOP_PARENT_CAT';
const SET_TV_LOOP_PARENT_CAT_NAME = 'SET_TV_LOOP_PARENT_CAT_NAME';
const SET_TV_LOOP_LOADING = 'SET_TV_LOOP_LOADING';

let initialState = {
  tvLoopItems: [],
  parentCatTVLoop: 0,
  parentCatNameTVLoop: '',
  pageSizeTVLoop: 9,
  totalPageCount: 1,
  currentPage: 1,
  loadingTVLoop: true,
}

const tvLoopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TV_LOOP_ITEMS:
      return {
        ...state,
        tvLoopItems: action.tvItems
      };
    case SET_TV_LOOP_PARENT_CAT:
      return {
        ...state,
        parentCatTVLoop: action.catId !== undefined ? action.catId : state.parentCatTVLoop
      };      
    case SET_TV_LOOP_PARENT_CAT_NAME:
      return {
        ...state,
        parentCatNameTVLoop: action.catName !== undefined ? action.catName : state.parentCatNameTVLoop
      };      
    case SET_TV_LOOP_LOADING:
      return {
        ...state,
        loadingTVLoop: action.loading
      };
    default:
      return state;
  }
}

export const setTVLoopItems = (tvItems) => {
  return {
    type: SET_TV_LOOP_ITEMS,
    tvItems
  }
}

export const setTVLoopParentCat = (catId) => {
  return {
    type: SET_TV_LOOP_PARENT_CAT,
    catId
  }
}

export const setTVLoopParentCatName = (catName) => {
  return {
    type: SET_TV_LOOP_PARENT_CAT_NAME,
    catName
  }
}

export const setTVLoopLoading = (loading) => {
  return {
    type: SET_TV_LOOP_LOADING,
    loading
  }
}

export const getTVItemsDataThunk = () => {
  return (dispatch) => {
    dispatch(setTVLoopLoading(true));
    itemAPI.getItem('tv_video').then(response => {
      dispatch(setTVLoopItems(response));
      dispatch(setTVLoopLoading(false));
    })
  }
}

export const getTVLoopItemsByCatIdThunk = (catId, catName, postType) => {
  return (dispatch) => {
    dispatch(setTVLoopLoading(true));
    postAPI.getPostByIdCat(catId, catName, postType).then(response => {
      dispatch(setTVLoopItems(response));
      dispatch(setTVLoopLoading(false));      
    })
  }
}

export default tvLoopReducer;
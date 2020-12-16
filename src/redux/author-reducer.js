import { usersAPI } from "../api/api";

const SET_AUTHOR = 'SET_AUTHOR';
const SET_LOADING_AUTHOR = 'SET_LOADING_AUTHOR';

let initialState = {
  authorData: [],
  loadingAuthor: true
}

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHOR:
      return {
        ...state,
        authorData: action.authorData
      };
    case SET_LOADING_AUTHOR:
      return {
        ...state,
        loadingAuthor: action.loading
      };
    default:
      return state;
  }
}

export const setAuthorData = (authorData) => {
  return {
    type: SET_AUTHOR,
    authorData
  }
}

export const setLoadingAuthor = (loading) => {
  return {
    type: SET_LOADING_AUTHOR,
    loading
  }
}

export const getAuthorDataThunk = (id) => {
  return (dispatch) => {
    dispatch(setLoadingAuthor(true));
    usersAPI.getExpert(id).then(response => {
      dispatch(setAuthorData(response[0]));
      dispatch(setLoadingAuthor(false));      
    })
  }
}


export default authorReducer;
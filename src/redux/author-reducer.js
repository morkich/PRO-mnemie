import { usersAPI } from "../api/api";

const SET_AUTHOR = 'SET_AUTHOR';
const SET_LOADING = 'SET_LOADING';

let initialState = {
  authorData: [],
  loading: true
}

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHOR:
      return {
        ...state,
        authorData: action.authorData
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading
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

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const getAuthorDataThunk = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    usersAPI.getExpert(id).then(response => {
      dispatch(setAuthorData(response[0]));
      dispatch(setLoading(false));      
    })
  }
}


export default authorReducer;
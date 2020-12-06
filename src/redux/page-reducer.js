import { pagesAPI } from "../api/api";

const SET_LOADING = 'SET_LOADING';
const SET_PAGE_NAME = 'SET_PAGE_NAME';
const SET_PAGE_CONTENT = 'SET_PAGE_CONTENT';

let initialState = {
  pageName: '',
  pageContent: [],
  loadingPage: true
}

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE_NAME:
      return {
        ...state,
        pageName: action.pageName
      }       
    case SET_PAGE_CONTENT:
      return {
        ...state,
        pageContent: action.pageContent
      }       
    case SET_LOADING:
      return {
        ...state,
        loadingPage: action.loading
      }       
    default:
      return state;
  }
}

export const setPageName = (pageName) => {
  return {
    type: SET_PAGE_NAME,
    pageName
  }
}

export const setPageContent = (pageContent) => {
  return {
    type: SET_PAGE_CONTENT,
    pageContent
  }
}

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const getPageDataThunk = (slug) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    pagesAPI.getPageBySlug(slug).then(response => {      
      dispatch(setPageContent(response));
      console.log(response);
      dispatch(setPageName(slug));
      dispatch(setLoading(false));
    })
  }
}
// export const getCourseDataThunk = (posts) => {
//   return (dispatch) => {
//     dispatch(setLoading(true));
//     postAPI.getPosts(posts).then(response => {
//       dispatch(setCourses(response));
//       console.log(response);
//       dispatch(setLoading(false));
//     })
//   }
// }

export default pageReducer;
import { postAPI } from "../api/api";

const SET_LOADING = 'SET_LOADING';
const SET_COURSES = 'SET_COURSES';

let initialState = {
  courses: [],
  loadingCourses: true
}

const courseLoopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSES:
      return {
        ...state,
        courses: action.courses
      }       
    case SET_LOADING:
      return {
        ...state,
        loadingCourses: action.loading
      }       
    default:
      return state;
  }
}

export const setCourses = (courses) => {
  return {
    type: SET_COURSES,
    courses
  }
}

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const getCourseDataThunk = (posts) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    postAPI.getPosts(posts).then(response => {
      dispatch(setCourses(response));
      console.log(response);
      dispatch(setLoading(false));
    })
  }
}

// export const getEventsDataFilterThunk = (catId, catName, postName) => {
//   return (dispatch) => {
//     dispatch(setLoading(true));
//     postAPI.getPostByIdCat(catId, catName, postName).then(response => {
//       console.log(response);
//       dispatch(setEvents(response));
//       dispatch(setLoading(false));
//     })
//   }
// }



export default courseLoopReducer;
import { commentAPI } from "../api/api";

const SET_COMMENTS = 'SET_COMMENTS';
const SET_LOADING = 'SET_LOADING';
const SET_NEW_COMMENT = 'SET_NEW_COMMENT';

let initialState = {
  comments: {},
  loadingComments: true,  
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.comments
      }
    case SET_LOADING:
      return {
        ...state,
        loadingComments: action.loading
      }      
    case SET_NEW_COMMENT:
      return {
        ...state,
        comments: [action.comment, ...state.comments]
      }          
    default:
      return state;
  }
}

export const setComments = (comments) => {
  return {
    type: SET_COMMENTS,
    comments
  }
}

export const setNewComment = (comment) => {
  return {
    type: SET_NEW_COMMENT,
    comment
  }
}

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}


export const setCommentsDataThunk = (postId) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    commentAPI.getComments(postId).then(response => {
      dispatch(setComments(response));
      dispatch(setLoading(false));
    })
  }
}

export const addCommentThunk = (postId, userId, contentNewComment) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    let data = {
      post: postId,
      author: userId,      
      content: contentNewComment,
    }
    commentAPI.setComment(data).then(response => {      
      dispatch(setNewComment(response.data));         
      dispatch(setLoading(false));   
    })    
  }
}


export default commentsReducer;
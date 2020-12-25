import { postAPI } from "../api/api";

const SET_ADD_POST_TITLE = 'SET_ADD_POST_TITLE';
const SET_ADD_POST_CATEGORYS = 'SET_ADD_POST_CATEGORYS';
const SET_ADD_POST_CATEGORY_NAME = 'SET_ADD_POST_CATEGORY_NAME';
const SET_ADD_POST_IMAGE_URL = 'SET_ADD_POST_IMAGE_URL';
const SET_ADD_POST_IMAGE_ID = 'SET_ADD_POST_IMAGE_ID';
const SET_ADD_POST_CONTENT = 'SET_ADD_POST_CONTENT';
const SET_ADD_POST_TAGS = 'SET_ADD_POST_TAGS';
const SET_ADD_TAG_TO_POST_TAGS = 'SET_ADD_TAG_TO_POST_TAGS';
const SET_ADDED_POST = 'SET_ADDED_POST';
const SET_ADD_POST_LOADING = 'SET_ADD_POST_LOADING';

let initialState = {
  addPostTitle: '',
  addPostCategorys: [],
  addPostCategoryName: '',
  addPostImage: '',
  addPostImageId: '',
  addPostContent: '',
  addPostTags: '',
  postAdded: false,
  addPostLoading: false
}

const addPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD_POST_TITLE:
      return {
        ...state,
        addPostTitle: action.addPostTitle
      }      
    case SET_ADD_POST_CATEGORYS:
      return {
        ...state,
        addPostCategorys: action.addPostCategorys
      }       
    case SET_ADD_POST_CATEGORY_NAME:
      return {
        ...state,
        addPostCategoryName: action.addPostCategoryName
      }       
    case SET_ADD_POST_IMAGE_URL:
      return {
        ...state,
        addPostImage: action.addPostImageUrl
      }  
    case SET_ADD_POST_IMAGE_ID:
      return {
        ...state,
        addPostImageId: action.addPostImageId
      }            
    case SET_ADD_POST_CONTENT:
      return {
        ...state,
        addPostContent: action.addPostContent
      }       
    case SET_ADD_POST_TAGS:
      return {
        ...state,
        addPostTags: action.addPostTags
      }       
    case SET_ADD_TAG_TO_POST_TAGS:
      return {
        ...state,
        addPostTags: Array.from(new Set([...state.addPostTags, action.tagToPostTag]))  
      }       
    case SET_ADDED_POST:
      return {
        ...state,
        postAdded: action.postAdded  
      }       
    case SET_ADD_POST_LOADING:
      return {
        ...state,
        addPostLoading: action.addPostLoading
      }       
    default:
      return state;
  }
}

export const setAddPostTitle = (addPostTitle) => {
  return {
    type: SET_ADD_POST_TITLE,
    addPostTitle
  }
}

export const setAddPostCategorys = (addPostCategorys) => {
  return {
    type: SET_ADD_POST_CATEGORYS,
    addPostCategorys
  }
}

export const setAddPostCategoryName = (addPostCategoryName) => {
  return {
    type: SET_ADD_POST_CATEGORY_NAME,
    addPostCategoryName
  }
}

export const setAddPostImage = (addPostImageUrl) => {
  console.log(addPostImageUrl);
  return {
    type: SET_ADD_POST_IMAGE_URL,
    addPostImageUrl
  }
}

export const setAddPostImageId = (addPostImageId) => {
  return {
    type: SET_ADD_POST_IMAGE_ID,
    addPostImageId
  }
}

export const setAddPostContent = (addPostContent) => {
  return {
    type: SET_ADD_POST_CONTENT,
    addPostContent
  }
}

export const setAddPostTags = (addPostTags) => {
  return {
    type: SET_ADD_POST_TAGS,
    addPostTags
  }
}

export const setAddTagToPostTags = (tagToPostTag) => {
  return {
    type: SET_ADD_TAG_TO_POST_TAGS,
    tagToPostTag
  }
}

export const setAddedPost = (postAdded) => {
  return {
    type: SET_ADDED_POST,
    postAdded
  }
}

export const setAddPostLoading = (addPostLoading) => {
  return {
    type: SET_ADD_POST_LOADING,
    addPostLoading
  }
}

export const getPostEditDataThunk = (postId) => {
  return (dispatch) => {
    dispatch(setAddPostLoading(true));
    postAPI.getPostDataById(postId).then(response => {
      console.log(response);
      dispatch(setAddPostTitle(response.title.rendered));
      dispatch(setAddPostImage(response.img_url));
      dispatch(setAddPostImageId(response.featured_media));
      dispatch(setAddPostCategoryName(response.category_name[0]));
      dispatch(setAddPostContent(response.content.rendered));
      dispatch(setAddPostTags(response.tags));
      dispatch(setAddPostLoading(false));
    })
  }
}


export const postNewPostThunk = (data, imageId, tagsIds = 0, postCat, postId) => {
  return (dispatch) => {
    dispatch(setAddPostLoading(true));
    let postData = {
      title: data.postTitle,
      status: 'publish',
      content: data.postContent,
      featured_media: imageId,      
      comment_status: 'open',
      categories: postCat,
      tags: tagsIds
    }

    if(postId){
      postAPI.postUpdatePost(postData, postId).then(response => {
        if(response.status === 201) {
          dispatch(setAddedPost(true))
        }else{
          dispatch(setAddedPost(false))
        }
        dispatch(setAddPostLoading(false));
      })
    }else{
      postAPI.postNewPost(postData).then(response => {
        if(response.status === 201) {
          dispatch(setAddedPost(true))
        }else{
          dispatch(setAddedPost(false))
        }
        dispatch(setAddPostLoading(false));
      })
    }   

  }
}

export default addPostReducer;
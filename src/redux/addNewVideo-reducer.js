import { postAPI } from "../api/api";

const SET_ADD_VIDEO_TITLE = 'SET_ADD_VIDEO_TITLE';
const SET_ADD_VIDEO_IMAGE_URL = 'SET_ADD_VIDEO_IMAGE_URL';
const SET_ADD_VIDEO_IMAGE_ID = 'SET_ADD_VIDEO_IMAGE_ID';
const SET_ADD_VIDEO_CONTENT = 'SET_ADD_VIDEO_CONTENT';
const SET_ADD_VIDEO_TAGS = 'SET_ADD_VIDEO_TAGS';
const SET_ADD_TAG_TO_VIDEO_TAGS = 'SET_ADD_TAG_TO_VIDEO_TAGS';
const SET_ADDED_VIDEO = 'SET_ADDED_VIDEO';
const SET_ADD_VIDEO_LOADING = 'SET_ADD_VIDEO_LOADING';
const SET_ADD_VIDEO_URL = 'SET_ADD_VIDEO_URL';

let initialState = {
  addVideoTitle: '',
  addVideoImage: '',
  addVideoImageId: '',
  addVideoContent: '',
  addVideoTags: '',
  addVideoUrl: '',
  videoAdded: false,
  addVideoLoading: false
}

const addVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD_VIDEO_TITLE:
      return {
        ...state,
        addVideoTitle: action.addVideoTitle
      }      
    case SET_ADD_VIDEO_IMAGE_URL:
      return {
        ...state,
        addVideoImage: action.addVideoImageUrl
      }  
    case SET_ADD_VIDEO_IMAGE_ID:
      return {
        ...state,
        addVideoImageId: action.addVideoImageId
      }            
    case SET_ADD_VIDEO_CONTENT:
      return {
        ...state,
        addVideoContent: action.addVideoContent
      }       
    case SET_ADD_VIDEO_TAGS:
      return {
        ...state,
        addVideoTags: action.addVideoTags
      }       
    case SET_ADD_TAG_TO_VIDEO_TAGS:
      return {
        ...state,
        addVideoTags: Array.from(new Set([...state.addVideoTags, action.tagToVideoTag]))  
      }    
    case SET_ADD_VIDEO_URL:
      return {
        ...state,
        addVideoUrl: action.videoUrl
      }           
    case SET_ADDED_VIDEO:
      return {
        ...state,
        videoAdded: action.videoAdded  
      }       
    case SET_ADD_VIDEO_LOADING:
      return {
        ...state,
        addVideoLoading: action.addVideoLoading
      }       
    default:
      return state;
  }
}

export const setAddVideoTitle = (addVideoTitle) => {
  return {
    type: SET_ADD_VIDEO_TITLE,
    addVideoTitle
  }
}

export const setAddVideoImage = (addVideoImageUrl) => {
  return {
    type: SET_ADD_VIDEO_IMAGE_URL,
    addVideoImageUrl
  }
}

export const setAddVideoImageId = (addVideoImageId) => {
  return {
    type: SET_ADD_VIDEO_IMAGE_ID,
    addVideoImageId
  }
}

export const setAddVideoContent = (addVideoContent) => {
  return {
    type: SET_ADD_VIDEO_CONTENT,
    addVideoContent
  }
}

export const setAddVideoTags = (addVideoTags) => {
  return {
    type: SET_ADD_VIDEO_TAGS,
    addVideoTags
  }
}

export const setAddTagToVideoTags = (tagToVideoTag) => {
  return {
    type: SET_ADD_TAG_TO_VIDEO_TAGS,
    tagToVideoTag
  }
}

export const setAddVideoUrl = (videoUrl) => {
  return {
    type: SET_ADD_VIDEO_URL,
    videoUrl
  }
}

export const setAddedVideo = (videoAdded) => {
  return {
    type: SET_ADDED_VIDEO,
    videoAdded
  }
}

export const setAddVideoLoading = (addVideoLoading) => {
  return {
    type: SET_ADD_VIDEO_LOADING,
    addVideoLoading
  }
}





// export const getPostEditDataThunk = (postId) => {
//   return (dispatch) => {
//     dispatch(setAddPostLoading(true));
//     postAPI.getPostDataById(postId).then(response => {
//       console.log(response);
//       dispatch(setAddPostTitle(response.title.rendered));
//       dispatch(setAddPostImage(response.img_url));
//       dispatch(setAddPostImageId(response.featured_media));
//       dispatch(setAddPostCategoryName(response.category_name[0]));
//       dispatch(setAddPostContent(response.content.rendered));
//       dispatch(setAddPostTags(response.tags));
//       dispatch(setAddPostLoading(false));
//     })
//   }
// }


export const postNewVideoThunk = (title, content, video, imageId, tags, postId) => {
  return (dispatch) => {
    dispatch(setAddVideoLoading(true));
    const data = {
      title: title,
      status: 'publish',
      content: content,
      featured_media: imageId,      
      comment_status: 'open',
      pro_tv_video_youtube_link: video,
      // categories: postCat,
      tags: tags
    }
    if(postId){
      postAPI.postUpdatePost(data, postId).then(response => {
        if(response.status === 201) {
          dispatch(setAddedVideo(true))
        }else{
          dispatch(setAddedVideo(false))
        }
        dispatch(setAddVideoLoading(false));
      })
    }else{
      postAPI.postNewPost(data, 'tv_video').then(response => {
        if(response.status === 201) {
          dispatch(setAddedVideo(true))
        }else{
          dispatch(setAddedVideo(false))
        }
        dispatch(setAddVideoLoading(false));
      })
    }   

  }
}

export default addVideoReducer;
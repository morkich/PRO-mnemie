import { tagAPI } from "../api/api";

const SET_ADD_TAG_ITEM = 'SET_ADD_TAG_ITEM';
const SET_ADD_TAGS_ITEMS = 'SET_ADD_TAGS_ITEMS';
const SET_REMOVE_TAGS_ITEMS = 'SET_REMOVE_TAGS_ITEMS';
const SET_ALL_TAGS_ITEMS = 'SET_ALL_TAGS_ITEMS';
const SET_ADD_TO_ALL_TAGS_ITEMS = 'SET_ADD_TO_ALL_TAGS_ITEMS';
const SET_INPUT_TAGS_READY = 'SET_INPUT_TAGS_READY';
const SET_INPUT_TAGS_REMOVE_READY = 'SET_INPUT_TAGS_REMOVE_READY';
const SET_ADD_TAGS_LOADING = 'SET_ADD_TAGS_LOADING';

let initialState = {
  addTagsItems: [],
  allTagsItems: [],
  inputTagsIdReady: [],
  addTagsLoading: false
}

const addTagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD_TAG_ITEM:
      return {
        ...state,
        addTagsItems: Array.from(new Set([...state.addTagsItems, action.addTag]))        
      }      
    case SET_ADD_TAGS_ITEMS:
      return {
        ...state,
        addTagsItems: action.addTagsItems        
      }      
    case SET_REMOVE_TAGS_ITEMS:      
      return {
        ...state,
        addTagsItems: state.addTagsItems.filter(tag => tag.id !== +action.removeTag)       
      }           
    case SET_ALL_TAGS_ITEMS:
      return {
        ...state,
        allTagsItems: action.allTagsItems
      }      
    case SET_ADD_TO_ALL_TAGS_ITEMS:
      return {
        ...state,
        allTagsItems: Array.from(new Set([...state.allTagsItems, action.tagToAll]))  
      }      
    case SET_INPUT_TAGS_READY:
      return {
        ...state,
        inputTagsIdReady: Array.from(new Set([...state.inputTagsIdReady, action.addTagReady]))   
      }      
    case SET_INPUT_TAGS_REMOVE_READY:
      return {
        ...state,
        inputTagsIdReady: state.inputTagsIdReady.filter(tag => tag !== +action.removeTagReady) 
      }         
    case SET_ADD_TAGS_LOADING:
      return {
        ...state,
        addTagsLoading: action.addTagsLoading
      }       
    default:
      return state;
  }
}

export const setAddTagItem = (addTag) => {
  return {
    type: SET_ADD_TAG_ITEM,
    addTag
  }
}

export const setAddTagsItems = (addTagsItems) => {
  return {
    type: SET_ADD_TAGS_ITEMS,
    addTagsItems
  }
}

export const setRemoveTagItem = (removeTag) => {
  return {
    type: SET_REMOVE_TAGS_ITEMS,
    removeTag
  }
}

export const setAllTagsItems = (allTagsItems) => {
  return {
    type: SET_ALL_TAGS_ITEMS,
    allTagsItems
  }
}

export const setAddToAllTagsItems = (tagToAll) => {
  return {
    type: SET_ADD_TO_ALL_TAGS_ITEMS,
    tagToAll
  }
}

export const setInputTagsReady = (addTagReady) => {
  return {
    type: SET_INPUT_TAGS_READY,
    addTagReady
  }
}

export const setInputTagsRemoveReady = (removeTagReady) => {
  return {
    type: SET_INPUT_TAGS_REMOVE_READY,
    removeTagReady
  }
}

export const setAddTagsLoading = (addTagsLoading) => {
  return {
    type: SET_ADD_TAGS_LOADING,
    addTagsLoading
  }
}

export const getAllTagsThunk = () => {
  return (dispatch) => {
    tagAPI.getAllTags().then(response => {
      dispatch(setAllTagsItems(response));
    })
  }  
}

export const postNewTagThunk = (tagName) => {
  return (dispatch) => {
    dispatch(setAddTagsLoading(true));
    let data = {
      name: tagName
    }
    tagAPI.postNewTag(data).then(response => {
      dispatch(setAddToAllTagsItems(response));
      dispatch(setAddTagItem(response));
      dispatch(setInputTagsReady(response.id));            
      dispatch(setAddTagsLoading(false));
    })
  }  
}

export const postOldTagThunk = (tag) => {
  return (dispatch) => {
    dispatch(setAddTagsLoading(true));
    dispatch(setAddTagItem(tag));
    dispatch(setInputTagsReady(tag.id));
    dispatch(setAddTagsLoading(false));
  }  
}


export const removePostTagThunk = (tagId) => {
  return (dispatch) => {
    dispatch(setRemoveTagItem(tagId));
    dispatch(setInputTagsRemoveReady(tagId));
  }
}
export default addTagsReducer;
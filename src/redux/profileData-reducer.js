import { itemAPI, usersAPI } from "../api/api";

const SET_PROFILE_DATA_LOADING = 'SET_PROFILE_DATA_LOADING';
const SET_PROFILE_DATA_ITEMS_COUNT = 'SET_PROFILE_DATA_ITEMS_COUNT';
const SET_PROFILE_DATA_EXPERT_NAME = 'SET_PROFILE_DATA_EXPERT_NAME';
const SET_PROFILE_DATA_ITEMS = 'SET_PROFILE_DATA_ITEMS';

let initialState = {
  profileDataItems: [],
  profileDataItemsCount: 0,
  profileDataExpertName: '',
  profileDataLoading: true,  
}

const profileDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA_ITEMS:
      return {
        ...state,
        profileDataItems: action.dataItems
      }      
    case SET_PROFILE_DATA_ITEMS_COUNT:
      return {
        ...state,
        profileDataItemsCount: action.dataItemsCount
      }      
    case SET_PROFILE_DATA_EXPERT_NAME:
      return {
        ...state,
        profileDataExpertName: action.dataExpertName
      }      
    case SET_PROFILE_DATA_LOADING:
      return {
        ...state,
        profileDataLoading: action.dataLoading
      }       
    default:
      return state;
  }
}


export const setProfileDataItems = (dataItems) => {
  return {
    type: SET_PROFILE_DATA_ITEMS,
    dataItems
  }
}

export const setProfileDataItemsCount = (dataItemsCount) => {
  return {
    type: SET_PROFILE_DATA_ITEMS_COUNT,
    dataItemsCount
  }
}

export const setProfileDataExpertName = (dataExpertName) => {
  return {
    type: SET_PROFILE_DATA_EXPERT_NAME,
    dataExpertName
  }
}

export const setProfileDataLoading = (dataLoading) => {
  return {
    type: SET_PROFILE_DATA_LOADING,
    dataLoading
  }
}

export const getProfileDataStateThunk = (userId, dataName = 'posts') => {
  return (dispatch) => {
    dispatch(setProfileDataLoading(true));
    usersAPI.getExpert(userId).then(response => {
      dispatch(setProfileDataExpertName(`${response[0].pro_lastname.trim()} ${response[0].pro_firstname.trim()} ${response[0].pro_secondname.trim()}`));            
      return userId;
    })
    .then(userId => {
      itemAPI.getItemByAuthorUnlimited(dataName, userId).then(response => {
        dispatch(setProfileDataItems(response));
        dispatch(setProfileDataItemsCount(response.length));
        dispatch(setProfileDataLoading(false));        
      })
    })
  }
}

export default profileDataReducer;
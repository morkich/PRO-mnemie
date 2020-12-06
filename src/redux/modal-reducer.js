const SET_LOADING = 'SET_LOADING';
const SET_VISION = 'SET_VISION';
const SET_TYPE = 'SET_TYPE';

let initialState = {
  typeModal: null,
  vision: false,
  loadingModal: true,  
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPE:
      return {
        ...state,
        typeModal: action.typeModal
      }
    case SET_VISION:
      return {
        ...state,
        vision: action.vision
      }      
    case SET_LOADING:
      return {
        ...state,
        loadingModal: action.loading
      }       
    default:
      return state;
  }
}

export const setType = (typeModal) => {
  return {
    type: SET_TYPE,
    typeModal
  }
}

export const setVision = (vision) => {
  return {
    type: SET_VISION,
    vision
  }
}

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}


export default modalReducer;
import { postAPI } from "../api/api";

const SET_ADD_VACANCY_TITLE = 'SET_ADD_VACANCY_TITLE';
const SET_ADD_VACANCY_PRICE = 'SET_ADD_VACANCY_PRICE';
const SET_ADD_VACANCY_COMPANY_NAME = 'SET_ADD_VACANCY_COMPANY_NAME';
const SET_ADD_VACANCY_CITY = 'SET_ADD_VACANCY_CITY';
const SET_ADD_VACANCY_WORK_EXP = 'SET_ADD_VACANCY_WORK_EXP';
const SET_ADD_VACANCY_STUDY = 'SET_ADD_VACANCY_STUDY';
const SET_ADD_VACANCY_REQUIREMENTS = 'SET_ADD_VACANCY_REQUIREMENTS';
const SET_ADD_VACANCY_FUNCTIONS = 'SET_ADD_VACANCY_FUNCTIONS';
const SET_ADD_VACANCY_CONDITIONS = 'SET_ADD_VACANCY_CONDITIONS';
const SET_ADD_VACANCY_WORK_TIME = 'SET_ADD_VACANCY_WORK_TIME';
const SET_ADD_VACANCY_WORK_PLACE = 'SET_ADD_VACANCY_WORK_PLACE';
const SET_VACANCY_POST = 'SET_VACANCY_POST';
const SET_ADD_VACANCY_LOADING = 'SET_ADD_VACANCY_LOADING';

let initialState = {
  addVacancyTitle: '',
  addVacancyPrice: [],
  addVacancyCompanyName: '',
  addVacancyCity: '',
  addVacancyWorkExp: '',
  addVacancyStudy: '',
  addVacancyRequirements: [],
  addVacancyFunctions: [],
  addVacancyConditions: [],
  addVacancyWorkTime: '',
  addVacancyWorkPlace: '',
  vacancyAdded: false,
  addVacancyLoading: false
}

const addVacancyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD_VACANCY_TITLE:
      return {
        ...state,
        addVacancyTitle: action.addVacancyTitle
      }      
    case SET_ADD_VACANCY_PRICE:
      return {
        ...state,
        addVacancyPrice: action.addVacancyPrice
      }       
    case SET_ADD_VACANCY_COMPANY_NAME:
      return {
        ...state,
        addVacancyCompanyName: action.addVacancyCompanyName
      }       
    case SET_ADD_VACANCY_CITY:
      return {
        ...state,
        addVacancyCity: action.addVacancyCity
      }  
    case SET_ADD_VACANCY_WORK_EXP:
      return {
        ...state,
        addVacancyWorkExp: action.addVacancyWorkExp
      }            
    case SET_ADD_VACANCY_STUDY:
      return {
        ...state,
        addVacancyStudy: action.addVacancyStudy
      }       
    case SET_ADD_VACANCY_REQUIREMENTS:
      return {
        ...state,
        addVacancyRequirements: action.addVacancyRequirements
      }       
    case SET_ADD_VACANCY_FUNCTIONS:
      return {
        ...state,
        addVacancyFunctions: action.addVacancyFunctions
      }       
    case SET_ADD_VACANCY_CONDITIONS:
      return {
        ...state,
        addVacancyConditions: action.addVacancyConditions  
      }       
    case SET_ADD_VACANCY_WORK_TIME:
      return {
        ...state,
        addVacancyWorkTime: action.addVacancyWorkTime  
      }       
    case SET_ADD_VACANCY_WORK_PLACE:
      return {
        ...state,
        addVacancyWorkPlace: action.addVacancyWorkPlace  
      }       
    case SET_VACANCY_POST:
      return {
        ...state,
        vacancyAdded: action.vacancyAdded  
      }       
    case SET_ADD_VACANCY_LOADING:
      return {
        ...state,
        addVacancyLoading: action.addVacancyLoading
      }       
    default:
      return state;
  }
}

export const setAddVacancyTitle = (addVacancyTitle) => {
  return {
    type: SET_ADD_VACANCY_TITLE,
    addVacancyTitle
  }
}

export const setAddVacancyPrice = (addVacancyPrice) => {
  return {
    type: SET_ADD_VACANCY_PRICE,
    addVacancyPrice
  }
}

export const setAddVacancyCompanyName = (addVacancyCompanyName) => {
  return {
    type: SET_ADD_VACANCY_COMPANY_NAME,
    addVacancyCompanyName
  }
}

export const setAddVacancyCity = (addVacancyCity) => {
  return {
    type: SET_ADD_VACANCY_CITY,
    addVacancyCity
  }
}

export const setAddVacancyWorkExp = (addVacancyWorkExp) => {
  return {
    type: SET_ADD_VACANCY_WORK_EXP,
    addVacancyWorkExp
  }
}

export const setAddVacancyStudy = (addVacancyStudy) => {
  return {
    type: SET_ADD_VACANCY_STUDY,
    addVacancyStudy
  }
}

export const setAddVacancyRequirements = (addVacancyRequirements) => {
  return {
    type: SET_ADD_VACANCY_REQUIREMENTS,
    addVacancyRequirements
  }
}

export const setAddVacancyFunctions = (addVacancyFunctions) => {
  return {
    type: SET_ADD_VACANCY_FUNCTIONS,
    addVacancyFunctions
  }
}

export const setAddVacancyConditions = (addVacancyConditions) => {
  return {
    type: SET_ADD_VACANCY_CONDITIONS,
    addVacancyConditions
  }
}

export const setAddVacancyWorkTime = (addVacancyWorkTime) => {
  return {
    type: SET_ADD_VACANCY_WORK_TIME,
    addVacancyWorkTime
  }
}
export const setAddVacancyWorkPlace = (addVacancyWorkPlace) => {
  return {
    type: SET_ADD_VACANCY_WORK_PLACE,
    addVacancyWorkPlace
  }
}
export const setVacancyAdded = (vacancyAdded) => {
  return {
    type: SET_VACANCY_POST,
    vacancyAdded
  }
}
export const setAddVacancyLoading = (addVacancyLoading) => {
  return {
    type: SET_ADD_VACANCY_LOADING,
    addVacancyLoading
  }
}


export const postNewVacancyThunk = (formData, itemId) => {
  return (dispatch) => {
    dispatch(setAddVacancyLoading(true));
    console.log(formData);
    let conditions = Object.keys(formData).filter( item => item.includes('conditions_')).map(item => formData[item]);
    let functions = Object.keys(formData).filter( item => item.includes('functions_')).map(item => formData[item]);
    let requirement = Object.keys(formData).filter( item => item.includes('requirement_')).map(item => formData[item]);
    console.log(requirement);
    let vacancyData = {
      title: formData.postTitle,
      status: 'publish',
      pro_vacancy_city: formData.city,
      pro_vacancy_conditions: JSON.stringify(conditions),
      pro_vacancy_expiriense: formData.experience,
      pro_vacancy_function: JSON.stringify(functions),
      pro_vacancy_company_name: formData.companyName,
      pro_vacancy_price: formData.paymentBefore,
      pro_vacancy_price_after: formData.paymentAfter,
      pro_vacancy_require: JSON.stringify(requirement),
      pro_vacancy_work_place: formData.workPlace,
      pro_vacancy_work_time: formData.worktime,
      content: requirement,
    };
    if(itemId){
      postAPI.postUpdatePost(vacancyData, itemId, 'vacancies').then(response => {
        if(response.status === 200){          
          dispatch(setAddVacancyLoading(false));
        }else{

        }
      })
    }else{
      postAPI.postNewPost(vacancyData, 'vacancies').then(response => {
        if(response.status === 201) {        
          dispatch(setVacancyAdded(true))
          dispatch(setAddVacancyLoading(false));
        }else{
          dispatch(setVacancyAdded(false))
        }      
      })
    }
  }
}

export const getVacancyByIdThunk = (itemId) => {
  return (dispatch) => {
    dispatch(setAddVacancyLoading(true));
    postAPI.getPostDataById(itemId, 'vacancies').then(response => {
      dispatch(setAddVacancyTitle(response.title ? response.title.rendered : null));
      dispatch(setAddVacancyPrice([response.pro_vacancy_price, response.pro_vacancy_price_after]));
      dispatch(setAddVacancyCompanyName(response.pro_vacancy_company_name));
      dispatch(setAddVacancyCity(response.pro_vacancy_city));
      dispatch(setAddVacancyWorkExp(response.pro_vacancy_expiriense));
      dispatch(setAddVacancyStudy(response.pro_vacancy_study));
      dispatch(setAddVacancyRequirements(response.pro_vacancy_require ? JSON.parse(response.pro_vacancy_require): []));
      dispatch(setAddVacancyFunctions(response.pro_vacancy_function ? JSON.parse(response.pro_vacancy_function): []));
      dispatch(setAddVacancyConditions(response.pro_vacancy_conditions ? JSON.parse(response.pro_vacancy_conditions): []));
      dispatch(setAddVacancyWorkTime(response.pro_vacancy_work_time));
      dispatch(setAddVacancyWorkPlace(response.pro_vacancy_work_place));      
      dispatch(setAddVacancyLoading(false));      
    })
  }
}


export default addVacancyReducer;
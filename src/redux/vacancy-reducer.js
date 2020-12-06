import { vacanciesAPI } from "../api/api";

const SET_LOADING = 'SET_LOADING';
const SET_VACANCY = 'SET_VACANCY';

let initialState = {
  vacancy: [],
  loadingVacancy: true
}

const vacancyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VACANCY:
      return {
        ...state,
        vacancy: action.vacancy
      }       
    case SET_LOADING:
      return {
        ...state,
        loadingVacancy: action.loading
      }       
    default:
      return state;
  }
}

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const setVacancy = (vacancy) => {
  return {
    type: SET_VACANCY,
    vacancy
  }
}

export const getVacancyDataThunk = (vacancyId) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    vacanciesAPI.getVacancy(vacancyId).then(response => {
      dispatch(setVacancy(response[0]));
      dispatch(setLoading(false));
    })
  }
}


export default vacancyReducer;
import { vacanciesAPI } from "../api/api";

const SET_LOADING = 'SET_LOADING';
const SET_VACANCIES = 'SET_VACANCIES';

let initialState = {
  vacancies: [],
  loadingVacancyLoop: true
}

const vacancyLoopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VACANCIES:
      return {
        ...state,
        vacancies: action.vacancies
      }       
    case SET_LOADING:
      return {
        ...state,
        loadingVacancyLoop: action.loading
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

export const setVacancies = (vacancies) => {
  return {
    type: SET_VACANCIES,
    vacancies
  }
}

export const getVacanciesDataThunk = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    vacanciesAPI.getVacancies().then(response => {
      dispatch(setVacancies(response));
      dispatch(setLoading(false));
    })
  }
}

export const getFilteredVacanciesDataThunk = (filter, query) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    vacanciesAPI.getfilterVacancies(filter, query).then(response => {
      vacanciesAPI.getVacancy(response).then(response => {
        dispatch(setVacancies(response));
        dispatch(setLoading(false));
      })
    })
  }
}

export default vacancyLoopReducer;
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUniqUserCities, getFilterExpertThunk, getExpertsThunkCreator } from '../../../redux/experts-reducer';
import { getExpertsState, getUniqCitiesState } from '../../../redux/experts-selectors';
import { getFilteredVacanciesDataThunk } from '../../../redux/vacancyLoop-reducer';
import FilterReduxForm from './Filter';

const FilterContainer = (props) => {

  let getUniqCitiesState = props.getUniqCitiesState,
  getUniqUserCities = props.getUniqUserCities;

  useEffect( () => {
    getUniqUserCities();
  }, [getUniqCitiesState, getUniqUserCities]);

  const onFormSubmit = (formData) => {    
    let filterCity = formData.filter_city ? formData.filter_city : 'false';
    let filterName = formData.filter_name ? formData.filter_name : 'false';

    if(props.type === 'users') {
      formData ? props.getFilterExpertThunk(filterCity, filterName) : props.getExpertsThunkCreator();
    } 
    if(props.type === 'vacancies') {
      formData ? props.getFilteredVacanciesDataThunk(filterCity, filterName) : console.log('нет');
    }   
  };  

  return (
    <FilterReduxForm 
      onSubmit={onFormSubmit}
      uniqCities={props.uniqCities}    
    />  
  )
}

let mapStateToProps = (state) => {
  return {
    experts: getExpertsState(state),
    uniqCities: getUniqCitiesState(state)    
  }
}

export default connect(mapStateToProps, {getUniqUserCities, getFilterExpertThunk, getExpertsThunkCreator, getFilteredVacanciesDataThunk})(FilterContainer);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUniqUserCities, getFilterExpertThunk, getExpertsThunkCreator } from '../../../redux/experts-reducer';
import { getExpertsState, getUniqCitiesState } from '../../../redux/experts-selectors';
import FilterReduxForm from './Filter';

const FilterContainer = (props) => {

  useEffect( () => {
    props.getUniqUserCities();
  }, [props.getUniqCitiesState]);

  const onFormSubmit = (formData) => {    
    if(formData){
      props.getFilterExpertThunk(formData.filter_city, formData.filter_name);
    } else {
      props.getExpertsThunkCreator();
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

export default connect(mapStateToProps, {getUniqUserCities, getFilterExpertThunk, getExpertsThunkCreator})(FilterContainer);
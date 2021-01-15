import React, { useEffect } from 'react';
import AddNewVacancy from './AddNewVacancy';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { postNewVacancyThunk, getVacancyByIdThunk } from '../../../redux/addNewVacancy-reducer';
import { getAddVacancyCityState, getAddVacancyCompanyNameState, getAddVacancyConditionsState, getAddVacancyFunctionsState, getAddVacancyLoadingState, getAddVacancyPriceState, getAddVacancyRequirementsState, getAddVacancyStudyState, getAddVacancyTitleState, getAddVacancyWorkExpState, getAddVacancyWorkPlaceState, getAddVacancyWorkTimeState, getVacancyAddedState } from '../../../redux/addNewVacancy-selectors';

const AddNewVacancyContainer = (props) => {

  console.log(props);

  let postNewVacancyThunk = props.postNewVacancyThunk,
  getVacancyByIdThunk = props.getVacancyByIdThunk,
  itemId = props.match.params.itemsId;

  useEffect(() => {
    itemId && getVacancyByIdThunk(itemId);
  }, [itemId, getVacancyByIdThunk])

  let initialValues;
  if(itemId) {
    const getMultiTextAreaValue = (name, arrayValue) => {
      let result = {};
      arrayValue.map((item, i) => result[`${name}_${i}`] = item);
      return result;
    }    
    let requirement = getMultiTextAreaValue('requirement', props.addVacancyRequirements);
    let functions = getMultiTextAreaValue('functions', props.addVacancyFunctions);
    let conditions = getMultiTextAreaValue('conditions', props.addVacancyConditions);
    let values = {
      postTitle: props.addVacancyTitle,
      paymentBefore: props.addVacancyPrice[0],
      paymentAfter: props.addVacancyPrice[1],
      companyName: props.addVacancyCompanyName,
      city: props.addVacancyCity,
      experience: props.addVacancyWorkExp,
      study: props.addVacancyStudy,
      worktime: props.addVacancyWorkTime,      
      functionsCount: props.addVacancyFunctions.length,
      conditionsCount: props.addVacancyConditions.length,
      requirementCount: props.addVacancyRequirements.length,
      workPlace: props.addVacancyWorkPlace, 
    };
    initialValues = {...values, ...conditions, ...requirement, ...functions}    
  }else{
    initialValues = {
      postTitle: '',
      postCategory: '',
      postContent: '',
    }
  } 

  const onFormSubmit = (formData) => {    
    postNewVacancyThunk(formData, itemId);    
  };

  return (
    <>
      {props.vacancyAdded && <Redirect to={`/mydata/vacancies/${props.match.params.userId}`} />}
      <AddNewVacancy
        onSubmit={onFormSubmit}
        addVacancyLoading={props.addVacancyLoading}
        initialValues={initialValues}
        itemId={itemId}
      />
    </>
  )
}

let mapStateToProps = (state) => {
  return {    
    addVacancyTitle: getAddVacancyTitleState(state),
    addVacancyPrice: getAddVacancyPriceState(state),
    addVacancyCompanyName: getAddVacancyCompanyNameState(state),
    addVacancyCity: getAddVacancyCityState(state),
    addVacancyWorkExp: getAddVacancyWorkExpState(state),
    addVacancyStudy: getAddVacancyStudyState(state),
    addVacancyRequirements: getAddVacancyRequirementsState(state),
    addVacancyFunctions: getAddVacancyFunctionsState(state),
    addVacancyConditions: getAddVacancyConditionsState(state),
    addVacancyWorkTime: getAddVacancyWorkTimeState(state),
    addVacancyWorkPlace: getAddVacancyWorkPlaceState(state),
    vacancyAdded: getVacancyAddedState(state),
    addVacancyLoading: getAddVacancyLoadingState(state),
  }
}
export default compose(connect(mapStateToProps, {postNewVacancyThunk, getVacancyByIdThunk}),
  withRouter,
)(AddNewVacancyContainer);
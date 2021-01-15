import { Field } from 'formik';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllCategorySelectThunk } from '../../../../redux/categorySelect-reducer';
import { getAllCategorySelectState, getloadingCategorySelectState, getSelectCategorySelectState } from '../../../../redux/categorySelect-selectors';
import CategorySelect from './CategorySelect';


const CategorySelectContainer = (props) => {

  let getAllCategorySelectThunk = props.getAllCategorySelectThunk,
  allCategorySelect = props.allCategorySelect;

  useEffect(() => {
    getAllCategorySelectThunk();
  },[getAllCategorySelectThunk])

  const renderSelect = (catArr) => {    
    let options = [ ...catArr.map( cat => ({value: cat.id, label: cat.name}))];
    return options;
  }

  return (
    <Field
      component={CategorySelect} 
      name={props.name}
      placeholder={props.placeholder}
      options={allCategorySelect && renderSelect(allCategorySelect)} 
      spy={props.spy}
      onChange={props.onChange}
      onBlur={props.onBlur}
      values={props.values}
      errors={props.errors}
      touched={props.touched}     
    />
  )
}

let mapStateToProps = (state) => {
  return {
    allCategorySelect: getAllCategorySelectState(state),
    selectCategorySelect: getSelectCategorySelectState(state),
    loadingCategorySelect: getloadingCategorySelectState(state),
  }
}

export default connect(mapStateToProps, {getAllCategorySelectThunk})(CategorySelectContainer);
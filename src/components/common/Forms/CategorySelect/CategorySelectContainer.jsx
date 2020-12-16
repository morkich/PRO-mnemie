import React, { useEffect, useState } from 'react';
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
    let options = [ ... catArr.map( cat => ({value: [cat.id, cat.parent], label: cat.name}))];
    return options;
  }

  return (
    <CategorySelect 
      name={props.name}
      placeholder={props.placeholder}
      options={allCategorySelect && renderSelect(allCategorySelect)} 
      onChange={props.onChange}
      spy={props.spy}
      defaultValue={{value: props.postCategorys[0], label: props.postCategoryName}}
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
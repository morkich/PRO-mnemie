import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import AddNewEvent from './AddNewEvent';


const AddNewEventContainer = (props) => {
  let itemId = props.match.params.itemsId; 

  // let initialValues;
  // if(itemId) {
   
  // }else{
  //   initialValues = {
  //     postTitle: '',
  //     postCategory: '',
  //     postContent: '',
  //   }
  // } 

  return (
    <>
      {props.vacancyAdded && <Redirect to={`/mydata/vacancies/${props.match.params.userId}`} />}
      <AddNewEvent
        // onSubmit={onFormSubmit}
        // addVacancyLoading={props.addVacancyLoading}
        // initialValues={initialValues}
        itemId={itemId}
      />
    </>
  )
}

let mapStateToProps = (state) => {
  return {    

  }
}
export default compose(connect(mapStateToProps, {}),
  withRouter,
)(AddNewEventContainer);
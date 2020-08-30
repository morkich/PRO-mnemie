import React from 'react';
import { loginCreator } from '../../../../redux/user-reducer';
import Guest from './Guest';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {

  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (autorized) => {
      let action = loginCreator(autorized);
      dispatch(action);
    }
  }  
}

const GuestContainer = connect(mapStateToProps, mapDispatchToProps)(Guest);

export default GuestContainer; 
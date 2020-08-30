import React from 'react';
import { loginCreator } from '../../../../../redux/user-reducer';
import UserData from './UserData';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    userData: state.user.data
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    checkOut: (autorized) => {
      let action = loginCreator(autorized);
      dispatch(action);
    }
  }  
}

const UserDataContainer = connect(mapStateToProps, mapDispatchToProps)(UserData);

export default UserDataContainer; 
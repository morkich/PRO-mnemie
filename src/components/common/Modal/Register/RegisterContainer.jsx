import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setType } from '../../../../redux/modal-reducer';
import { loginThunk, setError } from '../../../../redux/auth-reducer';
import Preloader from '../../Preloader/Preloader';
import Register from './Register';
import { getRegisterDataState, getRegisterLoadingState, getRegisterNameState } from '../../../../redux/rigister-selectors';
import { postRegisterNewUserThunk } from '../../../../redux/rigister-reducer';

const RegisterContainer = (props) => {

  let [passwordState, setPasswordState] = useState('');
  const onChangePass = (event) => {
    setPasswordState(event.password);
  };

  const onFormSubmit = (formData) => {        
    let newUserData = {
      'username': formData.username,
      'email': formData.email,
      'password': formData.password_check,
    };    
    props.postRegisterNewUserThunk(newUserData);
  };

  const toAutorisation = () => {
    props.setType('auth');
  };

  return (
    <>
      {props.registerLoading ? <Preloader /> : null}
      <Register
        onFormSubmit={onFormSubmit}
        changeForm={toAutorisation}
        onChange={onChangePass}
        checkPass={passwordState}
      />
    </>
  )
}

let mapStateToProps = (state) => {
  return {
    registerData: getRegisterDataState(state),
    registerName: getRegisterNameState(state),
    registerLoading: getRegisterLoadingState(state)
  }
}
export default connect(mapStateToProps,
  { loginThunk, setError, setType, postRegisterNewUserThunk }
)(RegisterContainer);
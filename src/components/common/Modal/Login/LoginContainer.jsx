import React from 'react';
import { connect } from 'react-redux';
import { setType } from '../../../../redux/modal-reducer';
import { loginThunk, setError } from '../../../../redux/auth-reducer';
import { getLoadingAcc, getLoggetIn, getUserId } from '../../../../redux/auth-selectors';
import Preloader from '../../Preloader/Preloader';
import Login from './Login';

const LoginContainer = (props) => {
  const onFormSubmit = (formData) => {
    props.loginThunk(formData.username, formData.password);
  };

  const toRegistration = () => {
    props.setType('register');
  }

  return (
    <>
      {props.loadingAcc ? <Preloader /> : null}
      <Login
        onFormSubmit={onFormSubmit}
        loggetIn={props.loggetIn}
        loadingAcc={props.loadingAcc}
        userId={props.userId}
        changeForm={toRegistration}
      />
    </>
  )
}

let mapStateToProps = (state) => {
  return {
    loggetIn: getLoggetIn(state),
    loadingAcc: getLoadingAcc(state),
    userId: getUserId(state)
  }
}
export default connect(mapStateToProps,
  { loginThunk, setError, setType }
)(LoginContainer);
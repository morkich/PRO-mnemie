import React from 'react';
import Autorization from './Autorization';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    userLogin: state.user.autorization
  }
}
let mapDispatchToProps = (dispatch) => {
  return {

  }  
}

const AutorizationContainer = connect(mapStateToProps, mapDispatchToProps)(Autorization);

export default AutorizationContainer; 
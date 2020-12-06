import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import MainPage from './MainPage';

const MainPageContainer = (props) => {

  return (
    <MainPage />
  )
}

let mapStateToProps = (state) => {
  return {

  }
}
export default 
  compose(connect(
    mapStateToProps, 
    {}),
  withRouter,
)(MainPageContainer);
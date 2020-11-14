import React from 'react';
import { connect } from 'react-redux';
import Raiting from './Raiting';

const RaitingContainer = () => {
  return (
    <Raiting />
  )
}

let mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, {})(RaitingContainer); 
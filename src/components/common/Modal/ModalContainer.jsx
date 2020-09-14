import React from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';

class ModalContainer extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <Modal />
    )
  }
}

let mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {} )(ModalContainer);
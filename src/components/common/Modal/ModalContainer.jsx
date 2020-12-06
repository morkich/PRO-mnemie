import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';
import {getModalLoadingState, getModalVisionState, getModalTypeState} from '../../../redux/modal-selectors';
import { setType, setVision } from '../../../redux/modal-reducer';

const ModalContainer = (props) => {

  let type =props.type,
  setType = props.setType;

  useEffect(() => {
    setType(type)
  }, [type, setType])

  const modalVision = () => {
    props.setVision(true);
  }
  const modalClose = () => {
    props.setVision(false);
  }

  return (
    <Modal 
      type={props.modalType}
      vision={props.modalVision}
      modalLoading={props.modalLoading}
      modalOpen={modalVision}
      modalClose={modalClose}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    modalType: getModalTypeState(state),
    modalVision: getModalVisionState(state),
    modalLoading: getModalLoadingState(state),
  }
}

export default connect(mapStateToProps, 
  {setVision, setType} )
  (ModalContainer);
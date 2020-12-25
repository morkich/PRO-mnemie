import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';
import {getModalLoadingState, getModalVisionState, getModalTypeState} from '../../../redux/modal-selectors';
import { setType, setVision } from '../../../redux/modal-reducer';

const ModalContainer = (props) => {

  props.open && props.setVision(true);

  let type = props.type,
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
      clean={props.clean}
      vision={props.modalVision}
      modalLoading={props.modalLoading}
      modalOpen={modalVision}
      modalClose={modalClose}
      buttonText={props.buttonText}
      link={props.link}
      string={props.string}
      deleteId={props.deleteId}
      deleteName={props.deleteName}
      itemType={props.itemType}
      userId={props.userId}
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
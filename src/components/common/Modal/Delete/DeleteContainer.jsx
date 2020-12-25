import React from 'react';
import { connect } from 'react-redux';
import { deleteItemThunk, setVision } from '../../../../redux/modal-reducer';
import Delete from './Delete';

const DeleteContainer = (props) => {
  console.log(props);
  const modalClose = () => {
    props.setVision(false);
  }

  const deleteItem = () => {
    props.deleteId && props.deleteItemThunk(props.deleteId, props.userId, props.itemType );
  }

  return (
    <Delete
      deleteName={props.deleteName}
      modalClose={modalClose}
      deleteItem={deleteItem}
    />
  )
}

let mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps,
  {setVision, deleteItemThunk}
)(DeleteContainer);
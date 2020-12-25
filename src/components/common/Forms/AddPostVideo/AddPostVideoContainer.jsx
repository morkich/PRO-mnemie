import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { postImagePostThunk } from '../../../../redux/addPostImage-reducer';
import { getPostImageLoadingState } from '../../../../redux/addPostImage-selectors';
import { setVision } from '../../../../redux/modal-reducer';
import AddPostVideo from './AddPostVideo';

const AddPostVideoContainer = (props) => {

  const openModalVideoUrl = () => {
    props.setVision(true);
  }

  return (
    <AddPostVideo 
      openModalVideoUrl={openModalVideoUrl}
      postVideoId={props.postVideoId}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    postImageLoading: getPostImageLoadingState(state)
  }
}

export default compose(
  connect(mapStateToProps,
  {postImagePostThunk, setVision}),
  withRouter,
)(AddPostVideoContainer);
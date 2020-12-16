import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { postImagePostThunk } from '../../../../redux/addPostImage-reducer';
import { getPostImageLoadingState } from '../../../../redux/addPostImage-selectors';
import AddPostImage from './AddPostImage';

const AddPostImageContainer = (props) => {
  let avatarId = Math.round(1 + Math.random() * (9999999999 - 1));
  const changeImage = (event) => {
    props.postImagePostThunk(localStorage.getItem('token'), event.target.files[0], `image_post_${avatarId}`, 'jpg', props.userId);
  }

  return (
    <AddPostImage 
      changeImage={changeImage}
      postImageUrl={props.postImageUrl}
      postImageLoading={props.postImageLoading}
      name={props.name}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    postImageLoading: getPostImageLoadingState(state)
  }
}

export default compose(
  connect(mapStateToProps, {postImagePostThunk}),
  withRouter,
)(AddPostImageContainer);
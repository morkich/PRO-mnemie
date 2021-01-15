import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { postImagePostThunk, setPostImageUrl } from '../../../../redux/addPostImage-reducer';
import { getPostImageLoadingState, getPostImageUrlState } from '../../../../redux/addPostImage-selectors';
import AddPostImage from './AddPostImage';

const AddPostImageContainer = (props) => {
  
  let postImageUrl = props.postImageUrl,
  setPostImageUrl = props.setPostImageUrl;
  
  let imageRandomId = Math.round(1 + Math.random() * (9999999999 - 1));  

  const changeImage = (event) => {
    props.postImagePostThunk(event.target.files[0], `post_image_${imageRandomId}_${event.target.files[0].name}`, props.postType);
  }

  useEffect(() => {
    postImageUrl && setPostImageUrl(postImageUrl);
  }, [postImageUrl, setPostImageUrl])

  return (
    <AddPostImage 
      changeImage={changeImage}
      postImageUrl={props.postImageUrlState}
      postImageLoading={props.postImageLoading}
      name={props.name}    
      small={props.small}  
    />
  )
}

let mapStateToProps = (state) => {
  return {
    postImageLoading: getPostImageLoadingState(state),
    postImageUrlState: getPostImageUrlState(state)
  }
}

export default compose(
  connect(mapStateToProps, {postImagePostThunk, setPostImageUrl}),
  withRouter,
)(AddPostImageContainer);
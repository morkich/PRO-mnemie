import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addCommentThunk, setCommentsDataThunk } from '../../../redux/comments-reducer';
import { getAvatar, getFirstname, getLastname, getLoggetIn, getPosition, getUserId } from '../../../redux/auth-selectors';
import Comments from './Comments';
import { getCommentLoadingState, getCommentsState } from '../../../redux/comments-selectors';


const CommentsContainer = (props) => { 

  let userId = props.userId,
  postId = props.postId,
  setCommentsDataThunk = props.setCommentsDataThunk;

  useEffect(() => {    
    postId && setCommentsDataThunk(postId);  
  }, [userId, postId, setCommentsDataThunk])

  const onSubmit = (formData) => {    
    props.addCommentThunk(postId, userId, formData.commentBody);
    formData.commentBody = '';
  }

  return (
    <Comments
      onSubmit={onSubmit}
      userId={userId}
      userAvatar={props.userAvatar}
      firstName={props.firstName}
      lastName={props.lastName}
      postId={postId}
      userPosition={props.userPosition}
      comments={props.comments}
      loading={props.loading}
      logIn={props.logIn}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    userId: getUserId(state),
    userAvatar: getAvatar(state),
    userPosition: getPosition(state),
    comments: getCommentsState(state),
    firstName: getFirstname(state),
    lastName: getLastname(state),  
    loading: getCommentLoadingState(state),
    logIn: getLoggetIn(state)
  }
}

export default connect(mapStateToProps,
  {addCommentThunk, setCommentsDataThunk, getCommentLoadingState}
)(CommentsContainer);
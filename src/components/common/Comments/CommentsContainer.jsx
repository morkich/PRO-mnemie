import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addCommentThunk, setCommentsDataThunk } from '../../../redux/comments-reducer';
import { getAvatar, getFirstname, getLastname, getPosition, getUserId } from '../../../redux/auth-selectors';
import Comments from './Comments';
import { getCommentLoadingState, getCommentsState } from '../../../redux/comments-selectors';


const CommentsContainer = (props) => { 

  useEffect(() => {    
      props.setCommentsDataThunk(props.postId);  
  }, [props.userId, props.postId])


  const onSubmit = (formData) => {    
    props.addCommentThunk(props.postId, props.userId, formData.commentBody);
    formData.commentBody = '';
  }

  return (
    <Comments
      onSubmit={onSubmit}
      userId={props.userId}
      userAvatar={props.userAvatar}
      firstName={props.firstName}
      lastName={props.lastName}
      postId={props.postId}
      userPosition={props.userPosition}
      comments={props.comments}
      loading={props.loading}
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
    loading: getCommentLoadingState(state)
  }
}

export default connect(mapStateToProps,
  {addCommentThunk, setCommentsDataThunk, getCommentLoadingState}
)(CommentsContainer);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getLoading, getPostData, getViewsPost } from '../../redux/post-selectors';
import { getPostDataThunk, setView } from '../../redux/post-reducer';
import Post from './Post';
import { getUserId } from '../../redux/auth-selectors';

const PostContainer = (props) => {

  let postId = props.match.params.postId,
      getPostDataThunk = props.getPostDataThunk;


  useEffect( () => {
    postId && getPostDataThunk(postId);  
  }, [postId, getPostDataThunk]);

  return (
    <Post
      loading={props.loading}
      postData={props.postData}      
      likesData={props.likesData}
      userId={props.userId}
      viewsPost={props.viewsPost}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    postData: getPostData(state),
    loading: getLoading(state),    
    userId: getUserId(state),
    viewsPost: getViewsPost(state),
  }
}
export default 
  compose(connect(mapStateToProps, {getPostDataThunk, setView}),
  withRouter,
)(PostContainer);
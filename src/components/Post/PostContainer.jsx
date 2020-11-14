import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getLoading, getPostData, getViewsPost } from '../../redux/post-selectors';
import { getPostDataThunk, setView } from '../../redux/post-reducer';
import Post from './Post';
import { getUserId } from '../../redux/auth-selectors';

const PostContainer = (props) => {

  useEffect( () => {
    props.getPostDataThunk(props.match.params.postId);    
  }, [props.postData.id]);

  return (
    <Post
      loading={props.loading}
      postData={props.postData}      
      likesData={props.likesData}
      userId={props.userId}
      views={props.views}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    postData: getPostData(state),
    loading: getLoading(state),    
    userId: getUserId(state),
    views: getViewsPost(state),
  }
}
export default 
  compose(connect(mapStateToProps, {getPostDataThunk, setView}),
  withRouter,
)(PostContainer);
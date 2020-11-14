import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostsState, getCurrentPage, getLoadingPostsState, getTotalPageCount} from '../../redux/postLoop-selectors';
import { getPostsThunk } from '../../redux/postLoop-reducer';
import { withRouter } from 'react-router-dom';
import PostLoop from './PostLoop';
import { compose } from 'redux';

const PostLoopContainer = (props) => {

  useEffect( () => {
    props.getPostsThunk(props.match.params.catId);  
  }, [props.match.params.catId]);

    return (
    <PostLoop 
      totalPageCount={props.totalPageCount}
      currentPage={props.currentPage}
      posts={props.posts}
      loading={props.loading}
      parentCat={props.match.params.catId}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    posts: getPostsState(state),
    totalPageCount: getTotalPageCount(state),
    currentPage: getCurrentPage(state),
    loading: getLoadingPostsState(state),    
  }
}

export default compose(connect(mapStateToProps,
  { getPostsThunk }),
  withRouter
)(PostLoopContainer);
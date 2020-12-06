import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostsState, getCurrentPage, getLoadingPostsState, getTotalPageCount, getParentCat, getParentCatName} from '../../redux/postLoop-selectors';
import { getPostsThunk, getParentCatThunk } from '../../redux/postLoop-reducer';
import { withRouter } from 'react-router-dom';
import PostLoop from './PostLoop';
import { compose } from 'redux';

const PostLoopContainer = (props) => {
  
  let getParentCatThunk = props.getParentCatThunk,
  getPostsThunk = props.getPostsThunk,
  catId = props.match.params.catId,
  catName = props.match.params.catName,
  parentCat = props.parentCat;

  useEffect( () => {    
    catId && getParentCatThunk(catId, catName);  
  }, [catId, catName, getParentCatThunk]);

  useEffect( () => {
    getPostsThunk(parentCat);  
  }, [parentCat, getPostsThunk]);


    return (
    <PostLoop 
      totalPageCount={props.totalPageCount}
      currentPage={props.currentPage}
      posts={props.posts}
      loading={props.loading}
      parentCat={props.parentCat}
      catName={props.parentCatName}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    posts: getPostsState(state),
    totalPageCount: getTotalPageCount(state),
    currentPage: getCurrentPage(state),
    loading: getLoadingPostsState(state),    
    parentCat: getParentCat(state),
    parentCatName: getParentCatName(state)
  }
}

export default compose(connect(mapStateToProps,
  { getPostsThunk, getParentCatThunk }),
  withRouter
)(PostLoopContainer);
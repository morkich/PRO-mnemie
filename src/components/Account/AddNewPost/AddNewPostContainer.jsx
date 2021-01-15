import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import AddNewPost from './AddNewPost';
import {getAddPostCategoryNameState, getAddPostCategorysState, getAddPostContentState, getAddPostImageIdState, getAddPostImageState, getAddPostLoadingState, getAddPostTagsState, getAddPostTitleState, getPostAddedState} from '../../../redux/addNewPost-selectors'
import { postNewPostThunk, setAddPostCategorys, getPostEditDataThunk, setAddPostContent, setAddPostImage} from '../../../redux/addNewPost-reducer';

const AddNewPostContainer = (props) => {

  let itemId = props.match.params.itemsId,
  getPostEditDataThunk = props.getPostEditDataThunk,
  postAdded = props.postAdded;

  useEffect(() => {
    itemId && getPostEditDataThunk(itemId);
  }, [itemId, getPostEditDataThunk])

  const onFormSubmit = (formData) => {     
    props.postNewPostThunk(formData, props.addPostImageId, props.addPostTags, itemId)
  };

  return (
    <>
      {postAdded && <Redirect to={`/mydata/posts/${props.match.params.userId}`} />}
      <AddNewPost
        onSubmit={onFormSubmit} 
        userId={props.match.params.userId}
        itemId={itemId}
        postTitle={props.addPostTitle}
        postCategorys={props.addPostCategorys}
        postCategoryName={props.addPostCategoryName}
        postImage={props.addPostImage}
        postContent={props.addPostContent}
        postTags={props.addPostTags}
        postLoading={props.addPostLoading}
      />
    </>
  )
}

let mapStateToProps = (state) => {
  return {    
    addPostTitle: getAddPostTitleState(state),
    addPostCategorys: getAddPostCategorysState(state),
    addPostImage: getAddPostImageState(state),
    addPostImageId: getAddPostImageIdState(state),
    addPostContent: getAddPostContentState(state),
    addPostTags: getAddPostTagsState(state),
    postAdded: getPostAddedState(state),
    addPostLoading: getAddPostLoadingState(state),
    addPostCategoryName: getAddPostCategoryNameState(state),
  }
}
export default compose(connect(mapStateToProps, {postNewPostThunk, setAddPostCategorys, getPostEditDataThunk, setAddPostContent, setAddPostImage}),
  withRouter,
)(AddNewPostContainer);
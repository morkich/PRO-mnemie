import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import AddNewPost from './AddNewPost';
import {getAddPostCategoryNameState, getAddPostCategorysState, getAddPostContentState, getAddPostImageIdState, getAddPostImageState, getAddPostLoadingState, getAddPostTagsState, getAddPostTitleState} from '../../../redux/addNewPost-selectors'
import { postNewPostThunk, setAddPostCategorys, getPostEditDataThunk, setAddPostTitle, setAddPostContent, setAddPostImage} from '../../../redux/addNewPost-reducer';

const AddNewPostContainer = (props) => {

  let itemId = props.match.params.itemsId,
  getPostEditDataThunk = props.getPostEditDataThunk,
  setAddPostTitle = props.setAddPostTitle,
  setAddPostImage = props.setAddPostImage,
  addPostImage = props.addPostImage;

  let initialValues = {
    postTitle: '',
    postCategory: '',
    postContent: '',
  }
  if(itemId) {
    initialValues = {
      postTitle: props.addPostTitle,
      postCategory: props.addPostCategorys,
      postContent: props.addPostContent.replace(/<\/?[^>]+(>|$)/g, ""),
    }
  } 

  useEffect(() => {
    !itemId && setAddPostImage(null);
  }, [addPostImage, setAddPostImage])

  useEffect(() => {
    itemId && getPostEditDataThunk(itemId);
  }, [itemId, getPostEditDataThunk])

  const onFormSubmit = (formData) => {     
    props.postNewPostThunk(formData, props.addPostImageId, props.addPostTags, props.addPostCategorys, itemId)
  };

  const onChange = (event) => {    
    event.value && props.setAddPostCategorys(event.value);    
  }; 

  const setTitle = (event) => {
    setAddPostTitle(event.target.value);
  }

  return (
    <AddNewPost
      onSubmit={onFormSubmit} 
      onChange={onChange} 
      userId={props.match.params.userId}
      itemId={itemId}
      postTitle={props.addPostTitle}
      postCategorys={props.addPostCategorys}
      postCategoryName={props.addPostCategoryName}
      postImage={props.addPostImage}
      postContent={props.addPostContent}
      postTags={props.addPostTags}
      postLoading={props.addPostLoading}
      setTitle={setTitle}
      initialValues={initialValues}
    />
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
    addPostLoading: getAddPostLoadingState(state),
    addPostCategoryName: getAddPostCategoryNameState(state),
  }
}
export default compose(connect(mapStateToProps, {setAddPostTitle, postNewPostThunk, setAddPostCategorys, getPostEditDataThunk, setAddPostContent, setAddPostImage}),
  withRouter,
)(AddNewPostContainer);
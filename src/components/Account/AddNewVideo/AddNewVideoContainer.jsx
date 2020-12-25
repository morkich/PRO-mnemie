import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { setAddVideoTitle, setAddVideoContent, postNewVideoThunk } from '../../../redux/addNewVideo-reducer';
import { getAddVideoContentState, getAddVideoImageIdState, getAddVideoImageState, getAddVideoLoadingState, getAddVideoTagsState, getAddVideoTitleState, getAddVideoUrlState, getVideoAddedState } from '../../../redux/addNewVideo-selectors';
import AddNewVideo from './AddNewVideo';

const AddNewVideoContainer = (props) => {

  console.log(props);

  let itemId = props.match.params.itemsId,
  videoAdded = props.videoAdded;
  // getPostEditDataThunk = props.getPostEditDataThunk,
  // setAddPostTitle = props.setAddPostTitle,
  // postAdded = props.postAdded;

  // let initialValues = {
  //   postTitle: '',
  //   postCategory: '',
  //   postContent: '',
  // }
  // if(itemId) {
  //   initialValues = {
  //     postTitle: props.addPostTitle,
  //     postCategory: props.addPostCategorys,
  //     postContent: props.addPostContent.replace(/<\/?[^>]+(>|$)/g, ""),
  //   }
  // } 

  // useEffect(() => {
  //   itemId && getPostEditDataThunk(itemId);
  // }, [itemId, getPostEditDataThunk])

  const onFormSubmit = (formData) => {     
    props.postNewVideoThunk(formData.postTitle, formData.videoDescription, props.addVideoUrl, props.addVideoImageId, props.addVideoTags, itemId)
  };

  return (
    <>
      {videoAdded && <Redirect to={`/mydata/tv_video/${props.match.params.userId}`} />}
      <AddNewVideo
        onSubmit={onFormSubmit} 
        userId={props.match.params.userId}
        addVideoId={props.addVideoUrl}
        postTitle={props.addVideoTitle}
        postCategorys={props.addPostCategorys}
        postCategoryName={props.addPostCategoryName}
        postImage={props.addPostImage}
        postContent={props.addVideoContent}
        postTags={props.addVideoTags}
        videoLoading={props.addVideoLoading}
        // initialValues={initialValues}
      />
    </>
  )
}

let mapStateToProps = (state) => {
  return {    
    addVideoTitle: getAddVideoTitleState(state),
    addVideoImage: getAddVideoImageState(state),
    addVideoImageId: getAddVideoImageIdState(state),
    addVideoContent: getAddVideoContentState(state),
    addVideoTags: getAddVideoTagsState(state),
    addVideoUrl: getAddVideoUrlState(state),
    videoAdded: getVideoAddedState(state),
    addVideoLoading: getAddVideoLoadingState(state)
  }
}
export default compose(connect(mapStateToProps, {postNewVideoThunk, setAddVideoTitle, setAddVideoContent}),
  withRouter,
)(AddNewVideoContainer);
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { setAddVideoTitle, setAddVideoContent, postNewVideoThunk, getVideoEditDataThunk } from '../../../redux/addNewVideo-reducer';
import { getAddVideoContentState, getAddVideoImageIdState, getAddVideoImageState, getAddVideoLoadingState, getAddVideoTagsState, getAddVideoTitleState, getAddVideoUrlState, getVideoAddedState } from '../../../redux/addNewVideo-selectors';
import AddNewVideo from './AddNewVideo';

const AddNewVideoContainer = (props) => {

  let [postVideoId, setPostVideoId] = useState(null)

  let itemId = props.match.params.itemsId,
  getVideoEditDataThunk = props.getVideoEditDataThunk,
  addVideoUrl = props.addVideoUrl,
  videoAdded = props.videoAdded;

  useEffect(() => {
    if(addVideoUrl) {
      setPostVideoId(addVideoUrl.match(/^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/));
    } 
  }, [addVideoUrl])

  useEffect(() => {
    itemId && getVideoEditDataThunk(itemId);
  }, [itemId, getVideoEditDataThunk])

  const onFormSubmit = (formData) => {     
    props.postNewVideoThunk(formData.postTitle, formData.videoDescription, props.addVideoUrl, props.addVideoImageId, props.addVideoTags, itemId)
  };

  return (
    <>
      {videoAdded && <Redirect to={`/mydata/tv_video/${props.match.params.userId}`} />}
      <AddNewVideo
        onSubmit={onFormSubmit} 
        userId={props.match.params.userId}
        postVideo={props.addVideoUrl}
        postTitle={props.addVideoTitle}
        postImage={props.addVideoImage}
        postContent={props.addVideoContent}
        postTags={props.addVideoTags}
        postVideoId={postVideoId}
        videoLoading={props.addVideoLoading}
        
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
export default compose(connect(mapStateToProps, {postNewVideoThunk, setAddVideoTitle, setAddVideoContent, getVideoEditDataThunk}),
  withRouter,
)(AddNewVideoContainer);
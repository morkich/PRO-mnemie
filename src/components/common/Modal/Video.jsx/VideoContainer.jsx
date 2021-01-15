import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAddVideoUrl } from '../../../../redux/addNewVideo-reducer';
import { setVision } from '../../../../redux/modal-reducer';
import Video from './Video';
import url from 'url';


const VideoContainer = (props) => {

  const modalClose = () => {
    props.setVision(false);
  }

  let [itemValue, setItemValue] = useState('');

  const setVideoLink = () => {    
    props.setAddVideoUrl(itemValue)
    props.setVision(false);
  }

  const changeInput = (event) => {
    setItemValue(event.target.value)
  }

  return (
    <Video
      deleteName={props.deleteName}
      modalClose={modalClose}
      setVideoLink={setVideoLink}
      value={itemValue}
      onChange={changeInput}      
    />
  )
}

let mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps,
  {setVision, setAddVideoUrl}
)(VideoContainer);
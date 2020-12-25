import React from 'react';
import Preloader from '../../Preloader/Preloader';
import style from '../Forms.module.css';
import YouTube from 'react-youtube';
import ModalContainer from '../../Modal/ModalContainer';

const AddPostVideo = (props) => {

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    }
  }  

  return (    
    <>
    <div className={style.imageBlock} onClick={props.openModalVideoUrl}>
      {props.postImageLoading ? <Preloader /> : null}
      {props.postVideoId && <YouTube
        videoId={props.postVideoId}                  // defaults -> null
        id={props.postVideoId}                       // defaults -> null
        className={style.video}                // defaults -> null
        containerClassName={style.videoContainer}       // defaults -> ''
        opts={opts}                        // defaults -> {}
        // onReady={func}                    // defaults -> noop
        // onPlay={func}                     // defaults -> noop
        // onPause={func}                    // defaults -> noop
        // onEnd={func}                      // defaults -> noop
        // onError={func}                    // defaults -> noop
        // onStateChange={func}              // defaults -> noop
        // onPlaybackRateChange={func}       // defaults -> noop
        // onPlaybackQualityChange={func}    // defaults -> noop
      />}
      <div className={style.addImageInput}>
        <svg width="87" height="101" viewBox="0 0 87 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.8" d="M87 50.5L0.750003 100.296L0.750007 0.703537L87 50.5Z" fill="white"/>
        </svg>
        <span>Добавить видео</span>
        {/* <input name={props.name} type="file" className={style.addPostImageBut}/> */}
      </div>    
    </div>
    <ModalContainer 
      type={'addVideo'}
      string={true}
      userId={props.userId}
      clean={true}
    />    
  </>        
  )
}

export default AddPostVideo
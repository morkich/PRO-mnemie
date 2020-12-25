import React, { useState } from 'react';
import YouTube from 'react-youtube';
import FavoritesContainer from '../Favorites/FavoritesContainer';
import style from './PostImage.module.css'

const PostImage = (props) => {
  
  let [videoMode, setVideoMode] = useState(false);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }  

  let VideoModeBlock = <></>;


  let videoId = props.videoId ? props.videoId : null;

  console.log(videoId);

  return (
    <div className={`${style.wrap} ${props.video && style.wrapVideo}`}>
      
      {videoMode ? 
        videoId && <YouTube
          videoId={videoId}                  // defaults -> null
          id={videoId}                       // defaults -> null
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
        /> :
        <>
          <img src={props.imgUrl} alt={props.imgAlt} />
          <div className={style.opacity}></div>
          {videoId && <div className={style.play} onClick={() => {setVideoMode(true)}}>
            <svg width="87" height="101" viewBox="0 0 87 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M87 50.5L0.750003 100.296L0.750007 0.703537L87 50.5Z" fill="white"/>
            </svg>
          </div>}
        </>
      }
      
      <FavoritesContainer       
        expertId={props.id} 
        type={props.typeFavorite}
      />  
    </div>
  );
}

export default PostImage;
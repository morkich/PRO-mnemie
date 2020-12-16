import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLikesCoint, getLikesData, getOnDislike, getOnLike, getLikeLoading } from '../../../redux/likes-selectors';
import { getLikesDataThunk, getLikesRenderingThunk, setLikesThunk } from '../../../redux/likes-reducer';
import Likes from './Likes';

const LikesContainer = (props) => {

  let postId = props.postId,
  userId = props.userId,
  getLikesDataThunk = props.getLikesDataThunk,
  getLikesRenderingThunk = props.getLikesRenderingThunk,
  likesData = props.likesData,
  typePost = props.typePost && props.typePost;

  useEffect(() => {
    postId && getLikesDataThunk(postId, typePost);
  }, [postId, getLikesDataThunk]);

  useEffect(() => {
    console.log(likesData);
    userId && getLikesRenderingThunk(userId, likesData);
  }, [likesData, userId, getLikesRenderingThunk]);
 
  const onDislikeFunc = () => {
    props.likesData[props.userId] = false;
    props.setLikesThunk(props.postId, props.likesData, typePost);
    props.getLikesRenderingThunk(props.userId, props.likesData);
  }  
  const onLikeFunc = () => {
    props.likesData[props.userId] = true;
    props.setLikesThunk(props.postId, props.likesData, typePost);  
    props.getLikesRenderingThunk(props.userId, props.likesData);
  }  

  return (
    <Likes
      likesData={props.likesData}
      like={props.onLike}
      dislike={props.onDislike}
      count={props.likesCoint}
      loading={props.loading}
      dislikeFunk={onDislikeFunc}
      likeFunk={onLikeFunc}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    likesData: getLikesData(state),
    likesCoint: getLikesCoint(state),
    onLike: getOnLike(state),
    onDislike: getOnDislike(state),
    loading: getLikeLoading(state)
  }
}

export default connect(mapStateToProps,
  {getLikesDataThunk, getLikesRenderingThunk, setLikesThunk}
)(LikesContainer);
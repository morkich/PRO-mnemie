import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import AvatarChange from './AvatarChange';
import { getAvatarLoadingState, getAvatarUrlState, getNewAvatarNameState, getNewAvatarTypeState } from '../../../redux/avatarChange-selectors';
import { postNewAvatarThunk, setAvatarUrl } from '../../../redux/avatarChange-reducer';

const AvatarChangeContainer = (props) => {

  let avatar = props.avatar,
  setAvatarUrl = props.setAvatarUrl,
  postNewAvatarThunk = props.postNewAvatarThunk,
  userId = props.userId;

  let avatarId = Math.round(1 + Math.random() * (9999 - 1));

  const changeAvatar = (event) => {
    postNewAvatarThunk(localStorage.getItem('token'), event.target.files[0], `avatar_user_${avatarId}`, 'jpg', userId);
  }

  useEffect(() => {
    avatar && setAvatarUrl(avatar);
  }, [avatar, setAvatarUrl])

  return (
    <>      
      <AvatarChange 
      avatar={props.avatarUrl}
      changeAvatar={changeAvatar}
      avatarLoading={props.avatarLoading}
      />
    </>
  )
}

let mapStateToProps = (state) => {
  return {
    avatarUrl: getAvatarUrlState(state),
    newAvatarType: getNewAvatarTypeState(state),
    newAvatarName: getNewAvatarNameState(state),
    avatarLoading: getAvatarLoadingState(state),
  }
}

export default compose(
  connect(mapStateToProps, {setAvatarUrl, postNewAvatarThunk}),
  withRouter,
)(AvatarChangeContainer);
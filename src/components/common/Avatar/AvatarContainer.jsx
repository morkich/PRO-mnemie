import React from 'react';
import { connect } from 'react-redux';
import Avatar from './Avatar';


const AvatarContainer = (props) => {

  return (
    <Avatar
      avatarUrl={props}
      userName={props}
    />
  )
}

let mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps,
  {}
)(AvatarContainer);
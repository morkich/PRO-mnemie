import React from 'react';
import Autorization from './Autorization';
import { toggleLoadingAcc } from '../../../redux/auth-reducer';
import { connect } from 'react-redux';
import { getLoadingAcc, getLoggetIn, getToken, getFirstname, getLastname, getAvatar, getUserId } from '../../../redux/auth-selectors';

class AutorizationContainer extends React.Component {

  render() {
    return (
      <Autorization
        loggetIn={this.props.loggetIn}
        firstname={this.props.firstname}
        lastname={this.props.lastname}
        avatar={this.props.avatar}
        userId={this.props.userId}
        loadingAcc={this.props.loadingAcc}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    token: getToken(state),
    loggetIn: getLoggetIn(state),
    firstname: getFirstname(state),
    lastname: getLastname(state),
    avatar: getAvatar(state),
    loadingAcc: getLoadingAcc(state),
    userId: getUserId(state),
  }
}

export default connect(mapStateToProps, { toggleLoadingAcc })(AutorizationContainer);
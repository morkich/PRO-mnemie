import React from 'react';
import Autorization from './Autorization';
import { authThunk } from '../../../redux/auth-reducer';
import { connect } from 'react-redux';

class AutorizationContainer extends React.Component {

  componentDidMount() {
    this.props.authThunk(localStorage.getItem('token'));
  }

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
    token: state.auth.token,
    loggetIn: state.auth.loggetIn,
    firstname: state.auth.firstname,
    lastname: state.auth.lastname,
    avatar: state.auth.avatar,
    loadingAcc: state.auth.loadingAcc,
    userId: state.auth.userId,
  }
}

export default connect(mapStateToProps, { authThunk })(AutorizationContainer);
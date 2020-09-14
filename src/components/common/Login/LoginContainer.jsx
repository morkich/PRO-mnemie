import React from 'react';
import { connect } from 'react-redux';
import { updateUserData, loginThunk } from '../../../redux/auth-reducer';
import Login from './Login';

class LoginContainer extends React.Component {

  componentDidMount() {
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.loginThunk(this.props.username, this.props.password);
  };

  handleOnChange = (event) => {
    this.props.updateUserData({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <Login
        onFormSubmit={this.onFormSubmit}
        handleOnChange={this.handleOnChange}
        username={this.props.username}
        password={this.props.password}
        userNiceName={this.props.userNiceName}
        userEmail={this.props.userEmail}
        loggetIn={this.props.loggetIn}
        loadingAcc={this.props.loadingAcc}
        userId={this.props.userId}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    firstname: state.auth.firstname,
    username: state.auth.username,
    password: state.auth.password,
    userNiceName: state.auth.userNiceName,
    userEmail: state.auth.userEmail,
    loggetIn: state.auth.loggetIn,
    loadingAcc: state.auth.loadingAcc,
    token: state.auth.token,
    userId: state.auth.userId,
  }
}

export default connect(mapStateToProps,
  { updateUserData, loginThunk }
)(LoginContainer);
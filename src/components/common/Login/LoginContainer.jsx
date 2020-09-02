import React from 'react';
import { connect } from 'react-redux';
import { toggleisLoading, setUserData, updateUserData, getError } from '../../../redux/auth-reducer';
import * as axios from 'axios';
import Login from './Login';

class LoginContainer extends React.Component {

  componentDidMount() {
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const siteURL = 'http://proview.loc/';
    const loginData = {
      username: this.props.username,
      password: this.props.password
    }
    this.props.toggleisLoading(true);
    axios.post(`${siteURL}/wp-json/jwt-auth/v1/token`, loginData)
      .then(response => {
        if (response.data.token === undefined) {
          this.props.getError(response.data.message);
          this.props.toggleisLoading(false);
          return;
        }
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userName', response.data.user_nicename);
        this.props.setUserData({
          userNiceName: response.data.user_nicename,
          userEmail: response.data.user_email,
          loggetIn: true,
          isLoading: false,
          token: response.data.token
        });
      })
      .catch(error => {
        this.props.getError(error.response.data);
        this.props.toggleisLoading(false);
      });
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
        isLoading={this.props.isLoading}
        userId={this.props.userId}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    password: state.auth.password,
    userNiceName: state.auth.userNiceName,
    userEmail: state.auth.userEmail,
    loggetIn: state.auth.loggetIn,
    isLoading: state.auth.isLoading,
    token: state.auth.token,
    userId: state.auth.userId,
  }
}

export default connect(mapStateToProps,
  { toggleisLoading, setUserData, updateUserData, getError }
)(LoginContainer);
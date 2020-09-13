import React from 'react';
import { connect } from 'react-redux';
import { toggleLoadingAcc, setUserData, updateUserData, getError } from '../../../redux/auth-reducer';
import * as axios from 'axios';
import Login from './Login';
import { optionAPI } from '../../../api/api';

class LoginContainer extends React.Component {

  componentDidMount() {
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.toggleLoadingAcc(true);
    optionAPI.getToken(this.props.username, this.props.password)
      .then(data => {
        if (!data.token) {
          this.props.getError(data.message);
          this.props.toggleLoadingAcc(false);
          return false;
        }
        localStorage.setItem('token', data.token);
        this.props.setUserData({
          userNiceName: data.user_nicename,
          userEmail: data.user_email,
          token: data.token
        });
        const token = localStorage.getItem('token');
        const myHeaders = {
          headers: { 'Authorization': `Bearer ${token}` }
        }
        axios.get(`http://proview.loc/wp-json/wp/v2/users/me`, myHeaders)
          .then(response => {
            this.props.setUserData({
              loggetIn: true,
              userId: response.data.id,
              firstname: response.data.pro_firstname,
              lastname: response.data.pro_lastname,
              avatar: response.data.avatar,
              favoritesExperts: (response.data.pro_favorites_experts.length > 0)? JSON.parse(response.data.pro_favorites_experts): [],
              favoritesVideos: (response.data.pro_favorites_video.length > 0)? JSON.parse(response.data.pro_favorites_video): [],
              favoritesEvents: (response.data.pro_favorites_events.length > 0)? JSON.parse(response.data.pro_favorites_events): [],          
              loadingAcc: false,
            });
          });      
      })
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
  { toggleLoadingAcc, setUserData, updateUserData, getError }
)(LoginContainer);
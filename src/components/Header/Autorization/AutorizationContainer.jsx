import React from 'react';
import Autorization from './Autorization';
import { setUserData, toggleisLoading } from '../../../redux/auth-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios';

class AutorizationContainer extends React.Component {

  componentDidMount() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const myHeaders = {
        headers: { 'Authorization': `Bearer ${token}` }
      }
      this.props.toggleisLoading(true);
      axios.get(`http://proview.loc/wp-json/wp/v2/users/me`, myHeaders)
        .then(response => {
          this.props.toggleisLoading(false);
          this.props.setUserData({
            loggetIn: true,
            userId: response.data.id,
            firstname: response.data.pro_firstname,
            lastname: response.data.pro_lastname,
            avatar: response.data.avatar,
          });
        });
    }
  }

  render() {
    return (
      <Autorization
        loggetIn={this.props.loggetIn}
        firstname={this.props.firstname}
        lastname={this.props.lastname}
        avatar={this.props.avatar}
        isLoading={this.props.isLoading}
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
    isLoading: state.auth.isLoading,
  }
}

export default connect(mapStateToProps, { setUserData, toggleisLoading })(AutorizationContainer);
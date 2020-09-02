import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { setUserProfile, addFavorives, removeFavorites } from '../../redux/profile-reducer';
import { setUserData, toggleisLoading } from '../../redux/auth-reducer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';

class ProfileContainer extends React.Component {

  componentDidMount() {
    const token = localStorage.getItem('token');
    let userId = this.props.match.params.userId;
    
    if (token &&  userId == 'me') {                  
      const myHeaders = {
        headers: { 'Authorization': `Bearer ${token}`}
      }
      this.props.toggleisLoading(true);
      axios.get(`http://proview.loc/wp-json/wp/v2/users/${userId}`, myHeaders)
        .then(response => {
          this.props.toggleisLoading(false);
          this.props.setUserProfile(response.data);
          this.props.setUserData({
            loggetIn: true,
            userId: response.data.id,
            firstname: response.data.pro_firstname,
            lastname: response.data.pro_lastname,
            avatar: response.data.avatar,
          });
        });
    } else {
      this.props.toggleisLoading(true);
      axios.get(`http://proview.loc/wp-json/wp/v2/users?include=${userId}`)
        .then(response => {
          this.props.toggleisLoading(false);
          this.props.setUserProfile(response.data[0]);      
        });
    }
  }


  render() {
    return (
      <>
        {this.props.isLoading ? <Preloader /> : null}
        <Profile {...this.props} />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isLoading: state.auth.isLoading,
    firstname: state.auth.firstname,
    lastname: state.auth.lastname,
    avatar: state.auth.avatar,
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,
  { setUserProfile, addFavorives, removeFavorites, toggleisLoading, setUserData }
)(WithUrlDataContainerComponent);
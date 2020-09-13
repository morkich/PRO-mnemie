import React from 'react';
import Profile from './Profile';
import { getProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';


class ProfileContainer extends React.Component {

  componentDidMount() {    
    this.props.getProfile(this.props.match.params.userId);
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
    isLoading: state.profilePage.isLoading,
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,
  { getProfile }
)(WithUrlDataContainerComponent);
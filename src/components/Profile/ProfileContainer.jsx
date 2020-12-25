import React from 'react';
import Profile from './Profile';
import { getProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getProfileData, getProfileLoading } from '../../redux/profile-selectors';

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
    profile: getProfileData(state),
    isLoading: getProfileLoading(state)
  }
}

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
import React from 'react';
import { getProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Account from './Account';

class AccountContainer extends React.Component {

  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId, this.props.match.path);
  }

  render() {
    return (
      <>
        {this.props.isLoading ? <Preloader /> : null}
        <Account {...this.props} />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isLoading: state.profilePage.isLoading
  }
}

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter,
  withAuthRedirect
)(AccountContainer);
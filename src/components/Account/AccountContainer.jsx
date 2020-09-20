import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Account from './Account';
import { toggleisLoading } from '../../redux/profile-reducer';
import { setAccauntData } from '../../redux/auth-reducer';

class AccountContainer extends React.Component {

  componentDidMount() {
    this.props.toggleisLoading(false);
  }
  
  getInitialValues() {
    return {
      discription: this.props.profile.pro_discription,
      expirience: this.props.profile.pro_expirience,
      position: this.props.profile.pro_position,
      city: this.props.profile.pro_city,      
      workplace: this.props.profile.pro_workplace,      
    };
  }

  onFormSubmit = (formData) => {
    this.props.setAccauntData(formData);
  }

  render() {
    return (
      <>
        {this.props.isLoading ? <Preloader /> : null}
        <Account
          {...this.props}
          onFormSubmit={this.onFormSubmit}
          initialValues={this.getInitialValues()}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.auth,
    loadingAcc: state.auth.loadingAcc
  }
}

export default compose(
  connect(mapStateToProps, { toggleisLoading, setAccauntData }),
  withRouter,
  withAuthRedirect
)(AccountContainer);
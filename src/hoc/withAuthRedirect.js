import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => ({
  loggetIn: state.auth.loggetIn
})

export const withAuthRedirect = (Component) => {
  class AuthRedirectComponents extends React.Component {
    render() {
      if (!this.props.loggetIn && this.props.match.params.userId === 'me') return <Redirect noThrow to='/auth' />;
      return <Component {...this.props} />
    }
  } 

  let connectedAuthRedirectComponents = connect(mapStateToPropsForRedirect)(AuthRedirectComponents);
  return connectedAuthRedirectComponents;
}
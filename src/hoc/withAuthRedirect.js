import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getLoggetIn } from '../redux/auth-selectors';

let mapStateToPropsForRedirect = (state) => ({
  loggetIn: getLoggetIn(state)
})

export const withAuthRedirect = (Component) => {
  class AuthRedirectComponents extends React.Component {    
    render() {
      if (!this.props.loggetIn) return <Redirect noThrow to='/auth' />;
      return <Component {...this.props} />
    }
  } 

  let connectedAuthRedirectComponents = connect(mapStateToPropsForRedirect)(AuthRedirectComponents);
  return connectedAuthRedirectComponents;
}
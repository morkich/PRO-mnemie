import React from 'react';
import { connect } from 'react-redux';
import { loginThunk, setError } from '../../../redux/auth-reducer';
import { getLoadingAcc, getLoggetIn, getUserId } from '../../../redux/auth-selectors';
import Preloader from '../Preloader/Preloader';
import Login from './Login';

class LoginContainer extends React.Component {

  componentDidMount() {
  }

  onFormSubmit = (formData) => {
    this.props.loginThunk(formData.username, formData.password);
  };

  render() {
    return (
      <>
        {this.props.loadingAcc ? <Preloader /> : null}
        <Login
          onFormSubmit={this.onFormSubmit}
          loggetIn={this.props.loggetIn}
          loadingAcc={this.props.loadingAcc}
          userId={this.props.userId}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    loggetIn: getLoggetIn(state),
    loadingAcc: getLoadingAcc(state),
    userId: getUserId(state)
  }
}
export default connect(mapStateToProps,
  { loginThunk, setError }
)(LoginContainer);
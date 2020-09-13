import React from 'react';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  if (props.isLoading || localStorage.getItem('token')) {
    return <Redirect to={`/profile/me`} noThrow />
  } else {
    return (
      <div className="">
        <form onSubmit={props.onFormSubmit}>
          <input
            type="text"
            name="username"
            value={props.username}
            onChange={props.handleOnChange}
          />
          <input
            type="password"
            name="password"
            value={props.password}
            onChange={props.handleOnChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
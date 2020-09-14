import React from 'react';
import { Redirect } from 'react-router-dom';
import style from './Login.module.css';
import Title from '../Title/Title';

const Login = (props) => {
  if (props.isLoading || localStorage.getItem('token')) {
    return <Redirect to={`/account`} noThrow />
  } else {
    return (
      <div className={style.wrap}>
        <Title position="center" title="Вход"/>
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
          <button className="button" type="submit">Войти</button>
          <a href="">Регистрация</a>
        </form>
      </div>
    );
  }
}

export default Login;
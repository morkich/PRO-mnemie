import React from 'react';
import { Redirect } from 'react-router-dom';
import style from './Login.module.css';
import Title from '../Title/Title';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import Input from '../Forms/Input/Input';
import FormError from '../Forms/FormError/FormError';

const maxLength5 = maxLengthCreator(5);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Input}
        validate={[required]}
        name={'username'}
        placeholder={'Имя'}
      />
      <Field
        component={Input}
        type={'password'}
        validate={[required]}
        name={'password'}
        placeholder={'Пароль'}
      />
      {props.error && <FormError errorText={props.error}/>}      
      <button className="button" type="submit">Войти</button>
      <a href="">Регистрация</a>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  if (props.loggetIn) {
    return <Redirect to={`/account`} noThrow />
  } else {
    return (
      <div className={style.wrap}>
        <Title position="center" title="Вход" />
        <LoginReduxForm onSubmit={props.onFormSubmit} />
      </div>
    );
  }
}

export default Login;
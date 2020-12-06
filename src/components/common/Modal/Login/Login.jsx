import React from 'react';
import { Redirect } from 'react-router-dom';
import style from './Login.module.css';
import Title from '../../Title/Title';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../../utils/validators/validators';
import Input from '../../Forms/Input/Input';
import FormError from '../../Forms/FormError/FormError';
import InputPass from '../../Forms/InputPass/InputPass';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Input}
        validate={[required]}
        name={'username'}
        placeholder={'Почта'}
      />
      <Field
        component={InputPass}
        type={'password'}
        validate={[required]}
        name={'password'}
        placeholder={'Пароль'}
      />
      {props.error && <FormError errorText={props.error}/>}      
      <button className="button" type="submit">Войти</button>
      <button onClick={props.changeForm} className={style.link}>Регистрация</button>
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
        <LoginReduxForm 
          onSubmit={props.onFormSubmit} 
          changeForm={props.changeForm}
        />
      </div>
    );
  }
}

export default Login;
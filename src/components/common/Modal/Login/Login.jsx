import React from 'react';
import { Redirect } from 'react-router-dom';
import style from './Login.module.css';
import Title from '../../Title/Title';
import Input from '../../Forms/Input/Input';
import { Field, Formik } from 'formik';
import InputPass from '../../Forms/InputPass/InputPass';


const LoginForm = (props) => {

  const loginFormValidate = (values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Это поле обязательное!';
    }
    if (!values.password) {
      errors.password = 'Это поле обязательное!';
    }
    return errors;
  });  

  const submitForm = (values, { setSubmitting }) => {    
    props.onFormSubmit(values);
    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validate={loginFormValidate}
      onSubmit={submitForm}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Field
            component={Input}
            type={'text'}
            name={'username'}
            placeholder={'Почта'}
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
          />
          <Field
            component={InputPass}
            type={'password'}
            name={'password'}
            placeholder={'Пароль'}
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
          />
          <button className="button" type="submit" disabled={isSubmitting}>Войти</button>
          <a onClick={props.changeForm} className={style.link}>Регистрация</a>
        </form>
      )}
    </Formik>
  );
}

const Login = (props) => {
  if (props.loggetIn) {
    return <Redirect to={`/account`} noThrow />
  } else {
    return (
      <div className={style.wrap}>
        <Title position="center" title="Вход" />
        <LoginForm 
          onFormSubmit={props.onFormSubmit} 
          changeForm={props.changeForm}
        />
      </div>
    );
  }
}

export default Login;
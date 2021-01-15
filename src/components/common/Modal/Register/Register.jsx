import React from 'react';
import { Redirect } from 'react-router-dom';
import style from './Register.module.css';
import Title from '../../Title/Title';
import Input from '../../Forms/Input/Input';
import FormError from '../../Forms/FormError/FormError';
import InputPass from '../../Forms/InputPass/InputPass';
import CheckBox from '../../Forms/CheckBox/CheckBox';
import { Field, withFormik } from 'formik';

const RegisterForm = (props) => {

  console.log(props);

  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Input}        
        name={'username'}
        placeholder={'Имя'}
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}   
      />
      <Field
        component={InputPass}
        type={'password'}        
        name={'password_main'}
        placeholder={'Пароль'}
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}  
      />
      <Field
        component={InputPass}
        type={'password'}
        name={'password_check'}
        placeholder={'Повторите пароль'}
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}   
      />     
      <Field
        component={Input}
        type={'email'}        
        name={'email'}
        placeholder={'Электронная почта'}
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}   
      />         
      <Field
        component={CheckBox}       
        id={'personal_check'} 
        name={'personal_check'}
        label={'Я согласен с обработкой моих персональных данных соответствии с Федеральным законом РФ “О персональных данных № 152”, пользовательским соглашением и лицензионным договором'}
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}   
      />     
      <Field
        component={CheckBox}  
        id={'subscribe'}       
        name={'subscribe'}
        placeholder={'Повторите пароль'}
        label={'Я согласен на получение информационной рассылки от PROмнение '}
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}   
      />           
      {props.requestError && <FormError errorText={props.requestError}/>}      
      <button className="button" type="submit">Зарегистрироваться</button>
      <a onClick={props.changeForm} className={style.link}>Войти</a>
    </form>
  );
}

const Register = (props) => {
  if (props.loggetIn) {
    return <Redirect to={`/account`} noThrow />
  } else {
    return (
      <div className={style.wrap}>
        <Title position="center" title="Регистрация" />
        <RegisterFormSettings 
          onSubmit={props.onFormSubmit} 
          changeForm={props.changeForm}
          onChange={props.onChange}
          checkPass={props.checkPass}
          requestError={props.requestError}
        />
      </div>
    );
  }
}

const RegisterFormSettings = withFormik({
  mapPropsToValues: () => ({ 
    username: '', 
    password_main: '',
    password_check: '',
    email: '',
    personal_check: [],
    subscribe: false
  }),
  validate: values => {      
    const errors = {};
    if (!values.username) {
      errors.username = '!Это поле обязательно';
    }    
    if (!values.password_main) {
      errors.password_main = '!Это поле обязательно';
    }    
    if (!values.password_check) {
      errors.password_check = '!Это поле обязательно';      
    }    
    if (values.password_check !== values.password_main) {
      errors.password_check = '!Пароли должны совпадать';      
    }
    if (!values.email) {
      errors.email = '!Это поле обязательно';
    }    
    if (!values.personal_check) {
      errors.personal_check = '!Это поле обязательно';
    }    
    return errors;
  },
  handleSubmit: (values, { props, ...actions }) => {    
    props.onSubmit(values)    
  },
  displayName: 'RegisterForm',
})(RegisterForm);

export default Register;
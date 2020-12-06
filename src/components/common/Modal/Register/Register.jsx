import React from 'react';
import { Redirect } from 'react-router-dom';
import style from './Register.module.css';
import Title from '../../Title/Title';
import { Field, reduxForm } from 'redux-form';
import { checkPassTwins, required } from '../../../../utils/validators/validators';
import Input from '../../Forms/Input/Input';
import FormError from '../../Forms/FormError/FormError';
import InputPass from '../../Forms/InputPass/InputPass';
import CheckBox from '../../Forms/CheckBox/CheckBox';

const RegisterForm = (props) => {
  const checkPass = checkPassTwins(props.checkPass);
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Input}
        validate={[required]}
        name={'username'}
        placeholder={'Имя'}
      />
      <Field
        component={InputPass}
        type={'password'}
        validate={[required]}
        name={'password'}
        placeholder={'Пароль'}
        onChange={props.onChange}
      />
      <Field
        component={InputPass}
        type={'password'}
        validate={[required, checkPass]}
        name={'password_check'}
        placeholder={'Повторите пароль'}
      />     
      <Field
        component={Input}
        type={'email'}
        validate={[required]}
        name={'email'}
        placeholder={'Электронная почта'}
      />         
      <Field
        component={CheckBox}
        validate={[required]}
        name={'personal_check'}
        label={'Я согласен с обработкой моих персональных данных соответствии с Федеральным законом РФ “О персональных данных № 152”, пользовательским соглашением и лицензионным договором'}
      />     
      <Field
        component={CheckBox}        
        name={'subscribe'}
        placeholder={'Повторите пароль'}
        label={'Я согласен на получение информационной рассылки от PROмнение '}
      />           
      {props.error && <FormError errorText={props.error}/>}      
      <button className="button" type="submit">Зарегистрироваться</button>
      <button onClick={props.changeForm} className={style.link}>Войти</button>
    </form>
  );
}

const RegisterReduxForm = reduxForm({
  form: 'register',
})(RegisterForm);

const Register = (props) => {
  if (props.loggetIn) {
    return <Redirect to={`/account`} noThrow />
  } else {
    return (
      <div className={style.wrap}>
        <Title position="center" title="Регистрация" />
        <RegisterReduxForm 
          onSubmit={props.onFormSubmit} 
          changeForm={props.changeForm}
          onChange={props.onChange}
          checkPass={props.checkPass}
        />
      </div>
    );
  }
}

export default Register;
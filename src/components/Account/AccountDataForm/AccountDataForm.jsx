import React from 'react';
import TextArea from '../../common/Forms/TextArea/TextArea';
import UserTags from '../UserTags/UserTags';
import style from '../../common/Forms/Forms.module.css';
import { Field, reduxForm } from 'redux-form';
import { dataListHardCode, maxLengthCreator, required } from '../../../utils/validators/validators';
import Input from '../../common/Forms/Input/Input';
import InputList from '../../common/Forms/InputList/InputList';
import { cities } from '../../../utils/data/cities';

const maxLength5 = maxLengthCreator(5);
const citiesName = cities();
const dataList = dataListHardCode(citiesName.names);

const AccountDataForm = (props) => {
  return (
    <form className={style.account_form} onSubmit={props.handleSubmit}>
      <label className={style.label} htmlFor="city">Город</label>      
      <Field
        component={InputList}
        datalist={citiesName.names}
        validate={[dataList]}
        name={'city'}
        id={'city'}             
      />
      <label className={style.label} htmlFor="position">Должность</label>   
      <Field
        component={Input}
        name={'position'}       
        id={'position'}             
      />
      <label className={style.label} htmlFor="workplace">Место работы</label>         
      <Field
        component={Input}
        name={'workplace'}   
        id={'workplace'}             
      />
      <label className={style.label} htmlFor="expirience">Опыт</label>    
      <Field
        component={TextArea}
        validate={[required]}
        placeholder='Напишите о себе'
        name={'expirience'}
        id={'expirience'}
      />
      <label className={style.label} htmlFor="user_tags">Хештеги</label>    
      <UserTags 
        name={'user_tags'} 
        id={'user_tags'} 
      />
      <label className={style.label} htmlFor="discription">О себе</label>          
      <Field
        component={TextArea}
        placeholder='Напишите о своём опыте'
        name={'discription'}
        id={'discription'}
      />
      <div className={style.buttons_account_form}>
        <button className={`button`}>Сохранить</button>
        <a className={`button button--grey`}>Отмена</a>
      </div>  
        
    </form>
  )
}

const AccountDataReduxForm = reduxForm({
  form: 'account-data'
})(AccountDataForm)

export default AccountDataReduxForm;
import React from 'react';
import TextArea from '../../common/Forms/TextArea/TextArea';
import UserTags from '../UserTags/UserTags';
import style from '../../common/Forms/Forms.module.css';
import Input from '../../common/Forms/Input/Input';
import InputList from '../../common/Forms/InputList/InputList';
import { cities } from '../../../utils/data/cities';
import { Field, Formik } from 'formik';

const citiesName = cities();

const AccountDataForm = (props) => {

  const accountFormValidate = (values => {
    const errors = {};
    if (!values.city) {      
      errors.city = 'Это поле обязательное!';
    } else {
      let goal = citiesName.names.some(itemValue => itemValue === values.city);
      if (!goal) errors.city = `Уточните город`;
    }
    return errors;
  }); 

  const submitForm = (values, { setSubmitting }) => {    
    props.onSubmit(values)
    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={{ 
        city: props.accountFormData.city, 
        position: props.accountFormData.position,
        workplace: props.accountFormData.workplace,
        expirience: props.accountFormData.expirience,
        user_tags: '',
        discription: props.accountFormData.discription,
      }}
      validate={accountFormValidate}
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
        <form className={style.account_form} onSubmit={handleSubmit}>
          <label className={style.label} htmlFor="city">Город</label>      
           <Field
            component={InputList}
            datalist={citiesName.names}
            name={'city'}
            id={'city'}             
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}      
          />
          <label className={style.label} htmlFor="position">Должность</label>   
          <Field
            component={Input}
            name={'position'}       
            id={'position'} 
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}            
          />
          <label className={style.label} htmlFor="workplace">Место работы</label>         
          <Field
            component={Input}
            name={'workplace'}   
            id={'workplace'}  
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}               
          />
          <label className={style.label} htmlFor="expirience">Опыт</label>    
          <Field
            component={TextArea}
            placeholder='Напишите о себе'
            name={'expirience'}
            id={'expirience'}
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}  
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
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}  
          />
          <div className={style.buttons_account_form}>
            <button className={`button`}>Сохранить</button>
            <a href="/" className={`button button--grey`}>Отмена</a>
          </div>  
        </form>
      )}
    </Formik>        
  )
}

export default AccountDataForm;
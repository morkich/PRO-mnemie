import React from 'react';
import style from './AddNewEvent.module.css';
import FormError from '../../common/Forms/FormError/FormError';
import Preloader from '../../common/Preloader/Preloader';
import Input from '../../common/Forms/Input/Input';
import DatePickerWrap from '../../common/Forms/DatePickerWrap/DatePickerWrap';
import SelectCon from '../../common/Forms/SelectCon/SelectCon';
import MultiTextArea from '../../common/Forms/MultiTextArea/MultiTextArea';
import Watermark from '../../common/Watermark/Watermark';
import InputTitle from '../../common/Forms/InputTitle/InputTitle';
import CheckBox from '../../common/Forms/CheckBox/CheckBox';
import { Field, withFormik } from 'formik';

const AddNewEventForm = (props) => {  

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
    <form onSubmit={props.handleSubmit} className={style.form}>
      {props.addVacancyLoading ? <Preloader /> : null}
      <Field
        component={InputTitle}
        name={'eventTitle'}
        placeholder={'Название События'}
        title={'Название События'}
        setTitle={'Название События'}     
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}      
      /> 
      <div className={style.formBlock}>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="paymentBefore">Дата:</label>  
          <div className={style.inputGroup}>
            <Field
              component={DatePickerWrap}
              name={'eventDate'}
              id={'eventDate'}
              onChange={handleChange}
              onBlur={handleBlur}
              values={values}
              errors={errors}
              touched={touched}   
            /> 
          </div>        
        </div>   
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="companyName">Название компнии:</label>          
            <Field
              component={Input}
              placeholder={''}
              name={'companyName'}
              type={'text'}
              id={'companyName'}            
              onChange={handleChange}
              onBlur={handleBlur}
              values={values}
              errors={errors}
              touched={touched}   
            />         
        </div>            
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="city">Город:</label>          
          {/* <Field
            component={InputList}
            // datalist={citiesName.names}
            // validate={[required, dataList]}
            name={'city'}
            id={'city'}             
          />        */}
        </div>    
      </div>
      <div className={style.formBlock}>
        <h4 className={style.formBlockTitle}>Требования к кандидату</h4>

        <div className={style.formGroup}>
          <label className={style.label} htmlFor="experience">Опыт работы:</label>          
          <Field
            component={Input}
            placeholder={''}
            name={'experience'}
            type={'text'}
            id={'experience'} 
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}              
          />       
        </div>   

        <div className={style.formGroup}>
          <label className={style.label} htmlFor="study">Образование:</label>          
          <Field
            component={SelectCon}
            placeholder={'Выбрать'}
            options={[{value: 1, label: 2}, {value: 1, label: 2}]} 
            name={'study'}
            type={'text'}
            id={'study'}    
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}           
          />       
        </div>  
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="requirement">Требования:</label>          
          <Field
            component={MultiTextArea}
            name={'requirementCount'}
            nameFunctions={'requirement'}
            id={'requirementCount'}    
            addLinkText={'Добавить еще требование'}       
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}    
          />       
        </div>  
      </div>

      <div className={style.formBlock}>
        <h4 className={style.formBlockTitle}>Специальность:</h4>

        <div className={style.formGroup}>
          <label className={style.label} htmlFor="worktime">График</label>          
          <Field
            component={Input}
            placeholder={''}
            name={'worktime'}
            type={'text'}
            id={'worktime'}      
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}         
          />       
        </div>   

        <div className={style.formGroup}>
          <label className={style.label} htmlFor="function">Обязанности:</label>          
          <Field
            component={MultiTextArea}
            name={'functionsCount'}
            nameFunctions={'functions'}
            id={'functionsCount'}    
            placeholder={'Вводите обязанности по одной'}
            addLinkText={'Добавить еще обязанности'}     
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}      
          />        
        </div>  
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="conditions">Условия:</label>          
          <Field
            component={MultiTextArea}
            name={'conditionsCount'}
            nameFunctions={'conditions'}
            id={'conditionsCount'}    
            placeholder={'Вводите условия по одному '}
            addLinkText={'Добавить еще условия'}        
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}   
          />       
        </div>  
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="workPlace">Место работы:</label>          
          <Field
            component={Input}
            placeholder={'Укажите адрес компании'}
            name={'workPlace'}            
            type={'text'}
            id={'workPlace'}   
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}            
          />       
        </div>          
      </div>
      {props.error && <FormError errorText={props.error}/>}      
      <div className={style.formGroup}>
        <div className={style.inputGroup}>
          <button className="button" disabled={props.addVacancyLoading} type="submit">{props.postLoading ? <Preloader />: null}
            {props.itemId ? 'Редактировать': 'Опубликовать'}
          </button>
          <a hreaf='' onClick={() => window.history.back()} className="link">Назад</a>
        </div>
        <Field
          component={CheckBox}
          name={'allVision'}
          label={'Сделать вакансию видимой для всех зарегитрированных пользователей'}
          onChange={handleChange}
          onBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}   
        />           
      </div>
    </form>
  );
}


const AddNewEvent = (props) => {
  return (
    <section className="container container--small">      
      {props.addVacancyLoading ? <Preloader /> : null}
      <div className={style.wrap}>      
        <header className={style.header}>
          <Watermark main={true} />
        </header>
        <body>
          <AddNewEventFormSettings 
            userId={props.userId}
            itemId={props.itemId}
            onSubmit={props.onSubmit} 
            addVacancyLoading={props.addVacancyLoading}
            initialValues={props.initialValues}
          />        
        </body>
      </div>
    </section>

  );
}

const AddNewEventFormSettings = withFormik({  
  mapPropsToValues: (props) => ({ 
      eventTitle: '!props.userId ? props.postTitle :', 
      eventDate: '!props.userId ? props.postVideo :',
      companyName: '!props.userId ? props.postImage :',
      experience: '!props.userId ? props.postContent.replace(/<\/?[^>]+(>|$)/g, ""):',
      study: `!props.userId ? props.postTags : ''`,
      requirementCount: `!props.userId ? props.postVideoId[2] : ''`,
      worktime: `!props.userId ? props.postVideoId[2] : ''`,
      functionsCount: `!props.userId ? props.postVideoId[2] : ''`,
      conditionsCount: `!props.userId ? props.postVideoId[2] : ''`,
      workPlace: `!props.userId ? props.postVideoId[2] : ''`,
      allVision: `!props.userId ? props.postVideoId[2] : ''`,
    }),
  validate: (props) => {
      console.log(props);
    },
  handleSubmit: (values, { props, ...actions }) => {
    console.log(values);
      // props.onSubmit(values)
    },
  displayName: 'AddNewEvent',
  enableReinitialize: true
})(AddNewEventForm);

export default AddNewEvent;
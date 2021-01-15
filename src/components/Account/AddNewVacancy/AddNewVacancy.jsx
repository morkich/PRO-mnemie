import React from 'react';
import style from './AddNewVacancy.module.css';
import { Field, reduxForm } from 'redux-form';
import FormError from '../../common/Forms/FormError/FormError';
import { required, onlyNumbers, dataListHardCode } from '../../../utils/validators/validators';
import Preloader from '../../common/Preloader/Preloader';
import InputIcon from '../../common/Forms/InputIcon/InputIcon';
import Input from '../../common/Forms/Input/Input';
import InputList from '../../common/Forms/InputList/InputList';
import { cities } from '../../../utils/data/cities';
import SelectCon from '../../common/Forms/SelectCon/SelectCon';
import MultiTextArea from '../../common/Forms/MultiTextArea/MultiTextArea';
import Watermark from '../../common/Watermark/Watermark';
import InputTitle from '../../common/Forms/InputTitle/InputTitle';
import CheckBox from '../../common/Forms/CheckBox/CheckBox';

const citiesName = cities();
const dataList = dataListHardCode(citiesName.names);

const AddNewVacancyForm = (props) => {  
  return (
    <form onSubmit={props.handleSubmit} className={style.form}>
      {props.addVacancyLoading ? <Preloader /> : null}
      <Field
        component={InputTitle}
        validate={[required]}
        name={'postTitle'}
        placeholder={'Название вакансии'}
        title={'Название вакансии'}
        setTitle={'Название вакансии'}        
      /> 
      <div className={style.formBlock}>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="paymentBefore">Зарплата:</label>  
          <div className={style.inputGroup}>
            <Field
              component={InputIcon}
              validate={[required, onlyNumbers]}
              placeholder={'От'}
              name={'paymentBefore'}
              type={'number'}
              id={'paymentBefore'}
              icon={'rub'}
            /> 
            <Field
              component={InputIcon}
              validate={[required, onlyNumbers]}
              placeholder={'До'}
              name={'paymentAfter'}
              type={'number'}
              id={'paymentAfter'}
              icon={'rub'}
            />         
          </div>        
        </div>   
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="companyName">Название компнии:</label>          
            <Field
              component={Input}
              validate={[required]}
              placeholder={''}
              name={'companyName'}
              type={'text'}
              id={'companyName'}            
            />         
        </div>            
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="city">Город:</label>          
          <Field
            component={InputList}
            datalist={citiesName.names}
            validate={[required, dataList]}
            name={'city'}
            id={'city'}             
          />       
        </div>    
      </div>
      <div className={style.formBlock}>
        <h4 className={style.formBlockTitle}>Требования к кандидату</h4>

        <div className={style.formGroup}>
          <label className={style.label} htmlFor="experience">Опыт работы:</label>          
          <Field
            component={Input}
            validate={[required]}
            placeholder={''}
            name={'experience'}
            type={'text'}
            id={'experience'}            
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
          />       
        </div>  
      </div>

      <div className={style.formBlock}>
        <h4 className={style.formBlockTitle}>Специальность:</h4>

        <div className={style.formGroup}>
          <label className={style.label} htmlFor="worktime">График</label>          
          <Field
            component={Input}
            validate={[required]}
            placeholder={''}
            name={'worktime'}
            type={'text'}
            id={'worktime'}            
          />       
        </div>   

        <div className={style.formGroup}>
          <label className={style.label} htmlFor="function">Обязанности:</label>          
          <Field
            component={MultiTextArea}
            // validate={[required]}
            name={'functionsCount'}
            nameFunctions={'functions'}
            id={'functionsCount'}    
            placeholder={'Вводите обязанности по одной'}
            addLinkText={'Добавить еще обязанности'}        
          />        
        </div>  
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="conditions">Условия:</label>          
          <Field
            component={MultiTextArea}
            // validate={[required]}
            name={'conditionsCount'}
            nameFunctions={'conditions'}
            id={'conditionsCount'}    
            placeholder={'Вводите условия по одному '}
            addLinkText={'Добавить еще условия'}        
          />       
        </div>  
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="workPlace">Место работы:</label>          
          <Field
            component={Input}
            validate={[required]}
            placeholder={'Укажите адрес компании'}
            name={'workPlace'}            
            type={'text'}
            id={'workPlace'}            
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
          validate={[required]}
          name={'allVision'}
          label={'Сделать вакансию видимой для всех зарегитрированных пользователей'}
        />           
      </div>
    </form>
  );
}

const AddNewVacancyReduxForm = reduxForm({
  form: 'addNewVacancy',
  enableReinitialize: true
})(AddNewVacancyForm);

const AddNewVacancy = (props) => {
  return (
    <section className="container container--small">      
      {props.addVacancyLoading ? <Preloader /> : null}
      <div className={style.wrap}>      
        <header className={style.header}>
          <Watermark main={true} />
        </header>
        <body>
          <AddNewVacancyReduxForm 
            userId={props.userId}
            itemId={props.itemId}
            onSubmit={props.onSubmit} 
            // onChange={props.onChange}
            // changeForm={props.changeForm}
            // onChange={props.onChange}
            // checkPass={props.checkPass}
            // postTitle={props.postTitle}
            // postCategorys={props.postCategorys}
            // postCategoryName={props.postCategoryName}
            // postImage={props.postImage}
            // postContent={props.postContent}
            // postTags={props.postTags}
            // postLoading={props.postLoading}    
            // setTitle={props.setTitle}      
            addVacancyLoading={props.addVacancyLoading}
            initialValues={props.initialValues}
          />        
        </body>
      </div>
    </section>

  );
}

export default AddNewVacancy;
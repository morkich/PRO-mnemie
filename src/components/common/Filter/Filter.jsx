import React from 'react';
import Input from '../Forms/Input/Input';
import InputList from '../Forms/InputList/InputList';
import style from './Filter.module.css';
import { cities } from '../../../utils/data/cities';
import { Field, Formik } from 'formik';
import { dataListHardCode } from '../../../utils/validators/validators';

const citiesName = cities();
const validateCity = dataListHardCode(citiesName.names);

const FilterForm = (props) => {  
  const accountFormValidate = (values => {
    const errors = {};
    if (values.filter_city) {
      errors.filter_city = validateCity(values.filter_city);
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
        filter_name:'', 
        filter_city: '',
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
        <form onSubmit={handleSubmit} className={style.filter}>
          <Field
            component={Input}  
            name={"filter_name"}
            placeholder={'Ключевое слово'}
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}    
          />
          <Field
            component={InputList}
            datalist={props.uniqCities}
            placeholder={'Город'}
            name={'filter_city'}
            id={'filter_city'}    
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}             
          />      
          <button className="button">Найти</button>
        </form>
      )}
    </Formik>
  );
}

export default FilterForm; 
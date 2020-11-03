import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { dataListHardCode } from '../../../utils/validators/validators';
import Input from '../Forms/Input/Input';
import InputList from '../Forms/InputList/InputList';
import style from './Filter.module.css';
import { cities } from '../../../utils/data/cities';

const dataList = dataListHardCode(cities().names);

const Filter = (props) => {   
  return (
    <form onSubmit={props.handleSubmit} className={style.filter}>
      <Field
        component={Input}  
        name={"filter_name"}
        placeholder={'Ключевое слово'}
      />
      <Field
        component={InputList}
        datalist={props.uniqCities}
        validate={[dataList]}
        placeholder={'Город'}
        name={'filter_city'}
        id={'filter_city'}             
      />      
      <button className="button">Найти</button>
    </form>
  );
}

const FilterReduxForm = reduxForm({
  form: 'filter',
})(Filter);


export default FilterReduxForm; 
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const CategorySelect = (props) => {

  console.log(props);

  const styles = {
    option: (provided, state) => ({
      ...provided,
      color: '#7C9BA9',
      padding: '5px 10px',
      fontSize: '1.3rem'
    }),
    control: () => ({
      display: 'flex',
      width: 320,
      border: '1px solid #AECAD5',
      backgroung: '#fff',
      borderRadius: '2px',
      fontSize: '1.3rem',
      padding: '0 10px'
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
  }

  const [statusValue, setStatusValue] = useState('');
  const handleStatusChange = event => {
      setStatusValue(event.value);
      props.form.values.postCategory = event.value;
  }

  const getDefaultvalue = (options, defaultID) => {
    let result = options.filter( option => option.value === defaultID)
    return result[0];
  }

  
  return (   
    <Select 
      placeholder={"Категория"}
      options={props.options} 
      styles={styles}
      name={props.name}
      onChange={handleStatusChange} 
      value={props.options.find(option => option.value === statusValue)}
      defaultValue={getDefaultvalue(props.options, props.field.value)}
      errors={props.errors}
      touched={props.touched}
    />
  )
}

export default CategorySelect;
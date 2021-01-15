import React from 'react';
import Select from 'react-select';
import style from '../Forms.module.css';

const SelectCon = (props) => {

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

  const hasError = props.touched[props.field.name] && props.errors[props.field.name];
  return (    
    <div className={`${style.formControl} ${hasError && style.error}`}>
      <Select
        placeholder={props.placeholder}
        options={props.options} 
        styles={styles}
        name={props.field.name}
        defaultValue={props.options}
      />
      {hasError && <span>{hasError}</span>}
    </div>
  )
}

export default SelectCon
import React, { useState } from 'react';
import style from '../Forms.module.css';
import Select from 'react-select';

const CategorySelect = (props) => {

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

  return (   
    <Select 
      placeholder={"Категория"}
      options={props.options} 
      styles={styles}
      name={props.name}
      onChange={props.onChange}
      onKeyDown={props.keyDown}
      defaultValue={props.defaultValue}
    />
  )
}

export default CategorySelect;
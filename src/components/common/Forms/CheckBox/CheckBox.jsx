import React from 'react';
import style from '../Forms.module.css';

const CheckBox = (props) => {
  
  const hasError = props.touched[props.field.name] && props.errors[props.field.name];


  
  
  return (    
    <div className={`${style.formControl} ${hasError && style.error}`}>
      <div className={style.checkBoxWrap}>
        <input
          name={props.name}
          id={props.name}
          type={'checkbox'}
          className={`${style.input} ${style.inputCheckBox}`}
          onChange={props.onChange}
          onBlur={props.onBlur}                
          value={props.field[props.field.name]}
        />
        <label htmlFor={props.name}>{props.label}</label>
      </div>      
      {hasError && <span>{hasError}</span>}
    </div>
  )
}

export default CheckBox
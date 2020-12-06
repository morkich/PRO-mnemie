import React from 'react';
import style from '../Forms.module.css';

const CheckBox = (props) => {
  
  const hasError = props.meta.touched && props.meta.error;
  return (    
    <div className={`${style.formControl} ${hasError && style.error}`}>
      <div className={style.checkBoxWrap}>
        <input
          {...props.input}
          name={props.input.name}
          id={props.input.name}
          type={'checkbox'}
          className={`${style.input} ${style.inputCheckBox}`}
        />
        <label htmlFor={props.input.name}>{props.label}</label>
      </div>      
      {hasError && <span>{props.meta.error}</span>}
    </div>
  )
}

export default CheckBox
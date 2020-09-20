import React from 'react';
import style from '../Forms.module.css';

const Input = (props) => {
  const hasError = props.meta.touched && props.meta.error;
  return (    
    <div className={`${style.formControl} ${hasError && style.error}`}>
      <input
        {...props.input}
        name={props.input.name}
        placeholder={props.placeholder}
        type={props.type}
        className={style.input}
      />
      {hasError && <span>{props.meta.error}</span>}
    </div>
  )
}

export default Input
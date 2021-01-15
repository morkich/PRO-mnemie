import React from 'react';
import style from '../Forms.module.css';

const InputIcon = (props) => { 

  let styleIcon = props.icon === 'rub' ? style.iconRub : null;

  const hasError = props.meta.touched && props.meta.error;
  return (
    <div className={`${style.formControl} ${hasError && style.error} ${styleIcon}`}>
      <input
        {...props.input}
        type={props.type}
        name={props.input.name}
        className={`${style.input} ${style.inputBefore}`}
        placeholder={props.placeholder}
        id={props.idOne}
      />
      {hasError && <span>{props.meta.error}</span>}
    </div>
  )
}

export default InputIcon;
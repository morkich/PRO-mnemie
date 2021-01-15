import React from 'react';
import style from '../Forms.module.css';

const Input = (props) => {

  const hasError = props.touched[props.field.name] && props.errors[props.field.name];

  return (    
    <div className={`${style.formControl} ${hasError && style.error}`}>    
      <input
        name={props.field.name}
        placeholder={props.placeholder}
        className={style.input}
        type={props.type}
        onChange={props.onChange}
        onBlur={props.onBlur}                
        value={props.values[props.field.name]}
      />
      {hasError && <span>{props.errors[props.field.name]}</span>}
    </div>
  )
}

export default Input
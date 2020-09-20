import React from 'react';
import style from '../Forms.module.css';

const FormError = (props) => {
  return (    
    <span className={style.form_error}>{props.errorText}</span>
  )
}

export default FormError
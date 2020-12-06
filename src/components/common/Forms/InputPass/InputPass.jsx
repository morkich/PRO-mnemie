import React, { useState } from 'react';
import Icon from '../../Icon/Icon';
import style from '../Forms.module.css';

const InputPass = (props) => {
  
  const hasError = props.meta.touched && props.meta.error;
  let [passVision, setPassVision] = useState(false);

  const showPassword = () => {
    setPassVision(!passVision);
  }  

  return (    
    <div className={`${style.formControl} ${hasError && style.error}`}>
      <input
        {...props.input}
        name={props.input.name}
        placeholder={props.placeholder}
        type={passVision ? 'text' : 'password'}
        className={`${style.input} ${style.inputPass}`}
      />
      <Icon style={passVision? 'eye' : 'noteye'} onClick={showPassword}/>
      {hasError && <span>{props.meta.error}</span>}
    </div>
  )
}

export default InputPass
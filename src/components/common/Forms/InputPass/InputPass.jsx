import React, { useState } from 'react';
import Icon from '../../Icon/Icon';
import style from '../Forms.module.css';

const InputPass = (props) => {

  const hasError = props.touched[props.field.name] && props.errors[props.field.name];
  let [passVision, setPassVision] = useState(false);

  const showPassword = () => {
    setPassVision(!passVision);
  }  

  return (    
    <div className={`${style.formControl} ${hasError && style.error}`}>
      <input
        name={props.field.name}
        placeholder={props.placeholder}
        type={passVision ? 'text' : 'password'}
        className={`${style.input} ${style.inputPass}`}
        onChange={props.onChange}
        onBlur={props.onBlur}                
        value={props.values[props.field.name]}
      />
      <Icon style={passVision ? 'eye' : 'noteye'} onClick={showPassword}/>
      {hasError && <span>{hasError}</span>}
    </div>
  )
}

export default InputPass
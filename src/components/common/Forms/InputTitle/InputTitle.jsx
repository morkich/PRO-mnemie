import React, { useState } from 'react';
import Title from '../../Title/Title';
import style from '../Forms.module.css';

const InputTitle = (props) => {
  let [editMode, setEditMode] = useState(false);
  const mouseLeave = (event) => {    
    props.setTitle(event);
    setEditMode(false);
  }  

  let input = editMode ? 
    <input  {...props.input}
      name={props.input.name}
      placeholder={props.placeholder}
      type={props.type}
      className={style.input}      
    /> : 
    <Title 
      title={props.input.value ? props.input.value : 'Заголовок'} 
      main={false} 
      uppercase={false}
    />;

  const hasError = props.meta.touched && props.meta.error;
  return (    
    <div onMouseEnter={() => setEditMode(true)} onMouseLeave={mouseLeave} className={`${style.formControl} ${hasError && style.error}`}>      
      {input}
      {hasError && <span>{props.meta.error}</span>}
    </div>
  )
}

export default InputTitle
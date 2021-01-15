import React, { useState } from 'react';
import Title from '../../Title/Title';
import style from '../Forms.module.css';

const InputTitle = (props) => {
  const hasError = props.errors[props.field.name];
  const title = props.values[props.field.name] ? props.values[props.field.name] : 'Заголовок';

  let [editMode, setEditMode] = useState(false);
  let input = editMode ? 
    <input
      name={props.field.name}
      id={props.field.name}
      placeholder={props.placeholder}
      type='text'
      className={style.input}      
      onChange={props.onChange}
      onBlur={props.onBlur}                            
      value={props.values[props.field.name]}
    /> : 
    <Title 
      title={title} 
      main={false} 
      uppercase={false}
    />;

  return (    
    <div 
      onMouseEnter={() => setEditMode(true)} 
      onBlur={() => setEditMode(false)} 
      className={`${style.formControl} ${hasError && style.error}`}
    >      
      {input}
      {hasError && <span>{props.meta.error}</span>}
    </div>
  )
}

export default InputTitle
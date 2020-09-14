import React from 'react';
import style from './TextArea.module.css';

const TextArea = (props) => {
  return (
    <textarea 
      name={props.name} 
      placeholder={props.placeholder} 
      value={props.value} 
      className={style.textarea}
    />      
  )
}

export default TextArea
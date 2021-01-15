import React, { useState } from 'react';
import style from '../Forms.module.css';

const TextArea = (props) => { 

  let startHeight = props.startHeight ? props.startHeight : 200,
  placeholder = props.placeholder ? props.placeholder : '';

  const [textAreaHeight, setTextAreaHeight] = useState(startHeight);
  const updateTextArea = (event) => setTextAreaHeight(event.target.scrollHeight);

  debugger;
  const hasError = props.touched[props.field.name] && props.errors[props.field.name];

  return (
    <div className={`${style.formControl} ${hasError && style.error}`}>
      <textarea
        name={props.field.name}
        placeholder={placeholder}
        className={style.textarea}        
        onFocus={updateTextArea}
        onChange={(event) => {
          props.onChange(event);          
          updateTextArea(event);
        }}
        data-count={props.dataCount}
        data-name={props.dataName}
        value={props.values[props.field.name]}        
        style={{ height: textAreaHeight }}        
      ></textarea>
      {hasError && <span>{hasError}</span>}
    </div>
  )
}

export default TextArea;
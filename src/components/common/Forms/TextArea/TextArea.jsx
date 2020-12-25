import React, { useEffect, useState } from 'react';
import style from '../Forms.module.css';

const TextArea = (props) => { 

  let startHeight = props.startHeight ? props.startHeight : 200;

  const [textAreaHeight, setTextAreaHeight] = useState(startHeight);
  const updateTextArea = (event) => setTextAreaHeight(event.target.scrollHeight);
  const hasError = props.meta.touched && props.meta.error;

  return (
    <div className={`${style.formControl} ${hasError && style.error}`}>
      <textarea
        {...props.input}
        onFocus={updateTextArea}
        onChange={(event) => {
          console.log(props.input.value);
          props.input.onChange(event);          
          updateTextArea(event);
        }}
        name={props.input.name}
        placeholder={props.placeholder}
        style={{ height: textAreaHeight }}
        className={style.textarea}
      ></textarea>
      {hasError && <span>{props.meta.error}</span>}
    </div>
  )
}

export default TextArea;
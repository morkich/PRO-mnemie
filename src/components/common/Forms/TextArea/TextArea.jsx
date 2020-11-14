import React, { useState } from 'react';
import style from '../Forms.module.css';

const TextArea = (props) => { 
  const [textAreaHeight, setTextAreaHeight] = useState(200);
  const updateTextArea = (e) => setTextAreaHeight(e.target.scrollHeight);
  const hasError = props.meta.touched && props.meta.error;

  return (
    <div className={`${style.formControl} ${hasError && style.error}`}>
      <textarea
        {...props.input}
        onFocus={updateTextArea}
        onChange={(e) => {
          props.input.onChange(e);
          updateTextArea(e);
        }}
        name={props.input.name}
        placeholder={props.placeholder}
        style={{ height: textAreaHeight }}
        className={style.textarea}
      />
      {hasError && <span>{props.meta.error}</span>}
    </div>
  )
}

export default TextArea;
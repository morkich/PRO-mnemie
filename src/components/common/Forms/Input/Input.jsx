import React from 'react';
import style from './Input.module.css';

const Input = (props) => {
  return (
    <input type="text" placeholder={props.placeholder} value={props.value} className={style.input}/>
  )
}

export default Input
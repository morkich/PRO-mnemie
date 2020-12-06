import React from 'react';
import style from './LoadingString.module.css';

let LoadingString = (props) => {
  return (
    <div className={style.wrap}>
      {/* <span>{props.title ? props.title : 'Загрузка...'}</span> */}
    </div>
  )
}

export default LoadingString;
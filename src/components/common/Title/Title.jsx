import React from 'react';
import style from './Title.module.css';

const Title = (props) => {
  return (
    <h1 className={style.title} style={{textAlign: props.position}}>{props.title}</h1>
  )
}

export default Title
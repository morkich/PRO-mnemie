import React from 'react';
import style from './Watermark.module.css';
import watermark from '../../../assets/img/watermark.svg';

let Watermark = () => {
  return (
    <img className={style.watermark} src={watermark} alt=""/>
  )
}

export default Watermark;



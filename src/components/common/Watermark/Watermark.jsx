import React from 'react';
import style from './Watermark.module.css';
import watermark from '../../../assets/img/watermark.svg';

let Watermark = (props) => {
  let watermark_style = props.main ? style.watermark_main : style.watermark; 
  if(props.vacancy){
    watermark_style = style.watermark_vacancy;
  }
  return (
    <img className={watermark_style} src={watermark} alt=""/>
  )
}

export default Watermark;



import React from 'react';
import style from './Preloader.module.css';
import preloader from '../../../assets/img/preloader.svg'

let Preloader = (props) => {
  return (
    <div className={style.wrap}>
      <img src={preloader} alt=""/>
    </div>
  )
}

export default Preloader;
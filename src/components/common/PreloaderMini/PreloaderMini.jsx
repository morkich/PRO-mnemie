import React from 'react';
import style from './PreloaderMini.module.css';
import preloader from '../../../assets/img/preloaderMini.svg'

let PreloaderMini = (props) => {
  return (
    <div className={style.wrap}>
      <img src={preloader} alt=""/>
    </div>
  )
}

export default PreloaderMini;
import React from 'react';
import style from './TopBanner.module.css';
import banner from '../../../assets/img/banners/banner.jpg';

const TopBanner = () => {
  return (    
    <a href='/' className={style.wrap}>
      <img src={banner} alt=""/>
    </a>
  );
}

export default TopBanner; 
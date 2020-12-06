import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../Aside.module.css';
import banner from '../../../../assets/img/banners/asideBanner.jpg';


const AsideBanners = (props) => {
  const link = props.link ? props.link : `/event/${props.id}`;
  return (
    <Link key={props.id} to={link}>
      <img src={banner} alt=""/>
    </Link>
  )
}

export default AsideBanners;
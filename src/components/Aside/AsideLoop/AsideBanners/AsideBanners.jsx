import React from 'react';
import { Link } from 'react-router-dom';
import Preloader from '../../../common/Preloader/Preloader';
import style from '../../Aside.module.css';

const AsideBanners = (props) => {    
  let itemsPack = props.asideBannerItems.map((item, i) => {
    return (
      <Link key={i} to={item.pro_banner_link}>
        {props.asideLoading ? <Preloader /> : null} 
        <img src={item.pro_banner_img} alt=""/>
      </Link>
    )
  })
  return (
    <aside>    
      <div className={style.wrap}>          
        {itemsPack}
      </div>
    </aside>
  )
}

export default AsideBanners;
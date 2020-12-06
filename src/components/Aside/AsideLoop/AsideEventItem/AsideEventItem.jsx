import React from 'react';
import { Link } from 'react-router-dom';
import DateBlock from '../../../common/DateBlock/DateBlock';
import Preloader from '../../../common/Preloader/Preloader';
import style from '../../Aside.module.css';

const AsideEventItem = (props) => {
  const link = props.link ? props.link : `/event/${props.id}`;
  return (
    <Link key={props.id} to={link} className={`${style.asideVacasyBlock} ${style.asideBlock} ${style.asideLine}`}>
      <h3 className={`${style.title} ${style.mb10}`}>
        <DateBlock 
          date={Date.parse(props.date)} 
          type={{display:'shortdate'}}
          style={{front:'medium'}}
        />
      </h3>
      <div className={style.description}><div dangerouslySetInnerHTML={{ __html: props.title }}></div></div>
      <div className={style.dataBlock}>
        <span className={style.backTextMedium}>{props.companyName}</span>
      </div>        
    </Link>
  )
}

export default AsideEventItem;
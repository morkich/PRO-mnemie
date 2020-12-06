import React from 'react';
import { NavLink } from 'react-router-dom';
import DateBlock from '../../../common/DateBlock/DateBlock';
import style from '../../Aside.module.css';

const AsideVacancyItem = (props) => {
  return (
    <NavLink key={props.id} to={`/vacancy/${props.id}`} className={`${style.asideVacasyBlock} ${style.asideBlock} ${style.asideLine}`}>
      <h3 className={style.title}>{props.title}</h3>
      <span className={style.price}>{props.price} ₽</span>
      <div className={style.description}><div dangerouslySetInnerHTML={{ __html: props.description }}></div></div>
      <div className={style.dataBlock}>
        <span className={style.backTextMedium}>{props.companyName}</span>
        <span className={style.backTextSmall}>
          <DateBlock 
            date={Date.parse(props.date)} 
            type={{display: 'fulldate'}}
            style={{front: 'small'}}
          />
        </span>          
      </div>        
    </NavLink>
  )
}

export default AsideVacancyItem;
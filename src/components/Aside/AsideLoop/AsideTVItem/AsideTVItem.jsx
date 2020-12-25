import React from 'react';
import { NavLink } from 'react-router-dom';
import DateBlock from '../../../common/DateBlock/DateBlock';
import InfoBlock from '../../../common/InfoBlock/InfoBlock';
import Preloader from '../../../common/Preloader/Preloader';
import style from '../../Aside.module.css';

const AsideTVItem = (props) => {
  return (
    <NavLink key={props.id} to={`/tv_video/${props.id}`} className={style.asideAsideBlock}>
      {props.asideLoading ? <Preloader /> : null}       
      <div className={style.img}>
        <div className={style.play}>
          <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.6175 14.9954L0.792591 28.3099L1.45518 0.605026L23.6175 14.9954Z" fill="white"/>
          </svg>
        </div>
        <img src={props.image} alt={props.title}/>
      </div>

      <div className={style.information}>
        <DateBlock 
          date={Date.parse(props.date)} 
          type={{display: 'fulldate'}}
          style={{front: 'small'}}
        />
        <InfoBlock 
          views={props.views}
          comment={props.comment} 
          darkTheme={true}
        />        
      </div>
      <div className={style.author}>{props.name}</div>
      <h3 className={`${style.title} ${style.mb10}`}>{props.title}</h3>
    </NavLink>
  )
}

export default AsideTVItem;
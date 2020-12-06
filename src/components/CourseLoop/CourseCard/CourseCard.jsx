import React from 'react';
import { Link } from 'react-router-dom';
import DateBlock from '../../common/DateBlock/DateBlock';
import style from './CourseCard.module.css';

const CourseCard = (props) => {  
  return (
    <li className={style.wrap} key={props.id}>
      <div className={style.img}>
        <img src={props.img} alt={props.title}/>
      </div>
      <div className={style.information}>
        <div className={style.date}>
          <DateBlock 
            type={{display: 'shortdate'}} 
            date={Date.parse(props.dateStart)} 
            style={{front: 'large'}}
          />
        </div>
        <div className={style.infoBlock}>
          <span className="infoString">{props.company}</span>
        </div>
        <h2 className={style.title}>{props.title}</h2>
        <Link className="button" to={`/event/${props.id}`}>Перейти на сайт</Link>
      </div>
    </li>
  )
}

export default CourseCard;
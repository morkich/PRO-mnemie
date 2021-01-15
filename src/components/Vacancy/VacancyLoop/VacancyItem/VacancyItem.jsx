import React from 'react';
import { Link } from 'react-router-dom';
import style from './VacancyItem.module.css'

const VacancyItem = (props) => {  
  return (          
    <li className={style.vacancyBlock}>                  
      <div className={style.vacancyTitleBlock}>
        <h3 className={style.vacancyTitle}>{props.title}</h3>  
        <span className={style.vacancyDescription}>{props.companyName}, {props.city}</span>
      </div>
      <div className={style.vacancyPrice}>{props.priceBefore}{props.priceAfter && ` - ${props.priceAfter}`} ₽</div>
      <div className={style.vacancyContent}>
        <div className={style.vacancyContentLine}>Требования: {JSON.parse(props.requires).map(item => <span>{item}</span>)}</div> 
        <div className={style.vacancyContentLine}>Обязанности: {JSON.parse(props.functions).map(item => <span>{item}</span>)}</div> 
        <div className={style.vacancyContentLine}>Условия: {JSON.parse(props.conditions).map(item => <span>{item}</span>)}</div> 
      </div>
      
      {props.edit 
        ? <Link to={`/edit/vacancy/${props.id}`} className={`button ${style.butbot}`}>Изменить</Link>
        : <Link to={`/vacancy/${props.id}`} className={`button ${style.butbot}`}>Подробнее</Link>
      }
    </li>
  )
}
export default VacancyItem;
import React from 'react';
import { NavLink } from 'react-router-dom';
import InfoBlock from '../InfoBlock/InfoBlock';
import style from './NewsCard.module.css';

const NewsCard = (props) => {  
    return (
      <li className={style.wrap} key={props.id}>
        <NavLink to={`/post/${props.id}`}>
          <img src={props.image} alt="" className={style.img}/>
          <div className={style.description}>
            <div className={style.dark_line}></div>
            <span className={style.light_text}>{props.category}</span>
            <h2 className={style.title}>{props.title.rendered}</h2>
            <InfoBlock 
              views={props.views}
              comment={props.comment} 
            />
          </div>
        </NavLink>        
      </li>
    );
}

export default NewsCard;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DateBlock from '../../common/DateBlock/DateBlock';
import FavoritesContainer from '../../common/Favorites/FavoritesContainer';
import style from './EventCard.module.css';

const EventCard = (props) => {  

  let [imageLoad, setImageLoad] = useState(false);
  let favoriteBlock = <FavoritesContainer expertId={props.id} darkTheme={true} type={'event'}/>



  return (
    <li className={style.wrap} key={props.id}>
      {!props.hideFavorite && favoriteBlock}
      <div className={`${style.img} ${!imageLoad && style.preloader}`}>
        <img src={props.img} alt={props.cleanTitle ? props.cleanTitle: props.title.rendered} onLoad={() => setImageLoad(true)}/>
      </div>
      <div className={style.information} style={props.button ? null : {padding: `20px 20px 30px 0`}}>
        <div className={style.date}>
          <DateBlock 
            type={{display: 'shortdate'}} 
            date={Date.parse(props.dateStart)} 
            style={{front:'large'}}
          />
        </div>
        <div className={style.infoBlock}>
          <span className="infoString">{props.type}</span>
          <span className="infoString">{props.company}</span>
          <span className="infoString">{props.city}</span>
        </div>
        <h2 className={style.title}>{props.cleanTitle ? props.cleanTitle : props.title}</h2>
        {props.button && <Link className="button" to={`/event/${props.id}`}>Я пойду</Link>}        
      </div>
    </li>
  )
}

export default EventCard;
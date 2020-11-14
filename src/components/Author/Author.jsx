import React from 'react';
import { NavLink } from 'react-router-dom';
import PreloaderMini from '../common/PreloaderMini/PreloaderMini';
import Raiting from '../Profile/Raiting/Raiting';
import style from './Author.module.css';

const Author = (props) => {
  return (
    <div className={style.author}>
      {props.loading ? <PreloaderMini />: null}
      <NavLink to={`/profile/${props.author.id}`}>
        <div className={style.avatar}>
          <img src={props.author.avatar} alt=""/>
        </div>
      </NavLink>
      <div className={style.info}>
        <span className={style.name}>{props.author.pro_lastname} {props.author.pro_firstname}</span>
        <span className={style.position}>{props.author.pro_position}</span>
        <Raiting 
          short={true}
          points={props.author.pro_raiting}
        />
      </div>
    </div>
  )
}

export default Author;
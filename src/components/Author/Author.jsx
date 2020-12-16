import React from 'react';
import { NavLink } from 'react-router-dom';
import PreloaderMini from '../common/PreloaderMini/PreloaderMini';
import Raiting from '../Profile/Raiting/Raiting';
import style from './Author.module.css';

const Author = (props) => {

  const fullBlock = <>
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
  </>

  const minimalBlock = <NavLink className={style.minimalName} to={`/profile/${props.author.id}`}>{props.author.pro_lastname} {props.author.pro_firstname}</NavLink>

  return (
    <div className={style.author}>
      {props.loading ? <PreloaderMini />: null}
      {props.minimal? minimalBlock: fullBlock}
    </div>
  )
}

export default Author;
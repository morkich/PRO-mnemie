import React from 'react';
import style from './Profile.module.css';
import FavoritesContainer from '../common/Favorites/FavoritesContainer';
import Raiting from './Raiting/Raiting';

const Profile = (props) => {
  console.log(props);
  return (
    <section className={`${style.wrap} container`}>
      <div key={props.profile.id} className={style.profile_card}>
        <FavoritesContainer expertId={props.profile.id} />
        <div className={style.avatar}>
          <img src={props.profile.avatar} alt="" />
        </div>
        <div className={style.discription}>
          <h2>{props.profile.pro_lastname} {props.profile.pro_firstname ? props.profile.pro_firstname : props.profile.name} {props.profile.pro_secondname}</h2>
          <div className={style.work}>
            <span>{props.profile.pro_position ? props.profile.pro_position : 'Странник'}</span>
            <span>{props.profile.pro_workplace ? props.profile.pro_workplace : 'Всё и Вся'}</span>
          </div>
        </div>
        <Raiting points={props.profile.pro_raiting ? props.profile.pro_raiting : 0} />
      </div>

      <div className={style.information}>
        <span className={style.title}>Город</span>
        <div className={style.text_box}>
          <span>{props.profile.pro_city}</span>
        </div>
        <span className={style.title}>Опыт</span>
        <div className={style.text_box}>
          <span>{props.profile.pro_position ? props.profile.pro_position : 'Странник'}</span>
          <span>{props.profile.pro_workplace ? props.profile.pro_workplace : 'Всё и Вся'}</span>
          <p className={style.exp}>{props.profile.pro_expirience ? props.profile.pro_expirience : 'Без опыта'}</p>
        </div>
        <span className={style.title}>Хештеги</span>
        <div className={style.tags_box}><a href="/tags/">Планирование и управление</a><a href="/tags/">Плановые показатели</a></div>
        <span className={style.title}>О себе</span>
        <div className={style.text_box}>
          <p>{props.profile.pro_discription ? props.profile.pro_discription : 'Человек загадка'}</p>
        </div>
      </div>

      <div className={style.extra}>
        {props.profile.pro_articles ? <button className={`${style.button} button`}>Статьи</button> : null}
        {props.profile.pro_videos ? <button className={`${style.button} button`}>Видео</button> : null}
        {props.profile.pro_resumes ? <button className={`${style.button} button`}>Резюме</button> : null}
      </div>
    </section>
  )
}

export default Profile;
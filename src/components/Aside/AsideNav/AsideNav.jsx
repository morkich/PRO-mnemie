import React from 'react';
import AsideNavItem from './AsideNavItem/AsideNavItem';
import style from './AsideNav.module.css';

const AsideNav = (props) => {
  return (
    <ul className={style.wrap}>
      <AsideNavItem to={`/my_favorites/${props.userId}/posts`} name={'Избранное'} />
      <AsideNavItem to={`/mydata/posts/${props.userId}`} name={'Ваши статьи'} />
      <AsideNavItem to={`/mydata/tv_video/${props.userId}`} name={'Ваши видео'} />
      <AsideNavItem to={'/#/'} name={'Ваше резюме'} />
      <AsideNavItem to={`/mydata/vacancies/${props.userId}`} name={'Ваши вакансии'} />
      <AsideNavItem to={`/mydata/events/${props.userId}`} name={'Ваши мероприятия'} />
      <AsideNavItem to={'/#/'} name={'Ваши курсы'} />
      <AsideNavItem to={'/#/'} name={'Оформленные пакеты и подписки'} />
      <AsideNavItem to={''} onClick={props.logOut} name={'Выйти из профиля'} />
    </ul>
  );
}

export default AsideNav;
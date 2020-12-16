import React from 'react';
import AsideNavItem from './AsideNavItem/AsideNavItem';
import style from './AsideNav.module.css';

const AsideNav = (props) => {
  return (
    <ul className={style.wrap}>
      <AsideNavItem to={'/favorites/'} name={'Избранное'} />
      <AsideNavItem to={`/mydata/posts/${props.userId}`} name={'Ваши статьи'} />
      <AsideNavItem to={'/#/'} name={'Ваши видео'} />
      <AsideNavItem to={'/#/'} name={'Ваше резюме'} />
      <AsideNavItem to={'/#/'} name={'Ваши вакансии'} />
      <AsideNavItem to={'/#/'} name={'Ваши мероприятия'} />
      <AsideNavItem to={'/#/'} name={'Ваши курсы'} />
      <AsideNavItem to={'/#/'} name={'Оформленные пакеты и подписки'} />
      <AsideNavItem to={''} onClick={props.logOut} name={'Выйти из профиля'} />
    </ul>
  );
}

export default AsideNav;
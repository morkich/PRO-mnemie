import React from 'react';
import FooterNavItem from './FooterNavItem/FooterNavItem';
import style from './FooterNav.module.css';

const FooterNav = () => {
  return (
    <nav className={style.container}>
      <ul className={style.wrap}>
        <FooterNavItem to={'/favorites/'} name={'О нас'}/>
        <FooterNavItem to={'/#/'} name={'События'}/>
        <FooterNavItem to={'/#/'} name={'Медиа'}/>
        <FooterNavItem to={'/#/'} name={'TV PRO мнение'}/>
        <FooterNavItem to={'/#/'} name={'Размещение рекламы'}/>
        <FooterNavItem to={'/#/'} name={'Контакты'}/>
        <FooterNavItem to={'/#/'} name={'Карьера'}/>
        <FooterNavItem to={'/#/'} name={'Образование'}/>
        <FooterNavItem to={'/#/'} name={'Аналитика'}/>
        <FooterNavItem to={'/#/'} name={'F.A.Q.'}/>
        <FooterNavItem to={'/#/'} name={'Эксперты'}/>        
      </ul>
    </nav>
  );
}

export default FooterNav;
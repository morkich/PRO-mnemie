import React from 'react';
import style from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className={style.top_menu}>
      <ul>
        <li><NavLink to="/home" activeClassName={style.active}>Главная</NavLink></li>
        <li><NavLink to="/career" activeClassName={style.active}>Карьера</NavLink></li>
        <li><NavLink to="/events" activeClassName={style.active}>События</NavLink></li>
        <li><NavLink to="/study" activeClassName={style.active}>Образование</NavLink></li>
        <li><NavLink to="/media" activeClassName={style.active}>Медиа</NavLink></li>
        <li><NavLink to="/analitycs" activeClassName={style.active}>Аналитика</NavLink></li>
        <li><NavLink to="/tv" activeClassName={style.active}>TV PRO мнение</NavLink></li>
        <li><NavLink to="/experts" activeClassName={style.active}>Эксперты</NavLink></li>
        <li><NavLink to="/about" activeClassName={style.active}>О нас</NavLink></li>
      </ul>
    </nav>
  );
}

export default Menu; 
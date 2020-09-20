import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './FooterNavItem.module.css';

const FooterNavItem = (props) => {
  return (
      <li>
        <NavLink to={props.to} className={style.item} activeClassName={style.active}>{props.name}</NavLink>
      </li>
  );
}

export default FooterNavItem;
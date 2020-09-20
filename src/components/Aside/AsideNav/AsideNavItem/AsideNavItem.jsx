import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './AsideNavItem.module.css';

const AsideNavItem = (props) => {
  return (
      <li>
        <NavLink onClick={props.onClick} to={props.to} className={style.item} activeClassName={style.active}>{props.name}</NavLink>
      </li>
  );
}

export default AsideNavItem;
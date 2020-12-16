import React from 'react';
import style from './MenuItem.module.css';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
  return (
    <li>
      <NavLink exact={props.exact} to={props.to}  className={style.item} activeClassName={style.active}>{props.name}</NavLink>
    </li>
  );
}

export default MenuItem; 
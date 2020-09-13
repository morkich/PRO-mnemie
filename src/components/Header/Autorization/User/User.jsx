import React from 'react';
import style from './User.module.css';
import TopCart from './TopCart/TopCart';
import { NavLink } from 'react-router-dom';

const User = (props) => {
  return (
    <div className={style.wrap}>      
      <TopCart />
      <div className={style.user}>
        <NavLink to={`/profile/me`} className={style.name}>{props.firstname} {props.lastname.substr(0, 1)}.</NavLink>
        <div className={style.avatar}>
          <img src={props.avatar} alt={`${props.firstName} ${props.lastname}`} />
        </div>
      </div>
    </div>
  );
}

export default User; 
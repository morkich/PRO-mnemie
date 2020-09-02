import React from 'react';
import style from './User.module.css';
import TopCart from './TopCart/TopCart';
import { NavLink } from 'react-router-dom';
import Preloader from '../../../common/Preloader/Preloader';

const User = (props) => {
  console.log(props);
  
  return (
    <div className={style.wrap}>
      {props.isLoading ? <Preloader /> : null}
      <TopCart />
      <div className={style.user}>
        <NavLink to={`/profile/${props.userId}`} className={style.name}>{props.firstname} {props.lastname.substr(0, 1)}.</NavLink>
        <div className={style.avatar}>
          <img src={props.avatar} alt={`${props.firstName} ${props.lastname}`} />
        </div>
      </div>
    </div>
  );
}

export default User; 
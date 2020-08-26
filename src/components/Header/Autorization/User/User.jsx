import React from 'react';
import style from './User.module.css';
import TopCart from './TopCart/TopCart';
import UserData from './UserData/UserData';

const User = (props) => {
  return (
    <div className={style.wrap}>      
      <TopCart />
      <UserData dispatch={props.dispatch} userData={props.userData}/>
    </div>
  );
}

export default User; 
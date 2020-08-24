import React from 'react';
import style from './User.module.css';
import TopCart from './TopCart/TopCart';
import UserData from './UserData/UserData';

const User = (props) => {
  return (
    <div className={style.wrap}>      
      <TopCart />
      <UserData logIn={props.logIn} userData={props.userData}/>
    </div>
  );
}

export default User; 
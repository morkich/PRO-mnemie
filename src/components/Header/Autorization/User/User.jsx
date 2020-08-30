import React from 'react';
import style from './User.module.css';
import TopCart from './TopCart/TopCart';
import UserDataContainer from './UserData/UserDataContainer';

const User = (props) => {
  return (
    <div className={style.wrap}>      
      <TopCart />
      <UserDataContainer store={props.store} />
    </div>
  );
}

export default User; 
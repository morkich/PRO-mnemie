import React from 'react';
import style from './UserData.module.css';

const UserData = (props) => {

  const unautorized = () => {
    props.checkOut(0);
  }

  return (
    <div className={style.wrap}>
      <div className={style.name}>{props.userData.firstName} {props.userData.lastName.substr(0, 1)}.</div>
      <div className={style.avatar} onClick={unautorized}>
        <img src={props.userData.avatar} alt={`${props.userData.firstName} ${props.userData.lastName}`} />
      </div>
    </div>
  );
}

export default UserData; 
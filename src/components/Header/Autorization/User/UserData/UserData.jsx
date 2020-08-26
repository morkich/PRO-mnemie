import React from 'react';
import style from './UserData.module.css';
import { loginCreator, shortNameCreator } from '../../../../../redux/user-reducer';

const UserData = (props) => {

  const unautorized = () => {
    props.dispatch(loginCreator(0));
  }

  return (
    <div className={style.wrap}>
      <div className={style.name}>{props.userData.firstName} {props.userData.shortLastName}</div>
      <div className={style.avatar} onClick={unautorized}>
        <img src={props.userData.avatar} alt={`${props.userData.firstName} ${props.userData.lastName}`} />
      </div>
    </div>
  );
}

export default UserData; 
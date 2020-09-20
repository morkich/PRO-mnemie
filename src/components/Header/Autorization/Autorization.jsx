import React from 'react';
import style from './Autorization.module.css';
import User from './User/User';
import Guest from './Guest/Guest';
import PreloaderMini from '../../common/PreloaderMini/PreloaderMini';

const Autorization = (props) => {
  let typeUser = <Guest/>;
  if (props.loggetIn) {
    typeUser = <User 
      firstname={props.firstname}
      lastname={props.lastname}
      avatar={props.avatar}
      userId={props.userId}
      loadingAcc={props.loadingAcc}
    />;
  }
  return (
    <div className={style.wrap}>
      {props.loadingAcc ? <PreloaderMini /> : null}
      {typeUser}
    </div>
  );
}

export default Autorization; 
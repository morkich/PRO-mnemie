import React from 'react';
import style from './Autorization.module.css';
import User from './User/User';
import GuestContainer from './Guest/GuestContainer';

const Autorization = (props) => {
  let typeUser = <GuestContainer/>;
  if (props.loggetIn) {
    typeUser = <User 
      firstname={props.firstname}
      lastname={props.lastname}
      avatar={props.avatar}
      userId={props.userId}
      isLoading={props.isLoading}
    />;
  }

  return (
    <div className={style.wrap}>
      {typeUser}
    </div>
  );
}

export default Autorization; 
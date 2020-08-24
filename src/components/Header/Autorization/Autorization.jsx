import React from 'react';
import style from './Autorization.module.css';
import Guest from './Guest/Guest';
import User from './User/User';

const Autorization = (props) => {

  let typeUser = <Guest logIn={props.logIn}/>;
  if( props.userData.autorization ) {
    typeUser = <User userData={props.userData.data} logIn={props.logIn}/>;
  }
   
  return (
    <div className={style.wrap}>
      {typeUser}
    </div>
  );
}

export default Autorization; 
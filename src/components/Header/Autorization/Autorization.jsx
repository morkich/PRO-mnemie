import React from 'react';
import style from './Autorization.module.css';
import Guest from './Guest/Guest';
import User from './User/User';

const Autorization = (props) => {

  let typeUser = <Guest dispatch={props.dispatch}/>;
  if( props.userData.autorization ) {
    typeUser = <User userData={props.userData.data} dispatch={props.dispatch}/>;
  }
   
  return (
    <div className={style.wrap}>
      {typeUser}
    </div>
  );
}

export default Autorization; 
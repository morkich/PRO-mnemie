import React from 'react';
import style from './Guest.module.css';

const Guest = (props) => {

  let registration = () => {
    props.logIn(1);
  }

  return (
    <button onClick={registration} className="button">Авторизоваться</button>
  );
}

export default Guest; 
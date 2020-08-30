import React from 'react';
import style from './Guest.module.css';

const Guest = (props) => {
  let registration = () => {
    props.userLogin(1);
  }

  return (
    <button onClick={registration} className="button">Авторизоваться</button>
  );
}

export default Guest; 
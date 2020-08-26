import React from 'react';
import style from './Guest.module.css';
import { loginCreator } from '../../../../redux/user-reducer';

const Guest = (props) => {

  let registration = () => {   
    props.dispatch(loginCreator(1));
  }

  return (
    <button onClick={registration} className="button">Авторизоваться</button>
  );
}

export default Guest; 
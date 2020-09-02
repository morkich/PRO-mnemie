import React from 'react';
import style from './Guest.module.css';
import { NavLink } from 'react-router-dom';

const Guest = (props) => {

  return (
    <>
      <NavLink to='/auth' >
        {/* <button onClick={registration} className="button">Авторизоваться</button> */}
        <button className="button">Авторизоваться</button>
      </NavLink>
    </>
  );
}

export default Guest; 
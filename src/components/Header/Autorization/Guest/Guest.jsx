import React from 'react';
import { NavLink } from 'react-router-dom';

const Guest = (props) => {

  return (
    <>
      <NavLink to='/auth' >
        <button className="button">Авторизоваться</button>
      </NavLink>
    </>
  );
}

export default Guest; 
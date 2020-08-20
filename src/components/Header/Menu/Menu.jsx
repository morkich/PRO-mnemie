import React from 'react';
import style from './Menu.module.css';
import MenuItem from './MenuItem/MenuItem';

const Menu = (props) => {

  let menuReady = props.menuData
    .map( (item, i) => <MenuItem to={item.to} name={item.name} key={i}/> );

  return (
    <nav className={style.top_menu}>
      <ul>
        {menuReady}
      </ul>
    </nav>
  );
}

export default Menu; 
import React from 'react';
import style from './Header.module.css';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import Autorization from './Autorization/Autorization';
import Menu from './Menu/Menu';

const Header = (props) => {
  return (
    <div className="container wrap_header">
      <Logo />
      <Search />
      <Autorization />
      <Menu menuData={props.headerData.topMenu}/>
    </div>
  );
}

export default Header; 
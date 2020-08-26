import React from 'react';
import style from './Header.module.css';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import Autorization from './Autorization/Autorization';
import Menu from './Menu/Menu';
import TopBanner from './TopBanner/TopBanner';

const Header = (props) => {
  return (    
    <div className={`container ${style.wrap}`}>      
      <Logo />
      <Search searchData={props.headerData.search} dispatch={props.dispatch}/>
      <Autorization userData={props.userData} dispatch={props.dispatch}/>
      <Menu menuData={props.headerData.topMenu}/>
      <TopBanner /> 
    </div>
  );
}

export default Header; 
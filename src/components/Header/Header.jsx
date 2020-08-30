import React from 'react';
import style from './Header.module.css';
import Logo from './Logo/Logo';
import TopBanner from './TopBanner/TopBanner';
import AutorizationContainer from './Autorization/AutorizationContainer';
import SearchContainer from './Search/SearchContainer';
import MenuContainer from './Menu/MenuContainer';

const Header = (props) => {
  return (
    <div className={`container ${style.wrap}`}>
      <Logo />
      <SearchContainer />
      <AutorizationContainer/>
      <MenuContainer />
      <TopBanner />
    </div>
  );
}

export default Header; 
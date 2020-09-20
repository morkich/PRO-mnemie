import React from 'react';
import style from './Header.module.css';
import TopBanner from './TopBanner/TopBanner';
import AutorizationContainer from './Autorization/AutorizationContainer';
import SearchContainer from './Search/SearchContainer';
import MenuContainer from './Menu/MenuContainer';
import LogoContainer from './Logo/LogoContainer';

const Header = (props) => {
  return (
    <div className={`container ${style.wrap}`}>
      <LogoContainer />
      <SearchContainer />
      <AutorizationContainer />
      <MenuContainer />
      <TopBanner />
    </div>
  );
}

export default Header; 
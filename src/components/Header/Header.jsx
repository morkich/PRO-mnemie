import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.main}>
      <picture>
        <source srcset="https://marketplace.canva.com/EAD7RZBpky0/1/0/400w/canva-blue-and-white-gaming-logo-N-0-xW64Gwc.jpg" media="(min-width: 800px)" />
        <img src="https://bower.io/img/bower-logo.png" alt="MDN" />
      </picture>
    </header>
  );
}

export default Header; 
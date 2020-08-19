import React from 'react';
import style from './Aside.module.css';

const Aside = () => {
  return (
    <aside className='wrap_aside'>
      <nav>
        <ul>
          <li><a href="/account">Аккаунт</a></li>
          <li><a href="/main">Main</a></li>
          <li><a href="#">Menu 3</a></li>
          <li><a href="#">Menu 4</a></li>
          <li><a href="#">Menu 5</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
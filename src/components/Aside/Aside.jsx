import React from 'react';
import style from './Aside.module.css';

const Aside = () => {
  return (
    <aside className={style.main}>
      <nav>
        <ul>
          <li><a href="#">Menu 1</a></li>
          <li><a href="#">Menu 2</a></li>
          <li><a href="#">Menu 3</a></li>
          <li><a href="#">Menu 4</a></li>
          <li><a href="#">Menu 5</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
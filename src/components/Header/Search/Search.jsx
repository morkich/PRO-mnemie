import React from 'react';
import style from './Search.module.css';

const Search = () => {
  return (
    <a href="/" className="wrap">
      <picture>
        <source srcSet="./logo.svg" media="(min-width: 800px)" />
        <img src="./logo.svg" alt="MDN" />
      </picture>
    </a>
  );
}

export default Search; 
import React from 'react';
import style from './Pharagraph.module.css';

const Pharagraph = (props) => {
  return (
  <p className={style.pharagraph}>{props.text}</p>
  );
}

export default Pharagraph;
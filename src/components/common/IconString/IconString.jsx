import React from 'react';
import Icon from '../Icon/Icon';
import style from './IconString.module.css'

const IconString = (props) => {
  return (
    <div className={style.wrap}>
      <Icon style={props.iconStyle}/>
      <span className={style.string}>{props.string}</span>
    </div>
  );
}

export default IconString;
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../FilterTab.module.css';

const FilterTabItem = (props) => {   
  return (
    <li>
      <NavLink to={props.to} className={style.item} data-catid={props.catId} onClick={props.onClick}>{props.name}</NavLink>
    </li>    
  );
}

export default FilterTabItem; 
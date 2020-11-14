import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Tags.module.css';

const Tags = (props) => {

  let tagsArr = Object.keys(props.tags).map( (tag, i) => {
    return <NavLink to={`/tags/${props.tags[tag].id}/`} key={i}>{props.tags[tag].name}</NavLink>
  })

  console.log(props);
  return (
    <div className={style.wrap}>
      <div className={style.label}>Теги:</div>
      <div className={style.body}>
        {tagsArr}
      </div>
    </div>      
  );
}

export default Tags;
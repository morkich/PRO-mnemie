import React from 'react';
import style from './Avatar.module.css';

const Comments = (props) => {

  return (
    <div className={style.wrap}>  
      <img src={props.avatarUrl} alt={props.userName}/>
    </div>
  );
}

export default Comments;
import React from 'react';
import Title from '../../Title/Title';
import style from './Delete.module.css';


const Delete = (props) => {
    return (
      <div className={style.wrap}>
        <Title position="center" title={`Удалить Пост ${props.deleteName}`}  />
        <div className={style.formGroupButton}>
          <button className={`button ${style.button}`} onClick={props.deleteItem}>Удалить</button>
          <button className={`button ${style.button}`} onClick={props.modalClose}>Отменить</button>
        </div>
      </div>
    );
  }


export default Delete;
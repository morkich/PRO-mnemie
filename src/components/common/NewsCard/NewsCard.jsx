import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import IconString from '../IconString/IconString';
import InfoBlock from '../InfoBlock/InfoBlock';
import ModalContainer from '../Modal/ModalContainer';
import style from './NewsCard.module.css';

const NewsCard = (props) => {  

  let categorys = props.category.map( cat => `${cat} `);
  let [editMode, setEditModeState] = useState(false);

  let showEditMenu = () => {
    setEditModeState(!editMode);
  }

  let editMenu = (
    <div className={style.editMenu}>          
      <Link to={`/edit/posts/${props.id}/`}><IconString string={'Редактировать'} iconStyle={{iconStyle:'pen'}}/></Link>
      <IconString string={
        <ModalContainer 
          buttonText={'удалить'}
          type={'delete'}
          string={true}
          deleteId={props.id}
          deleteName={props.title && props.title.rendered}
          userId={props.userId}
        />} iconStyle={{iconStyle:'delete'}}/>
    </div>   
  )

  let notEditCard = (
    <li className={style.wrap} key={props.id}>
      <NavLink to={`/post/${props.id}`}>
        <img src={props.image} alt="" className={style.img}/>
        <div className={style.description}>
          <div className={style.dark_line}></div>
          <span className={style.light_text}>{categorys}</span>
          <h2 className={style.title}>{props.title.rendered}</h2>
          <InfoBlock 
            views={props.views}
            comment={props.comment} 
          />
        </div>
      </NavLink>        
    </li>
  )

  let editCard = (
    <li className={style.wrap} key={props.id}>
      <img src={props.image} alt="" className={style.img}/>
      <div className={style.description}>
        <div className={style.dark_line}></div>
          <div className={style.editWrap} onClick={showEditMenu}>
            <div className={style.editBut}>
              <svg width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="white"/>
                <circle cx="2" cy="10" r="2" fill="white"/>
                <circle cx="2" cy="18" r="2" fill="white"/>
              </svg>
            </div>
          </div>
        <span className={style.light_text}>{categorys}</span>
        <NavLink className={style.link} to={`/post/${props.id}`}>
          <h2 className={style.title}>{props.title.rendered}</h2>
        </NavLink>   
        <InfoBlock 
          views={props.views}
          comment={props.comment} 
        />
      </div>        
      {editMode && editMenu}
    </li>
  )

    return (
      <>
        {props.edit ? editCard : notEditCard}
      </>
    );
}

export default NewsCard;
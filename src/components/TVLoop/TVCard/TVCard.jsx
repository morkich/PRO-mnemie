import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DateBlock from '../../common/DateBlock/DateBlock';
import InfoBlock from '../../common/InfoBlock/InfoBlock';
import style from './TVCard.module.css';
import IconString from '../../common/IconString/IconString';
import ModalContainer from '../../common/Modal/ModalContainer';
import FavoritesContainer from '../../common/Favorites/FavoritesContainer';

const TVCard = (props) => {  
  
  let [editMode, setEditModeState] = useState(false);

  let showEditMenu = () => {
    setEditModeState(!editMode);
  }


  let editMenu = (
    <div className={style.editMenu}>          
      <Link to={`/edit/tv_video/${props.id}/`}><IconString string={'Редактировать'} iconStyle={{iconStyle:'pen'}}/></Link>
      <IconString string={
        <ModalContainer 
          buttonText={'удалить'}
          type={'delete'}
          string={true}
          deleteId={props.id}
          deleteName={props.title && props.title.rendered}
          userId={props.userId}
          itemType={'tv_video'}
        />} iconStyle={{iconStyle:'delete'}}/>
    </div>   
  )

  let notEditCard = (
    <li className={style.wrap} key={props.key}>
      <Link to={`/tv_video/${props.id}`} className={style.grid}>
        <div className={style.img}>
          <div className={style.play}>
            <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.6175 14.9954L0.792591 28.3099L1.45518 0.605026L23.6175 14.9954Z" fill="white"/>
            </svg>
          </div>
          <img src={props.image} alt=""/>
        </div>
        <div className={style.information}>
          <div className={style.datetime}>
            <DateBlock
              date={Date.parse(props.date)} 
              type={{display: 'fulldate'}}
              style={{front: 'small'}}
            />
            <InfoBlock 
              views={props.views}
              comment={props.comment} 
              darkTheme={true}
            />
          </div>
          <div className={style.author}>{props.author}</div>
          <div className={style.title}>{props.cleanTitle ? props.cleanTitle: props.title.rendered}</div>
        </div>
      </Link>      
      <FavoritesContainer expertId={props.id} darkTheme={true} type={'tv_video'}/>     
    </li>  
    )

  let editCard =(
    <li className={style.wrap} key={props.key}>      
      <div className={style.img}>
        <div className={style.editWrap} onClick={showEditMenu}>
          <div className={style.editBut}>
            <svg width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2" cy="2" r="2" fill="white"/>
              <circle cx="2" cy="10" r="2" fill="white"/>
              <circle cx="2" cy="18" r="2" fill="white"/>
            </svg>
          </div>
        </div>        
        <div className={style.play}>
          <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.6175 14.9954L0.792591 28.3099L1.45518 0.605026L23.6175 14.9954Z" fill="white"/>
          </svg>
        </div>
        <img src={props.image} alt=""/>
      </div>
      <div className={style.information}>
        <div className={style.datetime}>
          <DateBlock
            date={Date.parse(props.date)} 
            type={{display: 'fulldate'}}
            style={{front: 'small'}}
          />
          <InfoBlock 
            views={props.views}
            comment={props.comment} 
            darkTheme={true}
          />
        </div>
        <div className={style.author}>{props.author}</div>
        <Link to={`/tv_video/${props.id}`} className={style.grid}>
          <div className={style.title}>{props.cleanTitle ? props.cleanTitle: props.title.rendered}</div>
        </Link>
      </div>      
      {editMode && editMenu}   
    </li>
  )

  return (
    <>
      {props.edit ? editCard : notEditCard}
    </>
  )
}

export default TVCard;
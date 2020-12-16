import React from 'react';
import { Link } from 'react-router-dom';
import DateBlock from '../../common/DateBlock/DateBlock';
import InfoBlock from '../../common/InfoBlock/InfoBlock';
import AuthorContainer from '../../Author/AuthorContainer'
import style from './TVCard.module.css';

const TVCard = (props) => {  

  return (
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
          <div className={style.author}>
            <AuthorContainer id={props.author} minimal={true}/>
          </div>
          <div className={style.title}>
            {props.title.rendered}
          </div>
        </div>
      </Link>      
    </li>
  )
}

export default TVCard;
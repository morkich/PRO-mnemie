import React from 'react';
import { Link } from 'react-router-dom';
import DateBlock from '../../common/DateBlock/DateBlock';
import Preloader from '../../common/Preloader/Preloader';
import Title from '../../common/Title/Title';
import style from '../Aside.module.css';

const AsideMainNews = (props) => { 
  console.log(props);
  let itemsPack = props.asideMainNewsItems.map((item, i) => {
    return (
      <Link key={item.ID} to={`/post/${item.ID}`} className={`${style.asideVacasyBlock} ${style.asideBlock} ${style.asideLine}`}>
        {props.asideMainNewsLoading ? <Preloader /> : null} 
        <h3 className={`${style.title} ${style.mb10}`}>{item.post_title}</h3>
        <div className={style.description}><div dangerouslySetInnerHTML={{ __html: item.post_content }}></div></div>
        <div className={style.dataBlock}>
          <div className={style.author}>{item.author_name}</div>
          <span className={style.backTextSmall}>
            <DateBlock 
              date={Date.parse(item.post_date)} 
              type={{display: 'fulldate'}}
              style={{front: 'small'}}
            />
          </span>          
        </div>           
      </Link>
    )
  })
  return (
    <aside>
      <Title title={'Популярное'} uppercase={true} small={true} />
      <div className={style.asideFilter}>
        <button onClick={() => props.changeFilter('week')} className={`${style.asideFilterButton} ${props.asideMainNewsTimes === 'week' && style.asideFilterButtonActive}`}>за неделю</button>
        <button onClick={() => props.changeFilter('month')} className={`${style.asideFilterButton} ${props.asideMainNewsTimes === 'month' && style.asideFilterButtonActive}`}>за месяц</button>
      </div>
      <div className={style.wrap}> 
        {itemsPack}
      </div>
    </aside>
  )
}

export default AsideMainNews;
import React from 'react';
import style from './YourData.module.css';
import Watermark from '../../common/Watermark/Watermark';
import Title from '../../common/Title/Title';
import Preloader from '../../common/Preloader/Preloader';
import NewsCard from '../../common/NewsCard/NewsCard';
import TVCard from '../../TVLoop/TVCard/TVCard';
import { Link } from 'react-router-dom';
import VacancyItem from '../../Vacancy/VacancyLoop/VacancyItem/VacancyItem';
import EventCard from '../../EventLoop/EventCard/EventCard';

const YourData = (props) => {
  let cards;
  let linkType;
  let addItemTitle;
  let gridStyle = style.gridFour;

  if(props.dataType === 'tv_video'){
    addItemTitle = 'Загрузите новое видео';
    cards = props.dataItems.map(post => <TVCard
      key={post.id}
      id={post.id}
      date={post.date}
      title={post.title}  
      image={post.img_url}
      views={post.view_count ? post.view_count: 0}
      comment={post.comments_count ? post.comments_count: 0}
      author={post.author_name}
      userId={props.userId}     
      edit={true}
    />       
    )
  } else if (props.dataType === 'vacancies'){
    linkType = 'vacancy';
    addItemTitle = 'Новая вакансия';
    gridStyle = style.gridLine;
    cards = Object.keys(props.dataItems).map(item => <VacancyItem
      id={props.dataItems[item].id}
      key={props.dataItems[item].id}
      title={props.dataItems[item].title.rendered}
      companyName={props.dataItems[item].pro_vacancy_company_name}
      city={props.dataItems[item].pro_vacancy_city}
      priceBefore={props.dataItems[item].pro_vacancy_price}
      priceAfter={props.dataItems[item].pro_vacancy_price_after}
      requires={props.dataItems[item].pro_vacancy_require}
      functions={props.dataItems[item].pro_vacancy_function}
      conditions={props.dataItems[item].pro_vacancy_conditions}
      edit={true}
    />       
    )
  } else if (props.dataType === 'events'){
    linkType = 'events';
    addItemTitle = 'Новое объявление';
    gridStyle = style.gridLine;    
    cards = props.dataItems.map(item => <EventCard 
      key={item.id}
      id={item.id}    
      img={item.img_url}
      date={item.date}
      dateStart={item.pro_event_date}
      type={item.pro_event_type}
      company={item.pro_event_company_name}
      city={item.pro_event_city}
      title={item.title ? item.title.rendered : 'Загрузка...' }
      content={item.content ? item.content.rendered : 'Загрузка...' }
      button={true}             
      edit={true}    
      hideFavorite={true}
    />     
    )
  }else{
    addItemTitle = 'Напишите новую статью';
    cards = props.dataItems.map(post => <NewsCard
      key={post.id}
      title={post.title}      
      category={post.category_name}            
      id={post.id}
      userId={props.userId}
      image={post.img_url}
      views={post.view_count}
      comment={post.comments_count}
      idCat={props.parentCat}
      edit={true}
    />  
    )  
  }
  
  return (
    <section className="container">
      <header className={style.header}>
        <Watermark main={true} />
        <Title
          title={props.title}
          main={true}
          uppercase={true}          
        />
        {gridStyle === style.gridLine && <Link to={`/add/${linkType}/${props.userId}`} className={'button buttonLight'} title={'Новая вакансия'}>{addItemTitle}</Link>}
      </header>
      <div className="contentNoAside">
        <main>
          {props.dataLoading ? <Preloader /> : null}
          <ul className={gridStyle}>   
           {gridStyle !== style.gridLine && <Link to={`/add/${props.dataType}/${props.userId}`} className={style.addNewContent}>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6999 0.59375H9.29991V9.28821H0.899902V11.7723H9.29991V20.4668H11.6999V11.7723H20.0999V9.28821H11.6999V0.59375Z" fill="white"/>
              </svg>
              <span>{addItemTitle}</span>
            </Link>
            }
            {cards}            
          </ul>
        </main>
      </div>
    </section>
  )
}

export default YourData;
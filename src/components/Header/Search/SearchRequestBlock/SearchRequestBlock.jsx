import React from 'react';
import NewsCard from '../../../common/NewsCard/NewsCard';
import Preloader from '../../../common/Preloader/Preloader';
import Title from '../../../common/Title/Title';
import Watermark from '../../../common/Watermark/Watermark';
import EventCard from '../../../EventLoop/EventCard/EventCard';
import TVCard from '../../../TVLoop/TVCard/TVCard';
import style from '../Search.module.css';

const SearchRequestBlock = (props) => {
  console.log(props);
let posts;
let tv_video;
let events;
if(props.searchResult['posts'] != undefined){
  posts = props.searchResult['posts'].map( post => {
    let categoryNames = post.category_post_items.map( item => item.cat_name);
    return(
      <>
        {props.sarchLoading ? <Preloader /> : null}
        <NewsCard 
          key={post.ID}
          id={post.ID}      
          cleanTitle={post.post_title}
          category={categoryNames}                  
          image={post.image_post_url}
          views={post.view_count ? post.view_count : 0}
          comment={post.comments_count ? post.comments_count : 0}
        />
      </>
    )
  });
}
if(props.searchResult['tv_video'] != undefined){
  tv_video = props.searchResult['tv_video'].map( post => {
    return(
      <>
        {props.sarchLoading ? <Preloader /> : null}
        <TVCard
          key={post.ID}
          id={post.ID}      
          cleanTitle={post.post_title}
          image={post.image_post_url}
          views={post.view_count ? post.view_count : 0}
          comment={post.comments_count ? post.comments_count : 0}
          date={post.post_date}      
          author={post.author_name}                
        />   
      </>
    )
  });
}
if(props.searchResult['events'] != undefined){
  events = props.searchResult['events'].map( post => {
    let categoryNames = post.category_post_items.map( item => item.cat_name);
    return (
      <>
        {props.sarchLoading ? <Preloader /> : null}
        <EventCard 
          key={post.ID}
          id={post.ID}  
          cleanTitle={post.post_title}
          img={post.image_post_url}
          dateStart={post.date_start}
          type={post.pro_event_type}
          company={post.pro_event_company_name}
          city={post.pro_event_city}
          title={post.title ? post.title.rendered : 'Загрузка...' }
          content={post.content ? post.content.rendered : 'Загрузка...' }
          hideFavorite={true}      
        />
      </>
    )
  });
} 

  return (
    <>
      <section className="container">
        <header className={style.header}>
          <Watermark main={true}/>         
          <Title 
            title={'Статьи'} 
            main={true} 
            uppercase={false}
          />
        </header>
        <div className="contentNoAside">
          <ul className={style.gridfour}>   
            {posts.length > 0 ? posts : <span className={style.string}>Событий по запросу "{props.searchQuery}" не найдено</span>}
          </ul>          
        </div>
      </section>
      <section className={`container ${style.secondSearchContainer}`}>
        <header className={style.header}>
          <Watermark main={true}/>         
          <Title 
            title={'TV PRO Мнение'} 
            main={true} 
            uppercase={false}
          />
        </header>
        <div className="contentNoAside">
          <ul className={style.gridfour}>   
            {tv_video.length > 0 ? tv_video : <span className={style.string}>Видео по запросу "{props.searchQuery}" не найдено</span>}
          </ul>   
        </div>
      </section>  
      <section className={`container ${style.secondSearchContainer}`}>
        <header className={style.header}>
          <Watermark main={true}/>         
          <Title 
            title={'События'} 
            main={true} 
            uppercase={false}
          />
        </header>
        <div className="contentNoAside">
          <ul className={style.gridLine}>   
            {events.length > 0 ? events : <span className={style.string}>Событий по запросу "{props.searchQuery}" не найдено</span>}
          </ul>   
        </div>
      </section>  
    </>  
  );
}

export default SearchRequestBlock; 
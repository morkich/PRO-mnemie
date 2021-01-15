import React from 'react';
import style from './YourFavorites.module.css';
import Watermark from '../../common/Watermark/Watermark';
import Title from '../../common/Title/Title';
import Preloader from '../../common/Preloader/Preloader';
import NewsCard from '../../common/NewsCard/NewsCard';
import EventCard from '../../EventLoop/EventCard/EventCard';
import ExpertCard from '../../Experts/ExpertCard/ExpertCard';
import TVCard from '../../TVLoop/TVCard/TVCard';
import MenuItem from '../../Header/Menu/MenuItem/MenuItem';

const YourFavorites = (props) => {

  let cards;
  if(props.yourFavoriteType === 'posts'){
    cards = props.yourFavoritesItems.map(post => <NewsCard
        key={post.id}
        title={post.title}      
        category={post.category_name}            
        id={post.id}
        userId={props.userId}
        image={post.img_url}
        views={post.pro_views}
        comment={post.comments_count}
        idCat={props.parentCat}
        edit={false}
      /> 
    )
  }else if (props.yourFavoriteType === 'tv_video'){
    cards = props.yourFavoritesItems.map(post => <TVCard
      key={post.id}
      id={post.id}
      date={post.date}
      title={post.title}  
      image={post.img_url}
      views={post.pro_tv_view ? post.pro_tv_view: 0}
      comment={post.comments_count ? post.comments_count: 0}
      author={post.author_name}
      userId={props.userId}     
      edit={false}
    />       
    )
  }else if (props.yourFavoriteType === 'events'){
    cards = props.yourFavoritesItems.map(post => <EventCard
      img={post.img_url}
      id={post.id}
      key={post.id}
      date={post.date}
      dateStart={post.pro_event_date}
      type={post.date}
      company={post.pro_event_company_name}
      city={post.pro_event_city}      
      title={post.title ? post.title.rendered : 'Загрузка...' }  
      content={post.content ? post.content.rendered : 'Загрузка...' }
      button={true}    
    />       
    )    
  }else if (props.yourFavoriteType === 'users'){
    cards = props.yourFavoritesItems.map(post => <ExpertCard
      key={post.id}
      expertId={post.id}
      avatar={post.avatar}
      pro_lastname={post.pro_lastname}
      pro_firstname={post.pro_firstname}
      pro_secondname={post.pro_secondname}
      pro_position={post.pro_position}
      pro_workplace={post.pro_workplace}
      pro_city={post.pro_city}
      pro_articles={post.articles_count}
      pro_raiting={post.pro_raiting}
      name={post.name}
    />
  )
  }else{
    cards = props.yourFavoritesItems.map(post => <NewsCard
      key={post.id}
      title={post.title}      
      category={post.category_name}            
      id={post.id}
      userId={props.userId}
      image={post.img_url}
      views={post.view_count}
      comment={post.comments_count}
      idCat={props.parentCat}
      edit={false}
    />  
    )  
  }

  

  return (
    <section className="container">
      <header className={style.header}>
        <Watermark main={true} />
        <Title
          title={'Избранное'}
          main={true}
          uppercase={true}          
        />
      </header>
      <div className="contentNoAside">
        <main>
          <nav className={style.filter}>
            <ul>
              <MenuItem to={`/my_favorites/${props.userId}/posts`} name={`Статьи`} styleFilter={true}/>
              <MenuItem to={`/my_favorites/${props.userId}/users`} name={`Эксперты`} styleFilter={true}/>
              <MenuItem to={`/my_favorites/${props.userId}/tv_video`} name={`Видео`} styleFilter={true}/>
              <MenuItem to={`/my_favorites/${props.userId}/events`} name={`События`} styleFilter={true}/>
            </ul>
          </nav>
          
          <ul className={ props.yourFavoriteType !== 'events' ? style.gridfour : style.gridLine}>   
            {props.yourFavoriteLoading ? <Preloader /> : null}          
            {cards}
          </ul>
        </main>
      </div>
    </section>
  )
}

export default YourFavorites;
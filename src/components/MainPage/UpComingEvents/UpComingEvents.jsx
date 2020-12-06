import React from 'react';
import EventCard from '../../EventLoop/EventCard/EventCard';
import style from './UpComingEvents.module.css';

const UpComingEvents = (props) => {
  console.log(props);
  let freshPosts = props.itemsEvents.map(post => {
    console.log(post);
    return <EventCard 
      key={post.id}
      img={post.img_url}
      date={post.date}
      dateStart={post.pro_event_date}
      type={post.pro_event_type}
      company={post.pro_event_company_name}
      city={post.pro_event_city}
      title={post.title ? post.title.rendered : 'Загрузка...' }
      content={post.content ? post.content.rendered : 'Загрузка...' }
      id={post.id}                
    />;
    
  })

  return (
    <section className={style.wrap}>
      <ul>
        {freshPosts}
      </ul>      
    </section>
  );
}

export default UpComingEvents;
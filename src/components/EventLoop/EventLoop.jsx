import React from 'react';
import style from './EventLoop.module.css';
import Watermark from '../common/Watermark/Watermark';
import Title from '../common/Title/Title';
import Preloader from '../common/Preloader/Preloader';
import FilterTabContainer from '../common/FilterTab/FilterTabContainer';
import EventCard from './EventCard/EventCard';
import AsideLoopContainer from '../Aside/AsideLoop/AsideLoopContainer';

const EventLoop = (props) => {  
  return (
    <section className="container">
      <header className={style.header}>
        <Watermark main={true} />
        <Title
          title={'События'}
          main={true}
          uppercase={true}          
        />
        <FilterTabContainer 
          parentCat={45}
          catName={'events_cat'}
        />        
      </header>
      <div className="content_right-aside">
        <main>
          {props.eventLoading ? <Preloader /> : null}
          <ul className={style.gridLine}>            
            {Object.keys(props.items).map(item =>
              <EventCard 
                img={props.items[item].img_url}
                date={props.items[item].date}
                dateStart={props.items[item].pro_event_date}
                type={props.items[item].pro_event_type}
                company={props.items[item].pro_event_company_name}
                city={props.items[item].pro_event_city}
                title={props.items[item].title ? props.items[item].title.rendered : 'Загрузка...' }
                content={props.items[item].content ? props.items[item].content.rendered : 'Загрузка...' }
                id={props.items[item].id}     
                button={true}           
              />
            )}            
            
          </ul>
        </main>
        <AsideLoopContainer asideType={'events'} title={'Рекомендуемое'} />
      </div>
    </section>
  )
}

export default EventLoop;
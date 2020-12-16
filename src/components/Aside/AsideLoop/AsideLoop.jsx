import React from 'react';
import Title from '../../common/Title/Title';
import style from '../Aside.module.css';
import AsideBanners from './AsideBanners/AsideBanners';
import AsideEventItem from './AsideEventItem/AsideEventItem';
import AsideVacancyItem from './AsideVacancyItem/AsideVacancyItem';
import Preloader from '../../common/Preloader/Preloader';

const AsideLoop = (props) => {
  console.log(props);
  let itemsPack = Object.keys(props.items).map(item => {
    if(props.type === 'events'){
      return (
        <AsideEventItem 
          key={props.items[item].id}
          id={props.items[item].id}
          title={props.items[item].title.rendered}
          companyName={props.items[item].pro_event_company_name}
          date={props.items[item].date}
          asideLoading={props.asideLoading}
        />     
      )
    }
    if(props.type === 'vacancies'){
      return (
        <AsideVacancyItem 
          key={props.items[item].id}
          id={props.items[item].id}
          title={props.items[item].title.rendered}
          price={props.items[item].pro_vacancy_price}
          description={props.items[item].content.rendered}
          companyName={props.items[item].pro_vacancy_company_name}
          date={props.items[item].date}
          asideLoading={props.asideLoading}
        />        
      )
    }
    if(props.type === 'courses'){
      return (
        <AsideEventItem 
          key={props.items[item].id}
          link={props.items[item].pro_course_link}
          title={props.items[item].title && props.items[item].title.rendered}
          companyName={props.items[item].pro_course_organization}
          date={props.items[item].pro_course_date}
          asideLoading={props.asideLoading}
        />        
      )
    }
    if(props.type === 'banners'){
      return (
        <AsideBanners 
          asideLoading={props.asideLoading}
        />     
      )
    }
    return 'Укажите тип сайдбара'
  });

  return (
      <aside>
        <Title title={props.title} uppercase={true} small={true} />
        <div className={style.wrap}> 
          {itemsPack}
        </div>
      </aside>
  )
}

export default AsideLoop;
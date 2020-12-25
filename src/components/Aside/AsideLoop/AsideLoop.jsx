import React from 'react';
import Title from '../../common/Title/Title';
import style from '../Aside.module.css';
import AsideBanners from './AsideBanners/AsideBanners';
import AsideEventItem from './AsideEventItem/AsideEventItem';
import AsideVacancyItem from './AsideVacancyItem/AsideVacancyItem';
import AsideTVItem from './AsideTVItem/AsideTVItem';

const AsideLoop = (props) => {

  let itemsPack = Object.keys(props.items).map(item => {
    if(props.asideType === 'events'){
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
    if(props.asideType === 'vacancies'){
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
    if(props.asideType === 'courses'){
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
    if(props.asideType === 'tv_video'){
      return (
        <AsideTVItem
          key={props.items[item].id}
          id={props.items[item].id}
          image={props.items[item].img_url}
          date={props.items[item].date}          
          title={props.items[item].title && props.items[item].title.rendered}
          comment={props.items[item].comments_count ? props.items[item].comments_count: 0}
          name={props.items[item].author_name}        
          views={props.items[item].views_count ? props.items[item].views_count: 0}  
          asideLoading={props.asideLoading}
        />        
      )
    }
    if(props.asideType === 'banners'){
      return (
        <AsideBanners 
          asideLoading={props.asideLoading}
        />     
      )
    }
    return 'Укажите тип сайдбара'
  });

  return (
      <aside className={style.aside}>
        <Title title={props.title} uppercase={true} small={true} />
        <div className={style.wrap}> 
          {itemsPack}
        </div>
      </aside>
  )
}

export default AsideLoop;
import React from 'react';
import style from './CourseLoop.module.css';
import Watermark from '../common/Watermark/Watermark';
import Title from '../common/Title/Title';
import Preloader from '../common/Preloader/Preloader';
import FilterTabContainer from '../common/FilterTab/FilterTabContainer';
import AsideLoopContainer from '../Aside/AsideLoop/AsideLoopContainer';
import CourseCard from './CourseCard/CourseCard';

const CourseLoop = (props) => {  
  console.log(props);

  let items = Object.keys(props.items).map(item =>
    <CourseCard 
      img={props.items[item].img_url}
      dateStart={props.items[item].pro_course_date}
      company={props.items[item].pro_course_organization}
      title={props.items[item].title ? props.items[item].title.rendered : 'Загрузка...' }
      id={props.items[item].id}                
    />
  )

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
          {props.courseLoading ? <Preloader /> : null}
          <ul className={style.gridLine}>            
            {items}                       
          </ul>
        </main>
        <AsideLoopContainer type={'events'} title={'Рекомендуемое'} />
      </div>
    </section>
  )
}

export default CourseLoop;
import React from 'react';
import style from './VacancyLoop.module.css';
import Watermark from '../common/Watermark/Watermark';
import Title from '../common/Title/Title';
import Preloader from '../common/Preloader/Preloader';
import FilterContainer from '../common/Filter/FilterContainer';
import { NavLink } from 'react-router-dom';
import AsideLoopContainer from '../Aside/AsideLoop/AsideLoopContainer';

const VacancyLoop = (props) => {  
  return (
    <section className="container">
      <header className={style.header}>
        <Watermark main={true} />
        <Title
          title={'Поиск Специалистов'}
          main={true}
          uppercase={true}          
        />
        <FilterContainer type={'vacancies'}/>
      </header>
      <div className="content_right-aside">
        <main>
          {props.loading ? <Preloader /> : null}
          <ul className={style.vacancysBlocks}>
            
            {Object.keys(props.items).map(item => 
              (                
                <li className={style.vacancyBlock}>                  
                  <div className={style.vacancyTitleBlock}>
                    <h3 className={style.vacancyTitle}>{props.items[item].title.rendered}</h3>  
                    <span className={style.vacancyDescription}>{props.items[item].pro_vacancy_company_name}, {props.items[item].pro_vacancy_city}</span>
                  </div>
                  <div className={style.vacancyPrice}>{props.items[item].pro_vacancy_price} ₽</div>
                  <div className={style.vacancyContent}><div dangerouslySetInnerHTML={{ __html: props.items[item].content.rendered }}></div></div>
                  <NavLink to={`/vacancy/${props.items[item].id}`} className="button">Подробнее</NavLink>
                </li>
              )
            )}            
            
          </ul>
        </main>
        <AsideLoopContainer type={'vacancies'} title={'Рекомендуемое'} />
      </div>
    </section>
  )
}

export default VacancyLoop;
import React from 'react';
import style from './VacancyLoop.module.css';
import Watermark from '../common/Watermark/Watermark';
import Title from '../common/Title/Title';
import Preloader from '../common/Preloader/Preloader';
import FilterContainer from '../common/Filter/FilterContainer';
import AsideLoopContainer from '../../Aside/AsideLoop/AsideLoopContainer';
import VacancyItem from './VacancyItem/VacancyItem';

const VacancyLoop = (props) => { 
  console.log(props);
  

  let vacancyItems = Object.keys(props.items).map(item => <VacancyItem 
      title={props.items[item].title.rendered}
      companyName={props.items[item].pro_vacancy_company_name}
      city={props.items[item].pro_vacancy_city}
      priceBefore={props.items[item].pro_vacancy_price}
      priceAfter={props.items[item].pro_vacancy_price_after}
      requires={props.items[item].pro_vacancy_require}
      functions={props.items[item].pro_vacancy_function}
      conditions={props.items[item].pro_vacancy_conditions}
      id={props.items[item].id}
      key={props.items[item].id}
      
    />
  );
  
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
            {vacancyItems}                       
          </ul>
        </main>
        <AsideLoopContainer type={'vacancies'} title={'Рекомендуемое'} />
      </div>
    </section>
  )
}

export default VacancyLoop;
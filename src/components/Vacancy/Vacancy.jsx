import React from 'react';
import Title from '../common/Title/Title';
import Watermark from '../common/Watermark/Watermark';
import Preloader from '../common/Preloader/Preloader';
import style from './Vacancy.module.css';

const Vacancy = (props) => {  
  let date = new Date(Date.parse(props.vacancy.date));
  return (
    <section className="container container--small">      
      {props.loading ? <Preloader /> : null}
      <div className={style.wrap}>      
        <header className={style.header}>
          <Watermark vacancy={true} />
          <Title
            title={props.vacancy.title ? props.vacancy.title.rendered : 'Загрузка'}            
            uppercase={false}       
            maxW={'350px'}   
          />
          <div className={style.information}>
            <div className={style.description}>
              <div className={style.descBlock}>
                <span className={style.descTitle}>Компания</span>
                <span className={style.info}>{props.vacancy.pro_vacancy_company_name}</span>
              </div>    
              <div className={style.descBlock}>
                <span className={style.descTitle}>Город</span>
                <span className={style.info}>{props.vacancy.pro_vacancy_city}</span>
              </div>    
            </div>
            <div className={style.wordPrice}>
              <span className={style.descTitle}>Заработная плата:</span>
              <span className={style.price}>{props.vacancy.pro_vacancy_price} ₽</span>
            </div>
          </div>

          <div className={style.mainContent}>

            <div className={style.laggerBlock}>
              <h3 className={style.contentTitle}>Требования к кандидату:</h3>
              <div className={style.contentInfo}>
                <div className={style.contentStrings}>
                  <span className={style.descTitle}>Опыт работы:</span>
                  <span className={style.info}>{props.vacancy.pro_vacancy_expiriense}</span>
                </div>
                <div className={style.contentStrings}>
                  <span className={style.descTitle}>Образование:</span>
                  <span className={style.info}>{props.vacancy.pro_vacancy_study}</span>
                </div>
                <div className={style.contentStrings}>
                  <span className={style.descTitle}>Профессиональная область:</span>
                  <span className={style.info}>Управление персоналом</span>
                </div>
                <div className={style.contentStrings}>
                  <span className={style.descTitle}>Требования:</span>
                  <div className={style.descText}>{props.vacancy.pro_vacancy_require}</div>
                </div>
              </div>
            </div>

            <div className={style.laggerBlock}>
              <h3 className={style.contentTitle}>Условия работы:</h3>
              <div className={style.contentInfo}>

                <div className={style.contentStrings}>
                  <span className={style.descTitle}>График:</span>
                  <span className={style.info}>{props.vacancy.pro_vacancy_work_time}</span>
                </div>
                <div className={style.contentStrings}>
                  <span className={style.descTitle}>Обязанности:</span>
                  <div className={style.descText}>{props.vacancy.pro_vacancy_function}</div>
                </div>

                <div className={style.contentStrings}>
                  <span className={style.descTitle}>Условия:</span>
                  <div className={style.descText}>{props.vacancy.pro_vacancy_conditions}</div>
                </div>

                <div className={style.contentStrings}>
                  <span className={style.descTitle}>Место работы:</span>
                  <span className={style.info}>{props.vacancy.pro_vacancy_city}, {props.vacancy.pro_vacancy_work_place}</span>
                </div>

                <span className={style.vacancyDate}>Вакансия опубликована {date.getDate()}.{date.getMonth()}.{date.getFullYear()}</span>
                <div className={style.buttonsBlock}>
                  <a href="/" className="button">Откликнутся</a>
                    <button onClick={() => window.history.back()} className="link">Назад</button>
                </div>

              </div>
            </div>
            
          </div>
          
      </header>
      </div>
    </section>
  )
}

export default Vacancy;
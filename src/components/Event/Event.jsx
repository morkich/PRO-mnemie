import React from 'react';
import AsideLoopContainer from '../Aside/AsideLoop/AsideLoopContainer';
import ContentString from '../common/ContentString/ContentString';
import DateBlock from '../common/DateBlock/DateBlock';
import IconString from '../common/IconString/IconString';
import PostImage from '../common/PostImage/PostImage';
import Preloader from '../common/Preloader/Preloader';
import Title from '../common/Title/Title';
import style from './Event.module.css';

const Event = (props) => {  
  console.log(props); 
  let eventStartTime = new Date(`${props.eventData.pro_event_date} ${props.eventData.pro_event_time_start}`).toLocaleString('ru-rU', {hour: 'numeric', minute: 'numeric'});
  let eventEndTime = new Date(`${props.eventData.pro_event_date} ${props.eventData.pro_event_time_end}`).toLocaleString('ru-rU', {hour: 'numeric', minute: 'numeric'});
  let Gear = props.eventData.pro_event_type_gear ? props.eventData.pro_event_type_gear : 'Согласовывается...';
  let Spiker = props.eventData.pro_event_spicker ? props.eventData.pro_event_spicker : 'Скоро всё станет ясно';
  let LongTime = props.eventData.pro_event_long_time ? props.eventData.pro_event_long_time : 'Высчитываем..'
  let Price = props.eventData.pro_event_price ? `${props.eventData.pro_event_price} ₽` : 'Бесплатно'

  return (
    <section className="container">
      <header className={style.header}>
        <Title 
          title={'Вебинар по созданию учетных записей'} 
          main={true} 
          uppercase={false}
        />
      </header>
      <div className="content_right-aside">
        <main className={style.main}>
          {props.eventLoading ? <Preloader /> : null}
          <div className={style.infoLine}>
            <DateBlock
              type={{display: 'fulldate_number'}} 
              date={Date.parse(props.eventData.pro_event_date)} 
              style={{front: 'regular'}}
              icon={true}
            />
            <IconString
              string={`${eventStartTime} - ${eventEndTime}`}
              iconStyle={'clock'}
            />
            <IconString
              string={'Вебинар'}
              iconStyle={'folder'}
            />
          </div>
          <PostImage 
            id={props.eventData.id}
            imgUrl={props.eventData.img_url}
            imgAlt={props.eventData.title && props.eventData.title.rendered}
            typeFavorite={'event'}
          />
          <div className={style.infoBlock}>
            <span className="infoString">{Gear}</span>
            <span className="infoString">{props.eventData.pro_event_company_name}</span>
            <span className="infoString">{props.eventData.pro_event_city}</span>            
          </div>
          <ContentString
            fontSize={'13px'}
            title={'Категория'}
            string={props.eventData.category_name}
          />
          <ContentString
            fontSize={'13px'}
            stringSize={'18px'}
            title={'Спикер'}
            string={Spiker}            
          />
          <ContentString
            fontSize={'13px'}            
            title={'Описание'}
            htmlInside={true}
            string={props.eventData.content && props.eventData.content.rendered}            
          />          
          <div className={style.dataBlocks}>
            <div className={style.dataBlock}>
              <div className={style.dataTitle}>Продолжительность:</div>
              <div className={style.dataString}>{LongTime}</div>
            </div>
            <div className={style.dataBlock}>
              <div className={style.dataTitle}>Стоимость участия:</div>
              <div className={style.dataString}>{Price}</div>
            </div>            
            <button className="button">Учавствовать</button>
          </div>

          <div className={style.contactBlocks}>
            <span className={style.contactString}>Контакты ля получения  дополнительной информации по мероприятию:</span>
            <div className={style.contactBlock}>
              <div className={style.title}>тел.</div>
              <div className={style.string}>{props.eventData.pro_event_phone}</div>
            </div>
            <div className={style.contactBlock}>
              <div className={style.title}>e-mail</div>
              <div className={style.string}>{props.eventData.pro_event_mail}</div>
            </div>
            <div className={style.contactBlock}>
              <div className={style.title}>Контактное лицо</div>
              <div className={style.string}>{props.eventData.pro_event_contact_manager}</div>
            </div>
          </div>
       

        </main>
        <AsideLoopContainer 
          title={'Рекомендуемое'}
          type={'events'}
        />
      </div>
    </section>
  )
}

export default Event;
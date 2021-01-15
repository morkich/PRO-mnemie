import React from 'react';
import AsideBannersContainer from '../Aside/AsideLoop/AsideBanners/AsideBannersContainer';
import AsideMainNewsContainer from '../Aside/AsideMainNews/AsideMainNewsContainer';
import Title from '../common/Title/Title';
import Watermark from '../common/Watermark/Watermark';
import ExpertsDonateContainer from './ExpertsDonate/ExpertsDonateContainer';
import FreshPostContainer from './FreshPost/FreshPostContainer';
import style from './MainPage.module.css';
import UpComingEventsContainer from './UpComingEvents/UpComingEventsContainer';

const MainPage = (props) => {
  return (
    <>
      <section className="container">
        <header className={style.header}>
          <Watermark main={true}/>         
          <Title 
            title={'Новинки'} 
            main={true} 
            uppercase={true}
          />
        </header>
        <div className="content_right-aside">
          <main className={style.main}>
            <FreshPostContainer 
              numberPost={9}          
            />
          </main>
          <AsideMainNewsContainer/>
        </div>
      </section>
      <section className={`container ${style.upComing}`}>
        <header className={style.header}>
          <Watermark main={true}/>         
          <Title 
            title={'ближайшие события'} 
            main={true} 
            uppercase={true}
          />
        </header>
        <div className="content_right-aside">
          <main className={style.gridLine}>            
            <UpComingEventsContainer 
              numberUpcomingEvent={5}          
            />
          </main>
          <AsideBannersContainer asideType={'banner'}/>
        </div>
      </section>  
      <ExpertsDonateContainer title={'Эксперты'}/>

    </>
  );
}

export default MainPage;
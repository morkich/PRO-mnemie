import React from 'react';
import AsideLoopContainer from '../Aside/AsideLoop/AsideLoopContainer';
import Title from '../common/Title/Title';
import Watermark from '../common/Watermark/Watermark';
import FreshPostContainer from './FreshPost/FreshPostContainer';
import style from './MainPage.module.css';
import UpComingEventsContainer from './UpComingEvents/UpComingEventsContainer';

const MainPage = (props) => {
  console.log(props);
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
          <AsideLoopContainer asideType={'courses'}/>
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
          <AsideLoopContainer asideType={'banner'}/>
        </div>
      </section>  
    </>
  );
}

export default MainPage;
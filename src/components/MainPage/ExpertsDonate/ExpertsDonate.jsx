import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import Title from '../../common/Title/Title';
import Watermark from '../../common/Watermark/Watermark';
import ExpertCard from '../../Experts/ExpertCard/ExpertCard';
import style from './ExpertsDonate.module.css';

const ExpertsDonate = (props) => {

  let expertsDonate = props.expertsDonateItems.map(expert => {
    return <ExpertCard 
      key={expert.id}
      expertId={expert.id}
      avatar={expert.avatar}
      pro_lastname={expert.pro_lastname}
      pro_firstname={expert.pro_firstname}
      pro_secondname={expert.pro_secondname}
      pro_position={expert.pro_position}
      pro_workplace={expert.pro_workplace}
      pro_city={expert.pro_city}
      pro_articles={expert.pro_articles}
      pro_raiting={expert.pro_raiting}
      name={expert.name}            
    />;
    
  })

  return (
    <section className={`container ${style.donateExperts}`}>
      <header className={style.header}>
        <Watermark main={true}/>         
        <Title 
          title={props.title} 
          main={true} 
          uppercase={true}
        />
        <div className={style.span}>
          {props.span}
        </div>
      </header>
      <div className="contentNoAside">
        <main className={style.experts}>   
          <ul className={style.expertList}>
            {props.expertsDonateLoading ? <Preloader /> : null}
            {expertsDonate}
          </ul>          
        </main>
      </div>
    </section>           
  );
}

export default ExpertsDonate;
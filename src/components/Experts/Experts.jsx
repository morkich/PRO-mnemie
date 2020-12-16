import React, { useEffect, useRef} from 'react';
import style from './Experts.module.css';
import Watermark from '../common/Watermark/Watermark';
import Title from '../common/Title/Title';
import FilterContainer from '../common/Filter/FilterContainer'
import LoadingString from '../common/LoadingString/LoadingString';
import AsideLoopContainer from '../Aside/AsideLoop/AsideLoopContainer';
import ExpertCard from './ExpertCard/ExpertCard';

const Experts = (props) => {
  const infLoad = useRef();
  let infinityLoading = props.infinityLoading;

  useEffect(() => {
    let options = {}
    const observer = new IntersectionObserver(function
    (entries, observer){
      if(entries[0].isIntersecting) {
        infinityLoading();
      }    
    }, options);
    if(infLoad.current != null) {
      observer.observe(infLoad.current)
    }    
  }, [])    

  return (
    <section className="container">
      <header className={style.header}>
        <Watermark main={true}/>   
        <Title 
          title={'Эксперты'} 
          main={true} 
          uppercase={true}
        />
        <FilterContainer type={'users'} />
      </header>
      <div className="content_right-aside">
        <main className={style.main}>          
          <ul className={style.experts}>
            {
              props.experts.map(expert =>
                (
                  <ExpertCard
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
                  />
                )
              )
            }
          {props.expertsLoading ? <LoadingString /> : null}
          </ul>
          <div ref={infLoad} className={style.infLoad}></div>         
        </main>
        <AsideLoopContainer type={'tv'} title={'TV PRO Мнение'}/>
      </div>
    </section>
  )
}

export default Experts;
import React from 'react';
import style from './TVLoop.module.css';
import Watermark from '../common/Watermark/Watermark';
import Title from '../common/Title/Title';
import Preloader from '../common/Preloader/Preloader';
import FilterTabContainer from '../common/FilterTab/FilterTabContainer';
import TVCard from './TVCard/TVCard';

const TVLoop = (props) => {  

  return (
    <section className="container">
      <header className={style.header}>
        <Watermark main={true} />
        <Title
          title={'TV PRO МНЕНИЕ'}
          main={true}
          uppercase={true}          
        />
        <FilterTabContainer 
          parentCat={92}
          catName={'tv_video_cat'}
        />
      </header>
      <div className="contentNoAside">
        <main>
          {props.loadingTVLoop ? <Preloader /> : null}
          <ul className={style.gridfour}>
            
            {props.tvLoopItems.map(post => 
              (
                <TVCard
                  key={post.id}
                  id={post.id}
                  date={post.date}
                  title={post.title}  
                  category={post.category_name}        
                  image={post.img_url}
                  views={post.pro_tv_view ? post.pro_tv_view: 0}
                  comment={post.comments_count ? post.comments_count: 0}
                  idCat={post.tv_video_cat}  
                  author={post.author_name}                
                />   
              )
            )}
            
          </ul>
        </main>        
      </div>
    </section>
  )
}

export default TVLoop;
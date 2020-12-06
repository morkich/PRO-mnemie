import React from 'react';
import style from './PostLoop.module.css';
import Watermark from '../common/Watermark/Watermark';
import Title from '../common/Title/Title';
import NewsCard from '../common/NewsCard/NewsCard';
import Preloader from '../common/Preloader/Preloader';
import FilterTabContainer from '../common/FilterTab/FilterTabContainer';
import AsideLoopContainer from '../Aside/AsideLoop/AsideLoopContainer';

const PostLoop = (props) => {  
  return (
    <section className="container">
      <header className={style.header}>
        <Watermark main={true} />
        <Title
          title={props.catName}
          main={true}
          uppercase={true}          
        />
        <FilterTabContainer 
          parentCat={props.parentCat}
        />
      </header>
      <div className="content_right-aside">
        <main>
          {props.loading ? <Preloader /> : null}
          <ul className={style.news_card_box}>
            
            {props.posts.map(post => 
              (
                <NewsCard
                  key={post.id}
                  title={post.title}      
                  category={post.category_name}            
                  id={post.id}
                  image={post.img_url}
                  views={post.view_count}
                  comment={post.comments_count}
                  idCat={props.parentCat}
                />   
              )
            )}
            
          </ul>
        </main>
        {props.parentCat === '16' && <AsideLoopContainer asideType={'vacancies'} title={'Вакансии'} />}
        {props.parentCat === '25' && <AsideLoopContainer asideType={'courses'} title={'Курсы'} />}
      </div>
    </section>
  )
}

export default PostLoop;
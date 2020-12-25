import React from 'react';
import style from './PostLoop.module.css';
import Watermark from '../common/Watermark/Watermark';
import Title from '../common/Title/Title';
import NewsCard from '../common/NewsCard/NewsCard';
import Preloader from '../common/Preloader/Preloader';
import FilterTabContainer from '../common/FilterTab/FilterTabContainer';
import AsideLoopContainer from '../Aside/AsideLoop/AsideLoopContainer';
import AsideBannersContainer from '../Aside/AsideLoop/AsideBanners/AsideBannersContainer';

const PostLoop = (props) => {  
  console.log(props);
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
                  views={post.pro_views}
                  comment={post.comments_count}
                  idCat={props.parentCat}
                />   
              )
            )}
            
          </ul>
        </main>
        {props.parentCat === '16' && <AsideLoopContainer asideType={'vacancies'} title={'Вакансии'} />}
        {props.parentCat === '25' && <AsideLoopContainer asideType={'courses'} title={'Курсы'} />}
        {props.parentCat === '30' && <AsideBannersContainer asideType={'courses'} title={'Курсы'} />}
        {props.parentCat === '35' && <AsideBannersContainer asideType={'courses'} title={'Курсы'} />}
      </div>
    </section>
  )
}

export default PostLoop;
import React from 'react';
import style from './PostLoop.module.css';
import Watermark from '../common/Watermark/Watermark';
import Title from '../common/Title/Title';
import Aside from '../Aside/Aside';
import NewsCard from '../common/NewsCard/NewsCard';
import Preloader from '../common/Preloader/Preloader';
import FilterTabContainer from '../common/FilterTab/FilterTabContainer';

const PostLoop = (props) => {  
  console.log(props);
  return (
    <section className="container">
      <header className={style.header}>
        <Watermark main={true} />
        <Title
          title={'Карьера'}
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
        <Aside />
      </div>
    </section>
  )
}

export default PostLoop;
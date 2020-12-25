import React from 'react';
import NewsCard from '../../common/NewsCard/NewsCard';
import style from './FreshPost.module.css';

const FreshPost = (props) => {
  console.log(props);
  let freshPosts = props.itemsFresh.map(post => {
    return <NewsCard
        key={post.id}
        title={post.title}      
        category={post.category_name}            
        id={post.id}
        image={post.img_url}
        views={post.pro_views}
        comment={post.comments_count}
        idCat={props.parentCat}
      />   
    
  })

  return (
    <section className={style.wrap}>
      <ul>
        {freshPosts}
      </ul>      
    </section>
  );
}

export default FreshPost;
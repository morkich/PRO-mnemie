import React from 'react';
import NewsCard from '../../common/NewsCard/NewsCard';
import TVCard from '../../TVLoop/TVCard/TVCard';
import Preloader from '../../common/Preloader/Preloader';
import Title from '../../common/Title/Title';
import Watermark from '../../common/Watermark/Watermark';
import style from './ProfileData.module.css';

const ProfileData = (props) => {
  let cards;
  if(props.dataName === 'tv_video'){  
    cards = props.dataItems.map(post => <TVCard
      key={post.id}
      id={post.id}
      date={post.date}
      title={post.title}  
      image={post.img_url}
      views={post.pro_tv_view ? post.pro_tv_view: 0}
      comment={post.comments_count ? post.comments_count: 0}
      author={post.author_name}
      edit={false}
    />       
    )
  }else{  
    cards = props.dataItems.map(post => <NewsCard
      key={post.id}
      id={post.id}
      title={post.title}      
      category={post.category_name}    
      userId={props.userId}
      image={post.img_url}
      views={post.pro_views}
      comment={post.comments_count}
      idCat={props.parentCat}
      edit={false}
    />
    )  
  }

  return (
    <section className="container">
      <header className={style.header}>
        <Watermark main={true} />
        <Title
          title={`${props.dataExpertName} / ${props.dataItemsCount} статей`}
          main={true}
          uppercase={false}          
        />
      </header>
      <div className="contentNoAside">
        <main>
          {props.dataLoading ? <Preloader /> : null}
          <ul className={style.gridfour}>   
            {cards}            
          </ul>
        </main>
      </div>
    </section>
  )
}

export default ProfileData;
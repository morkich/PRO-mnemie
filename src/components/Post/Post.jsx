import React from 'react';
import AsideLoopContainer from '../Aside/AsideLoop/AsideLoopContainer';
import AuthorContainer from '../Author/AuthorContainer';
import CommentsContainer from '../common/Comments/CommentsContainer';
import DateBlock from '../common/DateBlock/DateBlock';
import InfoBlock from '../common/InfoBlock/InfoBlock';
import LikesContainer from '../common/Likes/LikesContainer';
import Preloader from '../common/Preloader/Preloader';
import TagsContainer from '../common/Tags/TagsContainer';
import Title from '../common/Title/Title';
import Watermark from '../common/Watermark/Watermark';
import style from './Post.module.css';

const Post = (props) => {

  const contentToDOM = () => {
    return {__html: `${props.postData.content.rendered}`};
  }

  return (
    <section className="container">
    <header className={style.header}>
      <Watermark main={true}/>         
      <Title 
        title={props.postData.title.rendered} 
        main={true} 
        uppercase={false}
      />
    </header>
    <div className="content_right-aside">
      <main className={style.main}>
        {props.loading ? <Preloader /> : null}
        <div className={style.wrap}>
          <div className={style.dataBlock}>
            <DateBlock 
              date={Date.parse(props.postData.date)} 
              type={{display: 'fulldate'}}
              style={{front:'mediumThink'}}
            />
            <span className={style.category}>{props.postData.category_name}</span>
            <InfoBlock 
              views={props.postData.view_count}
              comment={props.postData.comments_count} 
              darkTheme={true}
              size={'medium'}
            />
          </div>
          <div className={style.thumb}>
            <img src={props.postData.img_url} alt={props.postData.title.rendered} />
          </div>
          <AuthorContainer id={props.postData.author} />            
          <article className={style.content} dangerouslySetInnerHTML={contentToDOM()} />
               
          <div className={style.interactive}>
            <div className={style.share}></div>
            <LikesContainer
              postId={props.postData.id}
              userId={props.userId}
            />
          </div>

          <TagsContainer tagsList={props.postData.tags} />
          <CommentsContainer postId={props.postData.id} />

          <div className={style.comments}>
          </div>

        </div>
      </main>
      <AsideLoopContainer type={'post'}/>
    </div>
  </section>
  );
}

export default Post;
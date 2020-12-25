import React from 'react';
import AsideLoopContainer from '../../Aside/AsideLoop/AsideLoopContainer';
import DateBlock from '../../common/DateBlock/DateBlock';
import PostImage from '../../common/PostImage/PostImage';
import Preloader from '../../common/Preloader/Preloader';
import Title from '../../common/Title/Title';
import Watermark from '../../common/Watermark/Watermark';
import InfoBlock from '../../common/InfoBlock/InfoBlock';
import style from './TVItem.module.css';
import AuthorContainer from '../../Author/AuthorContainer';
import LikesContainer from '../../common/Likes/LikesContainer';
import TagsContainer from '../../common/Tags/TagsContainer';
import CommentsContainer from '../../common/Comments/CommentsContainer';

const TVItem = (props) => {  
  console.log(props);
  let title = props.tvItem.title ? props.tvItem.title.rendered : 'Загружается...',
  comments_count = props.tvItem.comments_count ? props.tvItem.comments_count : 0,
  view_count = props.tvItem.pro_tv_view ? props.tvItem.pro_tv_view : 0;
  
  const contentToDOM = () => {
    return {__html: `${props.tvItem.content.rendered}`};
  }

  return (
    <section className="container">
      <header className={style.header}>
        <Watermark main={true} />
        <Title 
          title={title} 
          main={true} 
          uppercase={false}
        />
      </header>      
      <div className="content_right-aside">
        <main className={style.main}>
          {props.loadingTVItem ? <Preloader /> : null}
          <div className={style.infoLine}>
            <DateBlock
              type={{display: 'fulldate'}} 
              date={Date.parse(props.tvItem.date)} 
              style={{front: 'regular'}}
              icon={false}
            />
            <InfoBlock 
              views={view_count}
              comment={comments_count} 
              darkTheme={true}
              size={'medium'}
            />            
          </div>
          <PostImage 
            id={props.tvItem.id}
            imgUrl={props.tvItem.img_url}
            imgAlt={title}
            typeFavorite={'tv_video'}
            videoId={props.tvItem.pro_tv_video_youtube_link}
            video={true}
          />     
          <div className={style.information}>
            <div className={style.raw}>
              <AuthorContainer id={props.tvItem.author} />                  
              <div className={style.interactive}>
                <div className={style.share}></div>
                <LikesContainer
                  postId={props.tvItem.id}
                  userId={props.userId}
                  typePost={'tv_video'}
                />
              </div>          
            </div>          
            <div className={style.content}>
              <article className={style.content} dangerouslySetInnerHTML={props.tvItem.content && contentToDOM()} />
            </div>
            <TagsContainer 
              tagsList={props.tvItem.tv_video_tags} 
              tagType={'tv_video_tags'}
            />
            <CommentsContainer postId={props.tvItem.id} />
          </div>         
        </main>
        <AsideLoopContainer 
          title={'Актуальное'}
          asideType={'tv_video'}
        />
      </div>
    </section>
  )
}

export default TVItem;
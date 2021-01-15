import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import Title from '../common/Title/Title';
import Watermark from '../common/Watermark/Watermark';
import style from './Page.module.css';

const Page = (props) => {
  console.log(props);
  return (
    <section className="container">
    <header className={style.header}>
      <Watermark main={true}/>         
      <Title 
        title={props.title} 
        main={true} 
        uppercase={true}
      />
    </header>
    <div className="content_right-aside">
      <main className={style.main}>
        {props.pageLoading ? <Preloader /> : null}
        <div className={style.content} dangerouslySetInnerHTML={{ __html: props.content }}></div>
      </main>
      {/* <AsideLoopContainer type={'courses'}/> */}
    </div>
  </section>
  );
}

export default Page;
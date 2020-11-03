import React from 'react';
import style from './Career.module.css';
import Watermark from '../common/Watermark/Watermark';
import Title from '../common/Title/Title';
import Aside from '../Aside/Aside';

const Career = (props) => {
  return (
    <section className="container">
      <header className={style.header}>
        <Watermark main={true} />
        <Title
          title={'Карьера'}
          main={true}
          uppercase={true}
        />
      </header>
      <div className="content_right-aside">
        <main>

        </main>
        <Aside />
      </div>
    </section>
  )
}

export default Career;
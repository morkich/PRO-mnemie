import React from 'react';
import style from './Main.module.css';
import Pharagraph from './pharagraph/Pharagraph';

const Main = () => {
    return (
      <main className={style.main}>
        <Pharagraph text="texsttt"/>
        <Pharagraph text="texsttt"/>
        <Pharagraph text="texsttt"/>
        <Pharagraph text="texsttt1231213"/>
      </main>
    );
}

export default Main;
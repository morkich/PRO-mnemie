import React from 'react';
import Title from '../../Title/Title';
import style from './Video.module.css';
import formStyle from '../../Forms/Forms.module.css'


const Video = (props) => {
    return (
      <div className={style.wrap}>
        <Title position="center" title={`Вставьте ссылку на видео`} small={true}  />
        <input onChange={props.onChange} type="text" value={props.value} className={formStyle.input} placeholder={'Ссылка YouTube'}/>
        <div onClick={props.setVideoLink} className='button' >Загрузить видео</div>
      </div>
    );
  }


export default Video;
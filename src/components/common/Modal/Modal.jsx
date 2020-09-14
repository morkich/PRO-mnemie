import React from 'react';
import LoginContainer from '../Login/LoginContainer';
import Watermark from '../Watermark/Watermark';
import style from './Modal.module.css';
import closeImg from '../../../assets/img/close.svg';

const Modal = (props) => {
  return (
    <div className={style.wrap}>
      <div className={style.content}>
        <Watermark />        
          <button className={style.close}><img src={closeImg} alt=""/></button>
        <LoginContainer />
      </div>
    </div>
  );
}

export default Modal;
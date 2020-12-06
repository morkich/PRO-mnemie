import React from 'react';
import Watermark from '../Watermark/Watermark';
import style from './Modal.module.css';
import closeImg from '../../../assets/img/close.svg';
import LoginContainer from './Login/LoginContainer';
import RegisterContainer from './Register/RegisterContainer';

const Modal = (props) => {

  let modal = 
    <div className={style.wrap}>
      <div className={style.content}>
        <Watermark />        
          <button onClick={props.modalClose} className={style.close}><img src={closeImg} alt=""/></button>
          {props.type === 'auth' && <LoginContainer />}              
          {props.type === 'register' && <RegisterContainer />}              
      </div>
    </div>;

  return (
    <> 
      {props.vision && modal}
      <button onClick={props.modalOpen} className="button">Авторизоваться</button>
    </>
  );
}

export default Modal;
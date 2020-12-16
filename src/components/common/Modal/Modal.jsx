import React from 'react';
import Watermark from '../Watermark/Watermark';
import style from './Modal.module.css';
import closeImg from '../../../assets/img/close.svg';
import LoginContainer from './Login/LoginContainer';
import RegisterContainer from './Register/RegisterContainer';
import DeleteContainer from './Delete/DeleteContainer';

const Modal = (props) => {

  let modal = 
    <div className={style.wrap}>
      <div className={style.content}>
        <Watermark />        
          <button onClick={props.modalClose} className={style.close}><img src={closeImg} alt=""/></button>          
          {props.type === 'auth' && <LoginContainer />}              
          {props.type === 'register' && <RegisterContainer />}              
          {props.type === 'delete' && <DeleteContainer deleteId={props.deleteId} deleteName={props.deleteName} userId={props.userId}/>}              
      </div>
    </div>;

  return (
    <> 
      {props.vision && modal}
      {!props.clean && <button onClick={props.modalOpen} className={`button ${props.link && style.link} ${props.string && style.string}`}>{props.buttonText ? props.buttonText : 'Авторизоваться'}</button>}      
    </>
  );
}

export default Modal;
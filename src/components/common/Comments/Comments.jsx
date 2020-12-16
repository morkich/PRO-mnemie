import React from 'react';
import Raiting from '../../Profile/Raiting/Raiting';
import CommentDataReduxForm from './CommentDataForm/CommentDataForm';
import style from './Comments.module.css';
import ModalContainer from '../Modal/ModalContainer';

const Comments = (props) => {

  let commentsPack = Object.keys(props.comments).map(comment => (
    <div className={style.read} key={props.comments[comment].id}>
      <div className={style.data}>
        <div className={style.avatar}>
          <img src={props.comments[comment].avatar_url_pro} alt={`${props.comments[comment].user_firstname_pro} ${props.comments[comment].user_lastname_pro}`} title={`${props.comments[comment].user_lastname_pro} ${props.comments[comment].user_firstname_pro}`} />
        </div>
        <div className={style.info}>
          <span className={style.name}>{props.comments[comment].user_lastname_pro} {props.comments[comment].user_firstname_pro}</span>
          <span className={style.position}>{props.comments[comment].user_position_pro}</span>
          <Raiting
            short={true}
            points={5}
          />

        </div>
      </div>
      <div className={style.content} dangerouslySetInnerHTML={{ __html: props.comments[comment].content.rendered }}></div>
    </div>
  ));

  let authBlock = (
    <div className={style.write}>
      <div className={style.data}>
        <div className={style.avatar}>
          <img src={props.userAvatar} alt={props.userName} title={`${props.lastName} ${props.firstName}`} />
        </div>
        <div className={style.info}>
          <span className={style.name}>{props.lastName} {props.firstName}</span>
          <span className={style.position}>{props.userPosition}</span>
          <Raiting
            short={true}
            points={5}
          />
        </div>
      </div>
      <CommentDataReduxForm
        onSubmit={props.onSubmit}
        loading={props.loading}
      />
    </div>
  )

  let dontAuthBlock = (
    <div className={style.write}>
      <div className={style.data}>
        <div className={style.avatar}>
          <img src={props.userAvatar} alt={props.userName} title={`${props.lastName} ${props.firstName}`} />
        </div>
        <div className={style.textArea}>
          <textarea placeholder='Оставьте комментарий...' />        
          <span className={style.string}>    
            <ModalContainer 
              buttonText={'Авторизуйтесь'}
              type={'auth'}
              link={true}
            />чтобы комментировать статью
          </span>
        </div>          
      </div>
    </div>
  )

  return (
    <div className={style.wrap}>
      <h4 className={style.title}>Комментарии ({props.comments.length})</h4>
      {props.logIn ? authBlock : dontAuthBlock}
      <div className={style.comments}>
        {commentsPack}
      </div>
    </div>
  );
}

export default Comments;
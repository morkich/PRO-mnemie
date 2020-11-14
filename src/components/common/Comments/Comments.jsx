import React from 'react';
import Raiting from '../../Profile/Raiting/Raiting';
import Preloader from '../Preloader/Preloader';
import CommentDataReduxForm from './CommentDataForm/CommentDataForm';
import style from './Comments.module.css';

const Comments = (props) => {
  let commentsPack = Object.keys(props.comments).map( comment => (
      <div className={style.read}>
        <div className={style.data}>
          <div className={style.avatar}>
            <img src={props.comments[comment].avatar_url_pro} alt={`${props.comments[comment].user_firstname_pro} ${props.comments[comment].user_lastname_pro}`} title={`${props.comments[comment].user_lastname_pro} ${props.comments[comment].user_firstname_pro}`}/>
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
        <div className={style.content} dangerouslySetInnerHTML={{__html: props.comments[comment].content.rendered}}></div>        
      </div>
    )        
  )

  return (
    <div className={style.wrap}>
      <h4 className={style.title}>Комментарии ({props.comments.length})</h4>
      <div className={style.write}>
        <div className={style.data}>
          <div className={style.avatar}>
            <img src={props.userAvatar} alt={props.userName} title={`${props.lastName} ${props.firstName}`}/>
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
      <div className={style.comments}>        
        {commentsPack}
      </div>
      
    </div>

  );
}

export default Comments;
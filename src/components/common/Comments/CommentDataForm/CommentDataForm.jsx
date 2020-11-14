import React from 'react';
import TextArea from '../../Forms/TextArea/TextArea';
import style from '../../Forms/Forms.module.css';
import { Field, reduxForm } from 'redux-form';
import Preloader from '../../Preloader/Preloader';


const CommentDataForm = (props) => {
  return (
    <form className={style.comment_form} onSubmit={props.handleSubmit}>
      <Field
        component={TextArea}
        name={'commentBody'}
        id={'commentBody'}   
        height={100}          
      />
      <div className={style.buttons_comment_form}>
        
        <button className={`button`}>{props.loading ? <Preloader /> : 'Отправить'}</button>
      </div>          
    </form>
  )
}

const CommentDataReduxForm = reduxForm({
  form: 'comment-data'
})(CommentDataForm)

export default CommentDataReduxForm;
import React from 'react';
import style from './AddNewVideo.module.css';
import { Field, reduxForm } from 'redux-form';
import TextArea from '../../common/Forms/TextArea/TextArea';
import FormError from '../../common/Forms/FormError/FormError';
import { required } from '../../../utils/validators/validators';
import Preloader from '../../common/Preloader/Preloader';
import InputTitle from '../../common/Forms/InputTitle/InputTitle';
import AddPostVideoContainer from '../../common/Forms/AddPostVideo/AddPostVideoContainer';
import AddPostImageContainer from '../../common/Forms/AddPostImage/AddPostImageContainer';
import AddTagsContainer from '../../common/Forms/AddTags/AddTagsContainer';

const AddNewVideoForm = (props) => {  
  return (
    <form onSubmit={props.handleSubmit}>
      {props.postLoading ? <Preloader /> : null}
      <Field
        component={InputTitle}
        validate={[required]}
        name={'postTitle'}
        placeholder={'Заголовок'}
        title={props.postTitle}
        setTitle={props.setTitle}        
      />      
      <AddPostVideoContainer
        postVideoId={props.addVideoId}
        userId={props.userId}
      />          
      <div className={style.formGroup}>
        <label className={style.label} htmlFor="videoDescription">Описание:</label>  
        <Field
          component={TextArea}
          validate={[required]}
          placeholder={'Короткий текст, который появится под опубликованным видео.'}
          name={'videoDescription'}
          id={'videoDescription'}
          startHeight={100}
        /> 
      </div>
      <div className={style.formGroup}>
        <label className={style.label} htmlFor="videoCover">Обложка:</label>  
        <AddPostImageContainer
          postImageUrl={props.postImage}
          userId={props.userId}
          small={true}
          postType={'tv_video'}
        /> 
      </div>
      <div className={style.formGroup}>
        <label htmlFor="videoTags"></label>
        <AddTagsContainer
          startTags={props.postTags}
          name={'postTags'}
          id={'postTags'}
          tagsType={'tv_video_tags'}
        />
      </div>


      {props.error && <FormError errorText={props.error}/>}      
      <button className="button" disabled={props.postLoading} type="submit">
        {props.videoLoading ? <Preloader />: null}
        {props.itemId ? 'Редактировать': 'Опубликовать'}
      </button>
    </form>
  );
}

const AddNewVideoReduxForm = reduxForm({
  form: 'addNewVideo',
  enableReinitialize: true
})(AddNewVideoForm);

const AddNewVideo = (props) => {
  return (
    <div className="container">
      <section className={`content_right-aside`}>
        <div className={style.wrap}>
          <AddNewVideoReduxForm 
            onSubmit={props.onSubmit} 
            initialValues={props.initialValues}
            videoLoading={props.videoLoading}
            addVideoId={props.addVideoId}
          />
        </div>
      </section>
    </div>
  );
}

export default AddNewVideo;
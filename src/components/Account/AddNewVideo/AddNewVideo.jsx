import React from 'react';
import style from './AddNewVideo.module.css';
import TextArea from '../../common/Forms/TextArea/TextArea';
import Preloader from '../../common/Preloader/Preloader';
import InputTitle from '../../common/Forms/InputTitle/InputTitle';
import AddPostVideoContainer from '../../common/Forms/AddPostVideo/AddPostVideoContainer';
import AddPostImageContainer from '../../common/Forms/AddPostImage/AddPostImageContainer';
import AddTagsContainer from '../../common/Forms/AddTags/AddTagsContainer';
import { Field, withFormik } from 'formik';

const AddNewVideoForm = (props) => {  

  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={props.handleSubmit}>
      {props.postLoading ? <Preloader /> : null}
      <Field
        component={InputTitle}
        name={'postTitle'}
        placeholder={'Заголовок'}
        setTitle={props.setTitle}   
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}         
      />      
      <AddPostVideoContainer
        postVideoId={props.addVideoId}
        userId={props.userId}
        name={'postVideo'}
        id={'postVideo'}        
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}   
      />          
      <div className={style.formGroup}>
        <label className={style.label} htmlFor="videoDescription">Описание:</label>  
        <Field
          component={TextArea}
          placeholder={'Короткий текст, который появится под опубликованным видео.'}
          name={'videoDescription'}
          id={'videoDescription'}
          startHeight={100}
          onChange={handleChange}
          onBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}     
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

      {/* {props.error && <FormError errorText={props.error}/>}       */}
      <button className="button" disabled={props.postLoading} type="submit">
        {props.videoLoading ? <Preloader />: null}
        {props.itemId ? 'Редактировать': 'Опубликовать'}
      </button>
    </form>
  );
}


const AddNewVideo = (props) => {
  return (
    <div className="container">
      <section className={`content_right-aside`}>
        <div className={style.wrap}>
          <NewVideoFormSettings 
            onSubmit={props.onSubmit} 
            userId={props.userId}
            initialValues={props.initialValues}
            videoLoading={props.videoLoading}
            addVideoId={props.addVideoId}
            postTitle={props.postTitle}
            postVideo={props.postVideo}
            postImage={props.postImage}
            postContent={props.postContent}
            postTags={props.postTags}
            postVideoId={props.postVideoId}
          />
        </div>
      </section>
    </div>
  );
}

const NewVideoFormSettings = withFormik({  
  mapPropsToValues: (props) => ({ 
      postTitle: !props.userId ? props.postTitle : '', 
      postVideo: !props.userId ? props.postVideo : '',
      postImageUrl: !props.userId ? props.postImage : '',
      videoDescription: !props.userId ? props.postContent.replace(/<\/?[^>]+(>|$)/g, ""): '',
      postTags: !props.userId ? props.postTags : '',
      postVideoId: !props.userId ? props.postVideoId[2] : ''
    }),
  validate: (props) => {
      console.log(props);
    },
  handleSubmit: (values, { props, ...actions }) => {
    console.log(values);
      // props.onSubmit(values)
    },
  displayName: 'AddNewPost',
  enableReinitialize: true
})(AddNewVideoForm);

export default AddNewVideo;
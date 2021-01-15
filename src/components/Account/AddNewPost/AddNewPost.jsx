import React from 'react';
import style from './AddNewPost.module.css';
import TextArea from '../../common/Forms/TextArea/TextArea';
import FormError from '../../common/Forms/FormError/FormError';
import AddPostImageContainer from '../../common/Forms/AddPostImage/AddPostImageContainer';
import AddTagsContainer from '../../common/Forms/AddTags/AddTagsContainer';
import Preloader from '../../common/Preloader/Preloader';
import InputTitle from '../../common/Forms/InputTitle/InputTitle';
import CategorySelectContainer from '../../common/Forms/CategorySelect/CategorySelectContainer';
import { Field, withFormik } from 'formik';

const AddNewPostForm = (props) => {  

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
    <form onSubmit={handleSubmit}>
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
      <CategorySelectContainer
        name={'postCategory'}
        placeholder={'Категория'}
        spy={true}
        postCategoryName={props.postCategoryName}
        postCategorys={props.postCategorys}
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}     
      />
      <AddPostImageContainer
        postImageUrl={props.postImage}
        userId={props.userId}
        name={'postImage'}
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}     
      />         
      <Field
        component={TextArea}
        placeholder={'Текст'}
        name={'postContent'}
        id={'postContent'}
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}     
      />      
      <AddTagsContainer
        startTags={props.postTags}
        name={'postTags'}
        id={'postTags'}
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}     
      />
      {props.error && <FormError errorText={props.error}/>}      
      
      <button className="button" disabled={props.postLoading} type="submit">
        {props.postLoading ? <Preloader />: null}
        {props.itemId ? 'Редактировать': 'Опубликовать'}
      </button>
    </form>
  );
}

const AddNewPost = (props) => {
  return (
    <div className="container">
      <section className={`content_right-aside`}>
        <div className={style.wrap}>
          <NewPostFormSettings 
            userId={props.userId}
            itemId={props.itemId}
            onSubmit={props.onSubmit} 
            postTitle={props.postTitle}
            postCategorys={props.postCategorys}
            postCategoryName={props.postCategoryName}
            postImage={props.postImage}
            postContent={props.postContent}
            postTags={props.postTags}
            postLoading={props.postLoading}    
          />
        </div>
      </section>
    </div>
  );
}

const NewPostFormSettings = withFormik({
  mapPropsToValues: (props) => ({ 
      postTitle: props.postTitle, 
      postCategory: props.postCategorys[0],
      postImage: props.addPostImage,
      postContent: props.postContent.replace(/<\/?[^>]+(>|$)/g, ""),
      postTags: '',
    }),
  validate: (props) => {
      console.log(props);
    },
  handleSubmit: (values, { props, ...actions }) => {
      props.onSubmit(values)
    },
  displayName: 'AddNewPost',
  enableReinitialize: true
})(AddNewPostForm);

export default AddNewPost;
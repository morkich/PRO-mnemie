import React from 'react';
import style from './AddNewPost.module.css';
import { Field, reduxForm } from 'redux-form';
import TextArea from '../../common/Forms/TextArea/TextArea';
import FormError from '../../common/Forms/FormError/FormError';
import { required } from '../../../utils/validators/validators';
import AddPostImageContainer from '../../common/Forms/AddPostImage/AddPostImageContainer';
import AddTagsContainer from '../../common/Forms/AddTags/AddTagsContainer';
import Preloader from '../../common/Preloader/Preloader';
import InputTitle from '../../common/Forms/InputTitle/InputTitle';
import CategorySelectContainer from '../../common/Forms/CategorySelect/CategorySelectContainer';

const AddNewPostForm = (props) => {
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
      <CategorySelectContainer
        name={'postCategory'}
        placeholder={'Категория'}
        onChange={props.onChange}
        spy={true}
        postCategoryName={props.postCategoryName}
        postCategorys={props.postCategorys}
      />
      <AddPostImageContainer
        postImageUrl={props.postImage}
        userId={props.userId}
      />         
      <Field
        component={TextArea}
        validate={[required]}
        placeholder={'Текст'}
        name={'postContent'}
        id={'postContent'}
      />      
      <AddTagsContainer
        startTags={props.postTags}
        name={'postTags'}
        id={'postTags'}
      />
      {props.error && <FormError errorText={props.error}/>}      
      <button className="button" disabled={props.postLoading} type="submit">{props.postLoading ? <Preloader />: null}
{props.itemId ? 'Редактировать': 'Опубликовать'}</button>
    </form>
  );
}

const AddNewPostReduxForm = reduxForm({
  form: 'addNewPost',
  enableReinitialize: true
})(AddNewPostForm);

const AddNewPost = (props) => {
  return (
    <div className="container">
      <section className={`content_right-aside`}>
        <div className={style.wrap}>
          <AddNewPostReduxForm 
            userId={props.userId}
            itemId={props.itemId}
            onSubmit={props.onSubmit} 
            onChange={props.onChange}
            changeForm={props.changeForm}
            onChange={props.onChange}
            checkPass={props.checkPass}
            postTitle={props.postTitle}
            postCategorys={props.postCategorys}
            postCategoryName={props.postCategoryName}
            postImage={props.postImage}
            postContent={props.postContent}
            postTags={props.postTags}
            postLoading={props.postLoading}    
            setTitle={props.setTitle}      
            initialValues={props.initialValues}
          />
        </div>
      </section>
    </div>
  );
}

export default AddNewPost;
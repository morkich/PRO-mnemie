import React from 'react';
import TextArea from '../../Forms/TextArea/TextArea';
import style from '../../Forms/Forms.module.css';
import Preloader from '../../Preloader/Preloader';
import { Field, Formik } from 'formik';

const CommentDataForm = (props) => {

  const submitForm = (values, { setSubmitting }) => {    
    props.onSubmit(values)
    setSubmitting(false);
  }

  return (
    <Formik
    initialValues={{ 
      commentBody:'',
    }}    
    onSubmit={submitForm}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (        
        <form className={style.comment_form} onSubmit={handleSubmit}>
          <Field
            component={TextArea}
            name={'commentBody'}
            id={'commentBody'}   
            height={100}          
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}   
          />
          <div className={style.buttons_comment_form}>

            <button className={`button`}>{props.loading ? <Preloader /> : 'Отправить'}</button>
          </div>          
        </form>
      )}
    </Formik>
  )
}

export default CommentDataForm;
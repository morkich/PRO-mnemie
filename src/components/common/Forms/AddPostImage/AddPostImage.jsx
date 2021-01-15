import React from 'react';
import Preloader from '../../Preloader/Preloader';
import style from '../Forms.module.css';

const AddPostImage = (props) => {
  return (    
    <div className={`${style.imageBlock} ${props.small && style.imageBlockSmall}`}>
      {props.postImageLoading ? <Preloader /> : null}
      <img src={props.postImageUrl} alt="" />
      <div className={style.addImageInput}>
        <svg width="40" height="31" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.4359 5.29044H30.1687L28.62 1.26076C28.3949 0.67483 27.8208 0.286743 27.1795 0.286743H12.8205C12.1792 0.286743 11.6051 0.67483 11.38 1.26076L9.83128 5.29044H2.5641C1.148 5.29044 0 6.41057 0 7.79229V27.8071C0 29.1888 1.148 30.3089 2.5641 30.3089H37.4359C38.852 30.3089 40 29.1888 40 27.8071V7.79229C40 6.41057 38.852 5.29044 37.4359 5.29044ZM20 8.29266C25.3726 8.29266 29.7436 12.5575 29.7436 17.7997C29.7436 23.0419 25.3726 27.3067 20 27.3067C14.6274 27.3067 10.2564 23.0419 10.2564 17.7997C10.2564 12.5575 14.6274 8.29266 20 8.29266Z" fill={props.small ? '#AECAD5' : 'white'}/>
          <path d="M13.333 17.7997C13.333 21.3864 16.3237 24.3044 19.9997 24.3044C23.6757 24.3044 26.6663 21.3864 26.6663 17.7997C26.6663 14.213 23.6757 11.2949 19.9997 11.2949C16.3237 11.2949 13.333 14.213 13.333 17.7997Z" fill={props.small ? '#AECAD5' : 'white'}/>
        </svg>
        <span className={style.butName}>Добавить фото</span>
        <input 
          name={props.name} 
          onChange={props.changeImage} 
          type="file" 
          className={style.addPostImageBut}
        />
      </div>    
    </div>
  )
}

export default AddPostImage
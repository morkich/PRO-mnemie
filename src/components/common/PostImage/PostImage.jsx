import React from 'react';
import FavoritesContainer from '../Favorites/FavoritesContainer';
import style from './PostImage.module.css'

const PostImage = (props) => {
  return (
    <div className={style.wrap}>
      <img src={props.imgUrl} alt={props.imgAlt} />
      <div className={style.opacity}></div>
      <FavoritesContainer       
        expertId={props.id} 
        type={props.typeFavorite}
      />  
    </div>
  );
}

export default PostImage;
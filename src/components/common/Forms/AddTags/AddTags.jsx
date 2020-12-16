import React from 'react';
import Preloader from '../../Preloader/Preloader';
import style from './AddTags.module.css';

const AddTags = (props) => {
  
  let allTags = props.allTags.map( tag => <option value={tag.name} id={tag.id} key={tag.id} />)
  let tagsReady = props.addTagsItems ? props.addTagsItems.map( tag => <span className={style.tag} id={tag.id}>{tag.name}<div id={tag.id} onClick={props.deleteTag} className={style.deleteTag}>&times;</div></span>) : null;
  
  return (    
    <div className={style.wrap}>
      <div className={style.tagsBox}>
        {tagsReady}
        {props.addTagsLoading ? <div className={style.preloaderTag}><Preloader /></div>: null}
        </div>
      <input type="text"
        name={'addTag'}
        placeholder={'теги через запятую'}
        className={`${style.input}`}
        list={'allTagsList'}
        onChange={props.writeTag}
      />
      <datalist id={'allTagsList'}>
        {allTags}
      </datalist>
    </div>
  )
}

export default AddTags
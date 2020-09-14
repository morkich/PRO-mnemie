import React from 'react';
import TextArea from '../../common/Forms/TextArea/TextArea';
import style from './UserInfo.module.css';

const UserInfo = (props) => {
  return (
    <div className={style.text_box}>
      <TextArea 
        value={props.about}
        placeholder={'Напишите о себе'}
      />      
    </div>    
  )
}

export default UserInfo
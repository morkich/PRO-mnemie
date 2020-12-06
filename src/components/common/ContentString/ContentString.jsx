import React from 'react';
import style from './ContentString.module.css'

const ContentString = (props) => {
  const styleWrap = {
    fontSize: props.fontSize ? props.fontSize: '12px',    
  }
  const styleString = {
    fontSize: props.stringSize ? props.stringSize: styleWrap.fontSize, 
  }
 
  return (
    <div className={style.contentStrings} style={styleWrap}>
      <span className={style.descTitle}>{props.title}</span>      
      {props.htmlInside 
        ? (<div className={style.descText} style={styleString} dangerouslySetInnerHTML={{ __html: props.string }}></div>) 
        : (<div className={style.descText} style={styleString}>{props.string}</div>)
      }
    </div>   
  );
}

export default ContentString;
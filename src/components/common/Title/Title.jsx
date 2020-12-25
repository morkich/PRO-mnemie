import React from 'react';
import style from './Title.module.css';

const Title = (props) => {
  const styleThisTitle = {
    textAlign: props.position,
    textTransform: props.uppercase? 'uppercase': 'none',    
    marginBottom: props.main? '25px': 'none',
    fontSize: props.small? '28px': '36px', 
    lineHeight: props.small? '29px': '37px', 
    maxWidth: props.maxW? props.maxW : 'auto'
  }

  return (
    <h1 className={style.title} style={styleThisTitle}>{props.title}</h1>
  )
}

export default Title
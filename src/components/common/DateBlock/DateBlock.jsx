import React from 'react';
import Icon from '../Icon/Icon';
import style from './DateBlock.module.css'

const DateBlock = (props) => {
  let newDate = new Date(props.date);
  let date = newDate.toLocaleString('ru-rU', {day: 'numeric', month: 'long' , year: 'numeric'});
  let dateClass = style.small;
  let icon = props.icon ? <Icon style={{iconStyle: 'calendar'}}/> : null;


  if (props.style.front === 'regular'){
    dateClass = style.regular;
  }
  if (props.style.front === 'medium'){
    dateClass = style.medium;
  }
  if (props.style.front === 'mediumThink'){
    dateClass = style.mediumThink;
  }
  if (props.style.front === 'large'){
    dateClass = style.large;
  }
  
  if(props.type.display === 'shortdate') {
    date = newDate.toLocaleString('ru-rU', {day: 'numeric', month: 'long'});
  }
  if(props.type.display === 'fulldate') {
    date = newDate.toLocaleString('ru-rU', {day: 'numeric', month: 'long' , year: 'numeric'});
  }
  if(props.type.display === 'fulldate_number') {
    date = newDate.toLocaleString('ru-rU', {day: 'numeric', month: 'numeric' , year: 'numeric'});
  }

  return (
    <div className={`${dateClass} ${style.date}`}>
      {icon}{date}
    </div>
  );
}

export default DateBlock;
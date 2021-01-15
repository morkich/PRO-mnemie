import React from 'react';
import style from '../Forms.module.css';

const DatePickerWrap = (props) => {
  const hasError = props.touched[props.field.name] && props.errors[props.field.name];

  return (    

    <div className={`${style.formControl} ${hasError && style.error}`}>
      {/* <DatePicker 
      // {...props.input}
      value={selectedDate} onChange={handleDateChange}
      /> */}
asdasdasd
      {hasError && <span>{hasError}</span>}
    </div>

  )
}

export default DatePickerWrap;
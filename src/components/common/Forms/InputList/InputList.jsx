import React from 'react';
import style from '../Forms.module.css';


const InputList = (props) => {

  let hasError = props.errors[props.field.name];
  let optionReady = props.datalist.map((item, i) => <option value={item} key={i} />);

  return (
    <div className={`${style.formControl} ${style.formControlFixed} ${hasError && style.error}`}>
      <input              
        name={props.field.name}
        placeholder={props.placeholder}
        className={`${style.input} ${style.inputIcon}`}
        list={props.field.name}
        onChange={props.onChange}
        onBlur={props.onBlur}                
        value={props.values[props.field.name]}
      />
      <div className={`${style.formIconBox} ${style.deltaIcon}`}></div>
      <datalist id={props.field.name}>
        {optionReady}
      </datalist>
      {hasError && <span>{hasError}</span>}
    </div>
  )
}

export default InputList;
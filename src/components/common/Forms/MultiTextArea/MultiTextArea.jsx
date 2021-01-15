import { Field } from 'formik';
import React, { useEffect, useState } from 'react';
import { required } from '../../../../utils/validators/validators';
import style from '../Forms.module.css';
import TextArea from '../TextArea/TextArea';

const MultiTextArea = (props) => { 

  let inputsCount = props.field.value;
  let [countAreas, setCountAreasState] = useState(0);
  const hasError = props.touched[props.field.name] && props.errors[props.field.name];
  const areas = [];

  useEffect(() => {
    (inputsCount && inputsCount > 0) && setCountAreasState(inputsCount - 1);
  },[inputsCount])


  const addArea = () => {    
    setCountAreasState(countAreas + 1);
  };

  for (let i = 0; i < countAreas; i++) {
    areas.push( <Field
      key={i + 1}
      component={TextArea}
      name={`${props.nameFunctions}_${i + 1}`}
      id={`${props.nameFunctions}_${i + 1}`}
      startHeight={40}
      dataCount={i + 1}
      dataName={props.nameFunctions}
    />   
    );
  };

  return (
    <div className={`${style.formControl} ${hasError && style.error}`}>
      <Field
        key={0}
        component={TextArea}
        validate={[required]}
        name={`${props.nameFunctions}_0`}        
        id={`${props.nameFunctions}_0`}
        startHeight={40}
        placeholder={props.placeholder}
        dataCount={0}
        dataName={props.nameFunctions}
        initialValues={inputsCount && inputsCount[0]}
      />    
      {areas}          
      <span className={style.link} onClick={addArea}>{props.addLinkText}</span>
      {hasError && <span>{hasError}</span>}
    </div>
  )
}

export default MultiTextArea;
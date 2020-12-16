import React from 'react';

const Hidden = (props) => {  
  return (    
    <input
      {...props.input}
      name={props.name}
      type={'hidden'}
      id={props.id}
      value={props.value}
    />
  )
}

export default Hidden
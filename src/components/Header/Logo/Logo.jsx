import React from 'react';

const Logo = (props) => {
  return (
    <div dangerouslySetInnerHTML={{__html: props.logo}}></div>
  );
}

export default Logo; 
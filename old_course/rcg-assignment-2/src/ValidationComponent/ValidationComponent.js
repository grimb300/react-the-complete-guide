import React from 'react';

const validationComponent = ( props ) => {
  const validationMsg = props.length < 5 ? 'Text too short' : 'Text long enough';
  return (
    <p>{ validationMsg }</p>
  );
};

export default validationComponent;
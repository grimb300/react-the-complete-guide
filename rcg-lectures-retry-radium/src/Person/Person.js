import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = ( props ) => {
  const personStyle = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }

  return (
    <div className="Person" style={ personStyle } >
      <p onClick={ props.click }>I'm { props.name } and I am { props.age } years old!</p>
      <input type="text" onChange={ props.changed } value={ props.name } />
    </div>
  );
};

export default Radium( person );
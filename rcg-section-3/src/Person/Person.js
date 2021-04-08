import React from 'react';
// import Radium, { StyleRoot } from 'radium';
import Radium from 'radium';
import './Person.css';

const person = ( props ) => {
  const style = {
    backgroundColor: 'lightblue',
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };

  return (
    <div className="Person" style={ style } >
      <p onClick={ props.click }>I'm { props.name } and je suis { props.age } ans!</p>
      <p>{ props.children }</p>
      <input type="text" onChange={ props.changed } value={ props.name } />
    </div>
  );
}

export default Radium( person );
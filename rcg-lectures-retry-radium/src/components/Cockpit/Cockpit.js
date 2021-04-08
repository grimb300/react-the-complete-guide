import React from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
  const buttonClasses = [ classes.Button ];
  if ( props.showPersons ) {
    buttonClasses.push( classes.Red );
  }

  const paragraphClasses = [];
  if ( props.numPersons <= 2 ) {
    paragraphClasses.push( classes.red );
  }
  if ( props.numPersons <= 1 ) {
    paragraphClasses.push( classes.bold );
  }

  console.log( '[Cockpit.js] rendering...' );
  return (
    <div className={ classes.Cockpit }>
      <h1>{ props.title }</h1>
      <p className={ paragraphClasses.join( ' ' ) } >This is really working!</p>
      <button
        className={ buttonClasses.join( ' ' ) }
        onClick={ () => props.toggle() } >Toggle Persons</button>
    </div>
  );

};

export default cockpit;
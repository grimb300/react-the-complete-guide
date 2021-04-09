import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
  // Last argument is an array of props that must change for the function to be run
  useEffect( () => {
    console.log( '[Cockpit.js] useEffect' );

    // Fake http request
    setTimeout(() => {
      alert( 'Saved date to cloud!' );
    }, 1000);
    // Return a function that will run when the component unmounts
    return () => {
      console.log(' [Cockpit.js] cleanup work in useEffect' );
    };
  }, [ props.numPersons ] );

  // An empty array for the dependencies, then it runs only once
  useEffect( () => {
    console.log( '[Cockpit.js] This useEffect runs only once' );
  }, [] );

  // Omitting the dependencies runs every time
  useEffect( () => {
    console.log( '[Cockpit.js] This useEffect runs every time' );
    return () => {
      console.log( '[Cockpit.js] This cleanup runs every time... the Cockpit unmounts' );
    };
  }, );

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

// Using React.memo re-renders only when something changes
export default React.memo( cockpit );
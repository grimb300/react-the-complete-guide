import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'foo', name: 'Max', age: 28 },
      { id: 'bar', name: 'Manu', age: 29 },
      { id: 'baz', name: 'Stephanie', age: 26 }
    ],  
    showPersons: false
  };  

  nameChangedHandler = ( event, id ) => {
    // Get the index of the person being updated
    const personIndex = this.state.persons.findIndex( ( p ) => {
      return p.id === id;
    } );  

    // make a copy of that person and modify the name
    const person = { ...this.state.persons[ personIndex ] };
    person.name = event.target.value;

    // Make a copy of the persons array and modify the person
    const persons = [ ...this.state.persons ];
    persons[ personIndex ] = person;

    // Update the state
    this.setState( { persons: persons } );
  }  

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: ! doesShow } );
  };  

  deletePersonHandler = ( personIndex ) => {
    const persons = [ ...this.state.persons ];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  };  

  render() {
    const buttonClasses = [ classes.Button ];
  
    let persons = null;

    if ( this.state.showPersons ) {
      buttonClasses.push( classes.Red );

      persons = (
        <div>
          {
            this.state.persons.map( ( person, index ) => {
              return (
                <Person
                  name={ person.name }
                  age={ person.age }
                  key={ person.id }
                  click={ () => this.deletePersonHandler( index ) }
                  changed={ ( event )=> this.nameChangedHandler( event, person.id ) } />
              );    
            } )        
          }
        </div>
      );
    }  

    const paragraphClasses = [];
    if ( this.state.persons.length <= 2 ) {
      paragraphClasses.push( classes.red );
    }  
    if ( this.state.persons.length <= 1 ) {
      paragraphClasses.push( classes.bold );
    }  

    return (
      <div className={ classes.App }>
        <h1>Hi, I'm a React App</h1>
        <p className={ paragraphClasses.join( ' ' ) } >This is really working!</p>
        {/* <button
          style={ buttonStyle }
          onClick={ () => this.togglePersonsHandler() } >Toggle Persons</button> */}
        <button
          className={ buttonClasses.join( ' ' ) }
          onClick={ () => this.togglePersonsHandler() } >Toggle Persons</button>
        { persons }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

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
    let persons = null;

    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    if ( this.state.showPersons ) {
      buttonStyle.backgroundColor = 'red';
      buttonStyle[ ':hover' ] = {
        backgroundColor: 'salmon',
        color: 'black'
      }

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


    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button
            style={ buttonStyle }
            onClick={ () => this.togglePersonsHandler() } >Toggle Persons</button>
          { persons }
        </div>
      </StyleRoot>
    );
  }
}

export default Radium( App );

import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
import Radium from 'radium';
import Person from './Person/Person';

/////////// React hooks method

// const app = ( props ) => {
//   const [ personsState, setPersonsState ] = useState( {
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ]
//   } );

//   const switchNameHandler = ( newName ) => {
//     setPersonsState( {
//       persons: [
//         { name: newName, age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 }
//         ]
//     } );
//   };
    
//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={ switchNameHandler.bind(this, 'Maximilian' ) }>Switch Name</button>
//       <Person
//         name={ personsState.persons[0].name }
//         age={ personsState.persons[0].age } />
//       <Person
//         name={ personsState.persons[1].name }
//         age={ personsState.persons[1].age }
//         click={ switchNameHandler.bind( this, 'MaxiPad!' ) } >My Hobbies: Racing</Person>
//       <Person
//         name={ personsState.persons[2].name }
//         age={ personsState.persons[2].age } />
//     </div>
//   );
// };

// export default app;

/////////// Non-React hooks method

class App extends Component {
  state = {
    persons: [
      { id: 'foo', name: 'Max', age: 28 },
      { id: 'bar', name: 'Manu', age: 29 },
      { id: 'baz', name: 'Stephanie', age: 26 }
    ]
  };

  nameChangedHandler = ( event, id ) => {
    // Get the index of the person being updated
    const personIndex = this.state.persons.findIndex( ( p ) => {
      return p.id === id;
    } );

    // Make a copy of that person and modify the name
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
  }

  deletePersonHandler = ( personIndex ) => {
    // Create a new copy of persons
    // const persons = this.state.persons.slice();
    const persons = [ ...this.state.persons ];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  // The button uses an arrow function call which means I don't have to use bind()
  // However, it may cause React to re-render too often and may be inefficient
  // Suggestion to use arrow functions only when necessary
  render() {
    const style = {
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

    let persons = null;

    if ( this.state.showPersons ) {
      style.backgroundColor = 'red';
      style[ ':hover' ] = {
        backgroundColor: 'salmon',
        color: 'black'
      }

      persons = (
        <div>
          {
            this.state.persons.map( ( person, index ) => {
              return (
                <Person
                  click={ () => this.deletePersonHandler( index ) }
                  name={ person.name }
                  age={ person.age }
                  key={ person.id }
                  changed={ ( event ) => this.nameChangedHandler( event, person.id ) } />
              );
            } )
          }
        </div>
      );
    }

    const classes = [];
    if ( this.state.persons.length <= 2 ) {
      classes.push( 'red' );
    }
    if ( this.state.persons.length <= 1 ) {
      classes.push( 'bold' );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={ classes.join( ' ' ) } >This is really working!</p>
        <button
          style={ style }
          onClick={ () => this.togglePersonsHandler() }>Toggle Persons</button>
        { persons }
      </div>
    );
  }
}

export default Radium( App );

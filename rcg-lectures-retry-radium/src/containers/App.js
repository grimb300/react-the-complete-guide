import React, { Component } from 'react';
import classes from './App.css';
// import Persons from '../components/Persons/Persons';
import Persons from '../components/Persons/PersonsClass';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor( props ) {
    super( props );
    console.log( '[App.js] constructor' );
  }
  
  state = {
    persons: [
      { id: 'foo', name: 'Max', age: 28 },
      { id: 'bar', name: 'Manu', age: 29 },
      { id: 'baz', name: 'Stephanie', age: 26 }
    ],  
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps( props, state ) {
    console.log( '[App.js] getDerivedStateFromProps', props );
    return state;
  }

  componentDidMount() {
    console.log( '[App.js] componentDidMount' );
  }

  shouldComponentUpdate( nextProps, nextState ) {
    console.log( '[App.js] shouldComponentUpdate' );
    return true;
  }

  componentDidUpdate() {
    console.log( '[App.js] componentDidUpdate' );
  }

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
    console.log( '[App.js] render' );

    let persons = null;
    if ( this.state.showPersons ) {
      persons = <Persons
                  persons={ this.state.persons }
                  clicked={ this.deletePersonHandler }
                  changed={ this.nameChangedHandler } />
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
        <button onClick={ () => { this.setState( { showCockpit: ! this.state.showCockpit } ) } }>Toggle Cockpit</button>
        {
          this.state.showCockpit ?
            <Cockpit
              title={ this.props.appTitle }
              showPersons={ this.state.showPersons }
              numPersons={ this.state.persons.length }
              toggle={ this.togglePersonsHandler } />
            : null
        }
        { persons }
      </div>
    );
  }
}

export default App;

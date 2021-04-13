import React, { Component } from 'react';
import classes from './App.css';
// import Persons from '../components/Persons/Persons';
import Persons from '../components/Persons/PersonsClass';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

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
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
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
    // Passing a function instead of object due to new changeCounter value
    // using the previous state (it is unreliable when using this.state)
    // this.setState( {
    //   persons: persons,
    //   changeCounter: this.state.changeCounter + 1
    // } );
    this.setState( ( prevState, props ) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    } );
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

  logInHandler = () => {
    console.log( 'Loggin in, set authenticated to true' );
    this.setState( { authenticated: true } );
  }

  render() {
    console.log( '[App.js] render' );

    let persons = null;
    if ( this.state.showPersons ) {
      persons = <Persons
                  persons={ this.state.persons }
                  clicked={ this.deletePersonHandler }
                  changed={ this.nameChangedHandler }
                  isAuthenticated={ this.state.authenticated } />
    }  

    const paragraphClasses = [];
    if ( this.state.persons.length <= 2 ) {
      paragraphClasses.push( classes.red );
    }  
    if ( this.state.persons.length <= 1 ) {
      paragraphClasses.push( classes.bold );
    }  

    return (
      <Aux>
        <button onClick={ () => { this.setState( { showCockpit: ! this.state.showCockpit } ) } }>Toggle Cockpit</button>
        {
          this.state.showCockpit ?
            <Cockpit
              title={ this.props.appTitle }
              showPersons={ this.state.showPersons }
              numPersons={ this.state.persons.length }
              toggle={ this.togglePersonsHandler }
              login={ this.logInHandler } />
            : null
        }
        { persons }
      </Aux>
    );
  }
}

export default withClass( App, classes.App );

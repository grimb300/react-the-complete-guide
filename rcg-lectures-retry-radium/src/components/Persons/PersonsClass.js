import React, { Component } from 'react';

import Person from './Person/PersonClass';

class Persons extends Component {
  // Commenting out because it throws a warning due to initial state being undefined
  // static getDerivedStateFromProps( props, state ) {
  //   console.log( '[PersonsClass.js] getDerivedStateFromProps' );
  //   return state;
  // }

  // This hook has been deprecated
  // componentWillReceiveProps( props ) {
  //   console.log( '[PersonsClass.js] componentWillReceiveProps', props );
  // }

  shouldComponentUpdate( nextProps, nextState ) {
    console.log( '[PersonsClass.js] shouldComponentUpdate' );
    // NOTE: This compare is comparing the pointers to the persons arrays
    //       This is okay because when we change it via the onClick and onChange events
    //       we create a new array, thereby changing the pointer.
    // return this.props.persons !== nextProps.persons ||
    //         this.props.isAuthenticated !== nextProps.isAuthenticated;
    return true;
  }

  getSnapshotBeforeUpdate( prevProps, prevState ) {
    console.log( '[PersonsClass.js] getSnapshotBeforeUpdate' );
    return { message: 'Snapshot!' };
  }

  // This hook has been deprecated
  // componentWillUpdate() {
  //   console.log( '[PersonsClass.js] componentWillUpdate' );
  // }

  componentDidUpdate( prevProps, prevState, snapshot ) {
    console.log( '[PersonsClass.js] componentDidUpdate:', snapshot );
  }

  componentWillUnmount() {
    console.log( '[Persons.js] componentWillUnmount' );
  }

  render() {
    console.log( '[Persons.js] rendering...' );
    return this.props.persons.map( ( person, index ) => {
      return (
        <Person
          name={ person.name }
          age={ person.age }
          key={ person.id }
          click={ () => this.props.clicked( index ) }
          changed={ ( event )=> this.props.changed( event, person.id ) } />
      );
    } );
  }
}

export default Persons;
/**
 * Class based component method
 */
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  };

  switchNameHandler = ( newName ) => {
    // console.log( 'Was clicked!' );
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState(
      {
        persons: [
          { name: newName, age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 27 }
        ],
        otherState: 'some other value'
      }
    );
  };

  nameChangedHandler = ( event ) => {
    console.log('Saw text change');
    this.setState(
      {
        persons: [
          { name: 'Max', age: 28 },
          { name: event.target.value, age: 29 },
          { name: 'Stephanie', age: 26 }
        ]
      }
    );
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler( 'Maximilian!!' )}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind( this, 'Max!' )}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    // This is equivalent to the JSX above
    // return React.createElement( 'div', { className: 'App' }, React.createElement( 'h1', null, 'Hi, I\'m a React App!'  ));
  }
}

export default App;

/**
 * React hooks method
 */
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {
//   const [ personsState, setPersonsState ] = useState(
//     {
//       persons: [
//         { name: 'Max', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 26 }
//       ]
//     }
//   );
//   // Since hooks doesn't use automatic merging of state objects,
//   // need to break otherState into its own state value
//   const [ otherState, setOtherState ] = useState(
//     'some other value'
//   );

//   const switchNameHandler = () => {
//     // console.log( 'Was clicked!' );
//     // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
//     setPersonsState(
//       {
//         persons: [
//           { name: 'Maximilian', age: 28 },
//           { name: 'Manu', age: 29 },
//           { name: 'Stephanie', age: 27 }
//         ]
//       }
//     );
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App!</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// };

// export default app;

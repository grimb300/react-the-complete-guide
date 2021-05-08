import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    inputString: ''
  }

  stringChangeHandler = ( event ) => {
    this.setState( { inputString: event.target.value } );
  };

  charClickHandler = ( index ) => {
    const oldString = this.state.inputString;
    const newString = oldString.substr( 0, index ) + oldString.substr( index + 1 );
    this.setState( { inputString: newString } );
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph)</li>
          <li>Create a new component (=&gt; ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=&gt; CharComponent) and style it as an inline box (=&gt; display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black)</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop</li>
          <li>When you click a CharComponent, it should be removed from the entered list</li>
        </ol>
        <hr />

        <input
          type="text"
          value={ this.state.inputString }
          onChange={ ( event ) => this.stringChangeHandler( event ) } />
        <p>There are { this.state.inputString.length } characters in the string.</p>
        <ValidationComponent length={ this.state.inputString.length } />
        {
          this.state.inputString.split( '' ).map( ( char, index ) => {
            return (
              <CharComponent
              char={ char }
              key={ index }
              click={ this.charClickHandler.bind( this, index ) } />
            );
          } )
        }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="App">
          <h1>This is my App!</h1>
          <Card />
        </div>
      </StyleRoot>
    );
  }
}

export default Radium( App );

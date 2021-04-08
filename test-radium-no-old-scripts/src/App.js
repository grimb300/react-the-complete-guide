import './App.css';
import Card from './Card/Card';
import Radium, { StyleRoot } from 'radium';

function App() {
  return (
    <StyleRoot>
      <div className="App">
        <h1>This is my app!</h1>
        <Card />
      </div>
    </StyleRoot>
  );
}

export default Radium( App) ;

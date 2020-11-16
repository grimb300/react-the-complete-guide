import React from 'react';

const inputStyle = {
  border: '1px solid pink',
  backgroundColor: 'purple',
  color: 'white',
  fontSize: '2em'
}

const userInput = ( props ) => {
  return (
    <div className="UserInput">
      <p>Username:</p>
      <input
        type="text"
        onChange={props.change}
        value={props.username}
        style={inputStyle} />
    </div>
  );
};

export default userInput;
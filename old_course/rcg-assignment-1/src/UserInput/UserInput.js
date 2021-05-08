import React from 'react';

const userInput = ( props ) => {
  const styles = {
    fontSize: '24px',
    border: '5px solid red'
  };

  return (
    <div className="UserInput">
      <input
        style={ styles }
        type="text"
        onChange={ props.changed }
        value={ props.username } />
    </div>
  );
};

export default userInput;
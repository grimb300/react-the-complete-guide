import React from 'react';
import './UserOutput.css';

const userOutput = ( props ) => {
  return (
    <div className="UserOutput">
      <h3>User { props.username } says:</h3>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </div>
  );
};

export default userOutput;
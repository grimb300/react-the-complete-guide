import React from 'react';
import Radium from 'radium';

const card = () => {
  const style = {
    backgroundColor: 'salmon',
    width: '65%',
    padding: '20px',
    margin: '0 auto',
    ':hover': {
      backgroundColor: 'red',
      color: 'white'
    },
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };

  return (
    <div className="Card" style={ style }>
      <h3>This is a Card</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet ante nibh, ac suscipit neque tempus id. Praesent pulvinar ex at odio consectetur venenatis. Donec imperdiet orci tortor, nec feugiat lorem iaculis non. Morbi sodales ipsum quis interdum aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque posuere congue consectetur. Mauris hendrerit augue leo, semper gravida enim viverra sed. Proin congue bibendum purus. Nullam egestas tincidunt eros, eu blandit nisl euismod nec. In eleifend aliquam leo, vitae ultrices quam vehicula ac. Morbi tempor metus at mi laoreet pellentesque a sed tortor. Donec viverra scelerisque eros a dignissim.</p>
    </div>
  );
};

export default Radium( card );
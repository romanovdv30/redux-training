import React from 'react';

const User = (props) => {
  const { name, age} = props.data;
  return (
    <div>
      <div>{ name }</div>
      <div>{ age }</div>
      <button onClick={ props.removeUser }>Remove user</button>
    </div>
  );
};

export default User;
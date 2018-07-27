import React from 'react';

const SongItem = (props) => {
  const { title, length } = props.data;
  return (
    <div>
      <div>{ title }</div>
      <div>{ length }</div>

      <button onClick={props.deleted}>Delete Song</button>
    </div>
  );
};

 export default SongItem;

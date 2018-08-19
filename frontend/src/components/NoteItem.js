import React from 'react';

const NoteItem = (props) => {
  return (
    <li onClick={(event) => props.handleClick(event, props)}>
      <h2 >{props.title}</h2>
      <p>{props.body.slice(0, 18)}...</p>
    </li>
  );
}

export default NoteItem;
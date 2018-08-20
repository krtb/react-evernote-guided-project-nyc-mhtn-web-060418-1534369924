import React from 'react';

const NoteItem = (props) => {
  return (
    <React.Fragment>
    <li onClick={(event) => props.handleClick(event, props)}>
      <h2 >{props.title}</h2>
      <p>{props.body.slice(0, 18)}...</p>
    </li>
    <button onClick={()=> props.handleDelete(props.oneNote.id)}>Delete</button>
    </React.Fragment>
  );
}

export default NoteItem;
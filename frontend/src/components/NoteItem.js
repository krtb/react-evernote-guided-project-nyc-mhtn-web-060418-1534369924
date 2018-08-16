import React from 'react';

const NoteList = (props) => (
  <li>
    <h2>{props.title}</h2>
    <p>{props.body.slice(0,18)}...</p>
  </li>
);

export default NoteList;

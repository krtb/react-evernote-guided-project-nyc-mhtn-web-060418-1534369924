import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  // console.log('cool', props.noteDetail.title);
  return (
    <Fragment>
      <h2>{props.noteDetail.title}</h2>
      <p>{props.noteDetail.body}</p>
      <button onClick={(event)=> props.handleEdit(event, props)} >Edit</button>
    </Fragment>
  );
}

export default NoteViewer;

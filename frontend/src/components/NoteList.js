import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {

  const notesArray = props.secondLevelNotesDAta.map((oneNoteObj) => {
    return <NoteItem handleDelete={props.handleDelete} handleEdit={props.handleEdit} handleClick={props.handleClick} oneNote={oneNoteObj} key={oneNoteObj.id} title={oneNoteObj.title} body={oneNoteObj.body} />
  })

  return (
    <ul>
      {notesArray}
    </ul>
  );
}

export default NoteList;
